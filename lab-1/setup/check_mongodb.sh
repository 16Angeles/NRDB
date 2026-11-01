#!/usr/bin/env bash
set -euo pipefail

if mongosh --quiet --eval 'quit(db.adminCommand({ ping: 1 }).ok === 1 ? 0 : 1)' \
  >/dev/null 2>&1; then
  echo "все топ и воркает"
else
  echo "что-то не воркает"
  exit 1
fi