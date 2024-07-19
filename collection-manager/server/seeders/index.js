const studentSeeder = require("./studentSeeder");
const departmentSeeder = require("./departmentSeeder");
const teacherSeeder = require("./teacherSeeder");

const runSeeders = async () => {
  await studentSeeder();
  await departmentSeeder();
  await teacherSeeder();
};

module.exports = runSeeders;
