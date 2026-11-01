#!/usr/bin/env bash
set -euo pipefail

mongosh --quiet admin --eval '
  const existing = db.getUser("labAdmin");

  if (existing) {
    print("Пользователь exists.");
  } else {
    db.createUser({
      user: "labAdmin",
      pwd: passwordPrompt(),
      roles: [{ role: "root", db: "admin" }]
    });

    print("Пользователь created.");
  }
'