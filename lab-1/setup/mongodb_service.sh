#!/usr/bin/env bash
set -euo pipefail

case "${1:-}" in
  start)
    sudo systemctl start mongod
    ;;
  stop)
    sudo systemctl stop mongod
    ;;
  restart)
    sudo systemctl restart mongod
    ;;
  status)
    systemctl status mongod --no-pager
    ;;
  *)
    exit 1
    ;;
esac