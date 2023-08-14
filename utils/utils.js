console.log("TOP OF UTILS.JS");
const { app, db } = require("../server");

// Utility functions

module.exports = {
  viewDepartments: function () {
    // Read all departments
    app.get("/api/departments", (req, res) => {
      const sql = `SELECT id, dept_name FROM departments`;

      db.query(sql, (err, rows) => {
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
