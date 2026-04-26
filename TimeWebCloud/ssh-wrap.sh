#!/usr/bin/env bash
# Обёртка: если в каталоге скрипта есть .env с PASSWORD=… — ssh через sshpass.
# Иначе обычный ssh (ключ или интерактивный пароль). Пробелы вокруг = в .env не использовать.
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ENV_FILE="$SCRIPT_DIR/.env"

read_password() {
	[[ -f "$ENV_FILE" ]] || return 1
	local line
	while IFS= read -r line || [[ -n "$line" ]]; do
		[[ "$line" =~ ^[[:space:]]*# ]] && continue
		[[ -z "${line// }" ]] && continue
		if [[ "$line" =~ ^PASSWORD=(.*)$ ]]; then
			local val="${BASH_REMATCH[1]}"
			val="${val#"${val%%[![:space:]]*}"}"
			val="${val%"${val##*[![:space:]]}"}"
			val="${val#\"}"
			val="${val%\"}"
			val="${val#\'}"
			val="${val%\'}"
			printf '%s' "$val"
			return 0
		fi
	done < "$ENV_FILE"
	return 1
}

if command -v sshpass >/dev/null 2>&1 && pass="$(read_password 2>/dev/null)" && [[ -n "$pass" ]]; then
	export SSHPASS="$pass"
	exec sshpass -e ssh -o StrictHostKeyChecking=accept-new "$@"
else
	exec ssh "$@"
fi
