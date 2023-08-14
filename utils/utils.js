// Define the printTable function
function printDepartments(results) {
  // Assuming results is an array of objects with department data
  console.log("\n");
  console.log("||DEPARTMENTS||");
  results.forEach((department) => {
    console.log(`ID: ${department.id} | Name: ${department.dept_name}`);
  });
}

// Utility functions
module.exports = {
  viewDepartments: function (db) {
    // Read all departments
    db.query(`SELECT * FROM departments`, function (err, results) {
      printDepartments(results);
    });
    return;
  },

  viewRoles: function () {},

  viewEmployees: function () {},

  addDepartment: function () {},

  addRole: function () {},

  addEmployee: function () {},

  updateEmployeeRole: function () {},
};
