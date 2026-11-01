#!/usr/bin/env bash
set -euo pipefail

if [ "$#" -ne 3 ]; then
  exit 1
fi

ARCHIVE="$1"
DB_NAME="$2"
COLLECTION="$3"

if [ ! -f "$ARCHIVE" ]; then
  echo "Ошибка: архив не найден: $ARCHIVE"
  exit 1
fi


mongorestore \
  --host 127.0.0.1 \
  --port 27017 \
  --username labAdmin \
  --authenticationDatabase admin \
  --archive="$ARCHIVE" \
  --gzip \
  --nsInclude="${DB_NAME}.${COLLECTION}" \
  --drop

echo "Команда восстановления завершена."