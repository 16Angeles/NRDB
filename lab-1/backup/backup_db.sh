#!/usr/bin/env bash
set -euo pipefail

if [ "$#" -ne 1 ]; then
  echo "Использование: bash backup_db.sh ИМЯ_БАЗЫ"
  exit 1
fi

DB_NAME="$1"
BACKUP_ROOT="$HOME/mongodb_backups"

umask 077
mkdir -p "$BACKUP_ROOT"

BACKUP_DIR=$(mktemp -d "$BACKUP_ROOT/backup_$(date +%Y%m%d_%H%M%S)_XXXXXX")
ARCHIVE="$BACKUP_DIR/${DB_NAME}.archive.gz"


mongodump \
  --host 127.0.0.1 \
  --port 27017 \
  --username labAdmin \
  --authenticationDatabase admin \
  --db "$DB_NAME" \
  --archive="$ARCHIVE" \
  --gzip
