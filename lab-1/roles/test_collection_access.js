const database = db.getSiblingDB("study_db1");
let passed = true;

print("Проверка чтения разрешённой коллекции materials:");

try {
  const documents = database.materials.find().toArray();
  print(`чтение разрешено, документов: ${documents.length}`);
} catch (error) {
  print(`чтение materials не удалось: ${error.message}`);
  passed = false;
}

print("\nПроверка чтения запрещённой коллекции restricted:");

try {
  database.restricted.find().toArray();
  print("чтение restricted неожиданно разрешено.");
  passed = false;
} catch (error) {
  if (error.code === 13) {
    print("доступ к restricted запрещён (Unauthorized).");
  } else {
    print(`возникла другая ошибка: ${error.message}`);
    passed = false;
  }
}

if (!passed) {
  quit(1);
}

print("\nПроверка ограничений пройдена.");