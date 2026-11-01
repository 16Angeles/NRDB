const collection = db.getSiblingDB("study_db1").lab_load;
const endTime = Date.now() + 3 * 60 * 1000;

let batches = 0;

print("Нагрузка запущена на 3 минуты...");

while (Date.now() < endTime) {
  const operations = [];

  for (let i = 0; i < 100; i++) {
    operations.push({
      updateOne: {
        filter: { _id: i + (batches % 10) * 100 },
        update: {
          $inc: { counter: 1 },
          $set: { updatedAt: new Date() }
        },
        upsert: true
      }
    });
  }

  collection.bulkWrite(operations, { ordered: false });
  collection.findOne({ _id: batches % 1000 });

  batches++;
  sleep(50);
}

print(`Нагрузка завершена. Выполнено пакетов операций: ${batches}.`);