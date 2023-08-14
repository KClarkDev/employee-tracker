// Define the printTable function, used by the utility functions
function printTable(results) {
  console.log("\n");
  console.table(results);
}

// Utility functions
module.exports = {
  viewDepartments: function (db) {
    // Read all departments
    db.query(`SELECT * FROM departments`, function (err, results) {
      printTable(results);
    });
  },

  viewRoles: function (db) {
    // Read all roles
    db.query(`SELECT * FROM roles`, function (err, results) {
      printTable(results);
    });
  },

  viewEmployees: function (db) {
    // Read all employees
    db.query(`SELECT * FROM employees`, function (err, results) {
      printTable(results);
    });
  },

  addDepartment: function (db) {
    // Read all departments
    db.query(`SELECT * FROM departments`, function (err, results) {
      printTable(results);
    });
  },

  addRole: function (db) {
    // Read all departments
    db.query(`SELECT * FROM departments`, function (err, results) {
      printTable(results);
    });
  },

  addEmployee: function (db) {
    // Read all departments
    db.query(`SELECT * FROM departments`, function (err, results) {
      printTable(results);
    });
  },

  updateEmployeeRole: function (db) {
    // Read all departments
    db.query(`SELECT * FROM departments`, function (err, results) {
      printTable(results);
    });
  },
};
