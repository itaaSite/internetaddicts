#!/usr/bin/env bash
# Выполняется на VPS. Env: DOMAIN, BACKEND_PORT — reverse proxy на Astro Node (pm2).
# При наличии /etc/letsencrypt/live/$DOMAIN/ — добавляется :443 (тот же прокси или редирект).
set -euo pipefail

export DEBIAN_FRONTEND=noninteractive

DOMAIN="${DOMAIN:?set DOMAIN}"
BACKEND_PORT="${BACKEND_PORT:-4321}"
REDIRECT_TO="${REDIRECT_TO:-}"
# Второе имя хоста (по умолчанию www.<DOMAIN>), чтобы www не попадал в "чужой" vhost.
SECONDARY_DOMAIN="${SECONDARY_DOMAIN:-}"
if [[ -z "$SECONDARY_DOMAIN" && "$DOMAIN" != www.* ]]; then
	SECONDARY_DOMAIN="www.${DOMAIN}"
fi
SERVER_NAMES="${DOMAIN}"
if [[ -n "$SECONDARY_DOMAIN" ]]; then
	SERVER_NAMES="${SERVER_NAMES} ${SECONDARY_DOMAIN}"
fi

apt-get update -qq
apt-get install -y -qq nginx

mkdir -p /var/www/html/.well-known/acme-challenge

CONF="/etc/nginx/sites-available/${DOMAIN}.conf"
ENABLED="/etc/nginx/sites-enabled/${DOMAIN}.conf"
LE_BASE_DIR="/etc/letsencrypt/live"
LE_CHAIN=""
LE_KEY=""

pick_cert_files() {
	if [[ -f "${LE_BASE_DIR}/${DOMAIN}/fullchain.pem" && -f "${LE_BASE_DIR}/${DOMAIN}/privkey.pem" ]]; then
		LE_CHAIN="${LE_BASE_DIR}/${DOMAIN}/fullchain.pem"
		LE_KEY="${LE_BASE_DIR}/${DOMAIN}/privkey.pem"
		return
	fi

	local chain key
	while IFS= read -r chain; do
		key="${chain%/fullchain.pem}/privkey.pem"
		if [[ -f "$key" ]]; then
			LE_CHAIN="$chain"
			LE_KEY="$key"
			return
		fi
	done < <(compgen -G "${LE_BASE_DIR}/${DOMAIN}-*/fullchain.pem" || true)
}

pick_cert_files

ssl_snippet() {
	if [[ -f "$LE_CHAIN" && -f "$LE_KEY" ]]; then
		echo "    ssl_certificate ${LE_CHAIN};"
		echo "    ssl_certificate_key ${LE_KEY};"
		if [[ -f /etc/letsencrypt/options-ssl-nginx.conf ]]; then
			echo "    include /etc/letsencrypt/options-ssl-nginx.conf;"
		fi
		if [[ -f /etc/letsencrypt/ssl-dhparams.pem ]]; then
			echo "    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;"
		fi
	fi
}

have_ssl=0
[[ -n "$LE_CHAIN" && -n "$LE_KEY" && -f "$LE_CHAIN" && -f "$LE_KEY" ]] && have_ssl=1

write_proxy_blocks() {
	local ssl_lines
	ssl_lines="$(ssl_snippet)"
	if [[ -n "$REDIRECT_TO" ]]; then
		cat >"$CONF" <<EOF
server {
    listen 80;
    listen [::]:80;
    server_name ${SERVER_NAMES};

    location /.well-known/acme-challenge/ {
        root /var/www/html;
    }

    location / {
        return 301 ${REDIRECT_TO}\$request_uri;
    }
}
EOF
		if [[ "$have_ssl" -eq 1 ]]; then
			cat >>"$CONF" <<EOF
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name ${SERVER_NAMES};
$(echo "$ssl_lines")

    location / {
        return 301 ${REDIRECT_TO}\$request_uri;
    }
}
EOF
		fi
	else
		if [[ "$have_ssl" -eq 1 ]]; then
			cat >"$CONF" <<EOF
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    server_name ${SERVER_NAMES} _;

    location /.well-known/acme-challenge/ {
        root /var/www/html;
    }

    location / {
        return 301 https://\$host\$request_uri;
    }
}
EOF
		else
			cat >"$CONF" <<EOF
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    server_name ${SERVER_NAMES} _;

    location /.well-known/acme-challenge/ {
        root /var/www/html;
    }

    location / {
        proxy_pass http://127.0.0.1:${BACKEND_PORT};
        proxy_http_version 1.1;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
    }
}
EOF
		fi
		if [[ "$have_ssl" -eq 1 ]]; then
			cat >>"$CONF" <<EOF
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name ${SERVER_NAMES};
$(echo "$ssl_lines")

    location / {
        proxy_pass http://127.0.0.1:${BACKEND_PORT};
        proxy_http_version 1.1;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
    }
}
EOF
		fi
	fi
}

write_proxy_blocks

rm -f /etc/nginx/sites-enabled/default
ln -sf "$CONF" "$ENABLED"

# Один активный сайт: иначе duplicate server_name / default_server (старые dev2, certbot-копии).
our_resolved=$(readlink -f "$CONF")
shopt -s nullglob
for f in /etc/nginx/sites-enabled/*; do
	[[ -e "$f" ]] || continue
	[[ "$(readlink -f "$f" 2>/dev/null || true)" == "$our_resolved" ]] && continue
	rm -f "$f"
done

nginx -t
systemctl reload nginx || systemctl restart nginx

if [[ -n "$REDIRECT_TO" ]]; then
	echo "OK: ${DOMAIN} -> 301 ${REDIRECT_TO} (:80$([[ "$have_ssl" -eq 1 ]] && echo ' + :443'))"
else
	echo "OK: ${DOMAIN} -> 127.0.0.1:${BACKEND_PORT} (:80$([[ "$have_ssl" -eq 1 ]] && echo ' + :443'))"
fi
