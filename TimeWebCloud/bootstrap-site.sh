#!/usr/bin/env bash
# Выполняется на VPS (stdin через ssh).
# Env: REMOTE_DIR, DOWNLOAD_URL; опционально EXPECTED_SHA256.
# В архиве уже лежат dist и package.json (и при сборке — package-lock.json) — отдельно манифесты не качаем.
set -euo pipefail

export DEBIAN_FRONTEND=noninteractive

REMOTE_DIR="${REMOTE_DIR:-/opt/internetaddicts}"
DOWNLOAD_URL="${DOWNLOAD_URL:?set DOWNLOAD_URL}"
EXPECTED_SHA256="${EXPECTED_SHA256:-}"

SITE_ROOT="${REMOTE_DIR}/current"
TMP_ZIP="$(mktemp /tmp/astro-dist-XXXXXX.zip)"

cleanup() { rm -f "$TMP_ZIP"; }
trap cleanup EXIT

apt_get() {
	apt-get update -qq
	apt-get install -y -qq "$@"
}

if ! command -v curl >/dev/null 2>&1; then
	apt_get curl ca-certificates
fi
if ! command -v unzip >/dev/null 2>&1; then
	apt_get unzip
fi

need_node=0
if ! command -v node >/dev/null 2>&1; then
	need_node=1
else
	major="$(node -p "process.versions.node.split('.')[0]" 2>/dev/null || echo 0)"
	if [[ "${major:-0}" -lt 18 ]]; then
		need_node=1
	fi
fi

if [[ "$need_node" -eq 1 ]]; then
	curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
	apt_get nodejs
fi

if ! command -v pm2 >/dev/null 2>&1; then
	npm install -g pm2
fi

mkdir -p "$REMOTE_DIR"
curl -fSL -o "$TMP_ZIP" "$DOWNLOAD_URL"

if [[ -n "$EXPECTED_SHA256" ]]; then
	echo "$EXPECTED_SHA256  $TMP_ZIP" | sha256sum -c -
fi

rm -rf "$SITE_ROOT"
mkdir -p "$SITE_ROOT"
unzip -oq "$TMP_ZIP" -d "$SITE_ROOT"

cd "$SITE_ROOT"
if [[ ! -f package.json ]]; then
	echo >&2 "ERROR: в архиве нет package.json — обновите CI (zip с манифестами внутри)."
	exit 1
fi
if [[ -f package-lock.json ]]; then
	npm ci --omit=dev --no-audit --no-fund --legacy-peer-deps
else
	npm install --omit=dev --no-audit --no-fund --legacy-peer-deps
fi

echo "OK: site -> $SITE_ROOT (deps из package.json внутри архива)"
