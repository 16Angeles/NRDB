const database = db.getSiblingDB("study_db1");
const role = { role: "materialsReader", db: "study_db1" };

function showRoles(message) {
  print(message);
  printjson(database.getUser("student1").roles);
}

database.grantRolesToUser("student1", [role]);
showRoles("После назначения роли:");

database.revokeRolesFromUser("student1", [role]);
showRoles("После отзыва роли:");

database.grantRolesToUser("student1", [role]);
showRoles("После повторного назначения роли:");