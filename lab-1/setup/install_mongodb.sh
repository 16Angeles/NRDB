#!/usr/bin/env bash
set -euo pipefail
sudo apt-get update
sudo apt-get install -y curl gnupg ca-certificates

curl -fsSL https://pgp.mongodb.com/server-8.0.asc |
  sudo gpg --batch --yes --dearmor \
    -o /usr/share/keyrings/mongodb-server-8.0.gpg

echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-8.0.gpg ] https://repo.mongodb.org/apt/ubuntu noble/mongodb-org/8.0 multiverse" |
  sudo tee /etc/apt/sources.list.d/mongodb-org-8.0.list > /dev/null

sudo apt-get update
sudo apt-get install -y mongodb-org

sudo systemctl enable --now mongod

sudo systemctl status mongod --no-pager