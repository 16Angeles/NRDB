const database = db.getSiblingDB("study_db1");

const roles = [
  {
    role: "materialsReader",
    actions: ["find"]
  },
  {
    role: "materialsEditor",
    actions: ["find", "insert", "update"]
  }
];

for (const item of roles) {
  if (database.getRole(item.role)) {
    print(`Роль ${item.role} уже существует.`);
    continue;
  }

  database.createRole({
    role: item.role,
    privileges: [
      {
        resource: { db: "study_db1", collection: "materials" },
        actions: item.actions
      }
    ],
    roles: []
  });

  print(`Роль ${item.role} создана. Операции: ${item.actions.join(", ")}`);
}