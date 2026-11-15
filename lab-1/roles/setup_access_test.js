const database = db.getSiblingDB("study_db1");

database.restricted.updateOne(
  { _id: "test" },
  { $setOnInsert: { message: "Документ для проверки доступа" } },
  { upsert: true }
);

print("Коллекция study_db1.restricted подготовлена.");
