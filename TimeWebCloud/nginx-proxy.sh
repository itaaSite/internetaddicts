#!/usr/bin/env bash
# Выполняется на VPS. Env: DOMAIN, BACKEND_PORT — reverse proxy на Astro Node (pm2).
# При наличии /etc/letsencrypt/live/$DOMAIN/ — добавляется :443 (тот же прокси или редирект).
set -euo pipefail

export DEBIAN_FRONTEND=noninteractive

DOMAIN="${DOMAIN:?set DOMAIN}"
BACKEND_PORT="${BACKEND_PORT:-4321}"
REDIRECT_TO="${REDIRECT_TO:-}"

apt-get update -qq
apt-get install -y -qq nginx

mkdir -p /var/www/html/.well-known/acme-challenge

CONF="/etc/nginx/sites-available/${DOMAIN}.conf"
ENABLED="/etc/nginx/sites-enabled/${DOMAIN}.conf"
LE_CHAIN="/etc/letsencrypt/live/${DOMAIN}/fullchain.pem"
LE_KEY="/etc/letsencrypt/live/${DOMAIN}/privkey.pem"

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
[[ -f "$LE_CHAIN" && -f "$LE_KEY" ]] && have_ssl=1

write_proxy_blocks() {
	local ssl_lines
	ssl_lines="$(ssl_snippet)"
	if [[ -n "$REDIRECT_TO" ]]; then
		cat >"$CONF" <<EOF
server {
    listen 80;
    listen [::]:80;
    server_name ${DOMAIN};

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
    server_name ${DOMAIN};
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
    server_name ${DOMAIN} _;

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
    server_name ${DOMAIN} _;

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
    server_name ${DOMAIN};
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
