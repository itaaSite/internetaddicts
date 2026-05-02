#!/usr/bin/env bash
# Let's Encrypt (certbot certonly --webroot) на VPS, один серт на корень + www.
#
# Перед запуском: A/AAAA для ${DOMAIN} и (если используется) CNAME/AAAA www
# должны указывать на IP этой машины, иначе ACME-01 не пройдёт.
#
# Обязательно: CERTBOT_EMAIL
# Пример (экспорт):
#   export CERTBOT_EMAIL=you@mail.ru
#   sudo -E DOMAIN=internetaddicts.ru ./certbot-nginx.sh
# Или:
#   sudo CERTBOT_EMAIL=… ./certbot-nginx.sh
#
# CERTBOT_STAGING=1 — тестовый LE (для отладки).
# CERTBOT_SECONDARY= — пусто, чтобы не добавлять второе имя в серт.
# CERTBOT_EXTRAS — доп. -d, через пробел, напр. "blog.doma.ru m.doma.ru"
set -euo pipefail

export DEBIAN_FRONTEND=noninteractive

DOMAIN="${DOMAIN:-internetaddicts.ru}"
CERTBOT_EMAIL="${CERTBOT_EMAIL:?set CERTBOT_EMAIL (email for ACME)}"
# Если переменная не задана — www; если задана пустой строкой, второго имени в серт не будет
CERTBOT_SECONDARY="${CERTBOT_SECONDARY-www.internetaddicts.ru}"

apt-get update -qq
apt-get install -y -qq certbot
mkdir -p /var/www/html/.well-known/acme-challenge

args=(certbot certonly --webroot -w /var/www/html -d "$DOMAIN" --cert-name "$DOMAIN" --non-interactive --agree-tos -m "$CERTBOT_EMAIL" --expand)

if [[ -n "$CERTBOT_SECONDARY" ]]; then
	args+=(-d "$CERTBOT_SECONDARY")
fi
if [[ -n "${CERTBOT_EXTRAS:-}" ]]; then
	# shellcheck disable=SC2206
	extra=($CERTBOT_EXTRAS)
	for h in "${extra[@]}"; do
		[[ -n "$h" ]] && args+=(-d "$h")
	done
fi

if [[ "${CERTBOT_STAGING:-0}" == "1" ]]; then
	args+=(--staging)
fi

"${args[@]}"

nginx -t
systemctl reload nginx || systemctl restart nginx

echo "OK: LE для ${DOMAIN}${CERTBOT_SECONDARY:+ + $CERTBOT_SECONDARY}${CERTBOT_EXTRAS:+ + $CERTBOT_EXTRAS}"
