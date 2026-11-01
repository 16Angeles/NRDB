const database = db.getSiblingDB("study_db1");

print("Разрешения роли до изменения:");
printjson(database.getRole("materialsEditor", { showPrivileges: true }).privileges);

database.grantPrivilegesToRole("materialsEditor", [
  {
    resource: { db: "study_db1", collection: "materials" },
    actions: ["remove"]
  }
]);

print("Разрешения роли после изменения:");
printjson(database.getRole("materialsEditor", { showPrivileges: true }).privileges);