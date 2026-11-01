#!/usr/bin/env bash
set -euo pipefail

if [ "$#" -lt 1 ]; then
  exit 1
fi

BACKUP_ROOT="$HOME/mongodb_backups"

umask 077
mkdir -p "$BACKUP_ROOT"

BACKUP_DIR=$(mktemp -d "$BACKUP_ROOT/all_$(date +%Y%m%d_%H%M%S)_XXXXXX")

echo "Папка для копий: $BACKUP_DIR"

for DB_NAME in "$@"; do
  ARCHIVE="$BACKUP_DIR/${DB_NAME}.archive.gz"

  mongodump \
    --host 127.0.0.1 \
    --port 27017 \
    --username labAdmin \
    --authenticationDatabase admin \
    --db "$DB_NAME" \
    --archive="$ARCHIVE" \
    --gzip

  echo "Готово: $ARCHIVE"
done

echo
echo "Резервное копирование завершено."