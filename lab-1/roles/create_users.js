// Создание учебных баз и пользователей.
// Запускать под администратором MongoDB.

const databases = [
  { dbName: "study_db1", userName: "student1" },
  { dbName: "study_db2", userName: "student2" }
];

for (const item of databases) {
  const database = db.getSiblingDB(item.dbName);

  database.materials.updateOne(
    { _id: "welcome" },
    { $setOnInsert: { title: "Учебная коллекция" } },
    { upsert: true }
  );

  if (database.getUser(item.userName)) {
    print(`Пользователь ${item.userName} уже существует в ${item.dbName}.`);
    continue;
  }

  print(`Придумайте пароль для ${item.userName}:`);

  database.createUser({
    user: item.userName,
    pwd: passwordPrompt(),
    roles: []
  });

  print(`Пользователь ${item.userName} создан в ${item.dbName}.`);
}