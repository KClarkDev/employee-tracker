console.log("AT THE TOP OF UTILS.JS");
const server = require("../server.js");
console.log(`The server app is ${server.app}`);

// Utility functions

module.exports = {
  viewDepartments: function () {
    // Read all departments
    console.log("INSIDE VIEWDEPARTMENTS");
    console.log(`The server app (the second time) is ${server.app}`);

    server.app.get("/api/departments", (req, res) => {
      const sql = `SELECT id, dept_name FROM departments`;
      console.log("INSIDE GET REQUEST");
      server.db.query(sql, (err, rows) => {
        if (err) {
          res.status(500).json({ error: err.message });
          return;
        }
        res.json({
          message: "success",
          data: rows,
        });
      });
    });
  },

  viewRoles: function () {},

  viewEmployees: function () {},

  addDepartment: function () {},

  addRole: function () {},

  addEmployee: function () {},

  updateEmployeeRole: function () {},
};
