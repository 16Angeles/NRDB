const db1 = db.getSiblingDB("study_db1");
const db2 = db.getSiblingDB("study_db2");

if (db1.getRole("materialsEditor")) {
  db1.dropRole("materialsEditor");
  print("Роль materialsEditor удалена.");
} else {
  print("Роль materialsEditor уже отсутствует.");
}

if (db2.getUser("student2")) {
  db2.dropUser("student2");
  print("Пользователь student2 удалён.");
} else {
  print("Пользователь student2 уже отсутствует.");
}

print("\nПроверка после удаления:");
print("Роль materialsEditor:");
printjson(db1.getRole("materialsEditor"));

print("Пользователь student2:");
printjson(db2.getUser("student2"));