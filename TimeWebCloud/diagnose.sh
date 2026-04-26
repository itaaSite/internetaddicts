#!/usr/bin/env bash
# Аргументы: DOMAIN BACKEND_PORT (как в Makefile: bash -s $(DOMAIN) $(SERVE_PORT))
set -euo pipefail

DOMAIN="${1:-_}"
PORT="${2:-4321}"

echo "=== system ==="
uname -a || true

echo "=== nginx ==="
systemctl is-active nginx 2>/dev/null || true
nginx -t 2>&1 || true

echo "=== pm2 ==="
command -v pm2 >/dev/null 2>&1 && pm2 list || echo "pm2: not installed"

echo "=== listen :${PORT} (ss) ==="
ss -tlnp 2>/dev/null | grep -E ":${PORT}\\b" || echo "nothing on :${PORT}"

echo "=== curl backend ==="
curl -sS -o /dev/null -w "127.0.0.1:${PORT} -> HTTP %{http_code}\n" "http://127.0.0.1:${PORT}/" || echo "curl backend failed"

echo "=== curl Host: ${DOMAIN} ==="
curl -sS -o /dev/null -w "localhost:80 / Host ${DOMAIN} -> HTTP %{http_code}\n" -H "Host: ${DOMAIN}" "http://127.0.0.1/" || echo "curl nginx failed"
curl -sS -o /dev/null -w "localhost:80 /posts Host ${DOMAIN} -> HTTP %{http_code}\n" -H "Host: ${DOMAIN}" "http://127.0.0.1/posts" || echo "curl nginx /posts failed"
curl -sS -o /dev/null -w "localhost:80 /diary Host ${DOMAIN} -> HTTP %{http_code}\n" -H "Host: ${DOMAIN}" "http://127.0.0.1/diary" || echo "curl nginx /diary failed"
