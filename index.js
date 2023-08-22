const inquirer = require("inquirer");
const mysql = require("mysql2");

// Enable access to .env variables
require("dotenv").config();

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  }
  //   console.log(`Connected to the company_db database`)
);

// Initial prompt/menu
const question = [
  {
    type: "list",
    name: "userAction",
    message: "What would you like to do?",
    choices: [
      "View all departments",
      "View all roles",
      "View all employees",
      "Add a department",
      "Add a role",
      "Add an employee",
      "Update an employee role",
    ],
  },
];

// Function to present a formatted table showing department names and department ids
function viewDepts() {
  db.query(
    `SELECT id AS ID, dept_name AS Department_Name FROM departments`,
    function (err, results) {
      if (err) throw err;
      console.table(results);
      askForAnotherAction();
    }
  );
}

// Function to present the job title, role id, the department that role belongs to, and the salary for that role
function viewRoles() {
  db.query(
    `SELECT id AS ID, title AS Title, salary AS Salary, dept_name AS Department_Name FROM roles JOIN departments on roles.department_id=departments.id`,
    function (err, results) {
      if (err) throw err;
      console.table(results);
      askForAnotherAction();
    }
  );
}

// Function to present a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
function viewEmployees() {
  db.query(
    `SELECT employees.id AS Employee_ID,
            employees.first_name AS First_Name,
            employees.last_name AS Last_Name,
            roles.title AS Job_Title,
            roles.salary AS Salary,
            departments.dept_name AS Department_Name,
            (SELECT first_name FROM employees AS employeeManagers WHERE employees.manager_id = employeeManagers.id) AS Manager
     FROM employees
     JOIN roles ON employees.role_id = roles.id
     JOIN departments ON roles.department_id = departments.id`,

    function (err, results) {
      if (err) throw err;

      console.table(results);
      askForAnotherAction();
    }
  );
}

// Function to prompt the user to enter the name of the department and that department is added to the database
function addDept() {
  inquirer
    .prompt({
      type: "input",
      name: "department",
      message: "What is the name of the department?",
    })
    .then((answer) => {
      const deptName = answer.department;

      db.query(
        `INSERT INTO departments (dept_name) VALUES (?)`,
        [deptName],
        function (err, results) {
          if (err) throw err;
          console.log(`Successfully added ${departmentName} to departments`);
          askForAnotherAction();
        }
      );
    });
}

// Function to prompt the user to enter the name, salary, and department for the role and that role is added to the database
function addRole() {
  inquirer
    .prompt({
      type: "input",
      name: "roleName",
      message: "What is the name of the role?",
      type: "input",
      name: "roleSalary",
      message: "What is the salary for the role?",
      type: "list",
      name: "roleDept",
      message: "Which department does the role belong to?",
    })
    .then((answer) => {
      const roleName = answer.roleName;
      const roleSalary = answer.roleSalary;
      const roleDept = answer.roleDept;

      db.query(
        `INSERT INTO roles (title, salary, department_id) VALUES (?)`,
        [roleName],
        [roleSalary],
        [roleDept],
        function (err, results) {
          if (err) throw err;
          console.log(
            `Successfully added ${roleName} and associated information to roles`
          );
          askForAnotherAction();
        }
      );
    });
}

// Function to prompt the user to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
function addEmployee() {
  inquirer
    .prompt({
      type: "input",
      name: "department",
      message:
        "Enter the name of the department you want to add to the database:",
    })
    .then((answer) => {
      const deptName = answer.department;

      db.query(
        `INSERT INTO departments (dept_name) VALUES (?)`,
        [deptName],
        function (err, results) {
          if (err) throw err;
          console.log(`Successfully added ${departmentName} to departments`);
          askForAnotherAction();
        }
      );
    });
}

// Function to initialize app
function init() {
  inquirer.prompt(question).then((answer) => {
    switch (answer.userAction) {
      case "View all departments":
        viewDepts();
        break;
      case "View all roles":
        viewRoles();
        break;
      case "View all employees":
        viewEmployees();
        break;
      case "Add a department":
        addDept();
        break;
      case "Add a role":
        addRole();
        break;
      case "Add an employee":
        addEmployee();
        break;
      case "Update an employee role":
        // Function to prompt the user to select an employee to update and their new role and this information is updated in the database
        utils.updateEmployeeRole(db);
        askForAnotherAction();
        break;
      default:
        console.log("Invalid response");
    }
  });
}

function askForAnotherAction() {
  inquirer
    .prompt({
      type: "confirm",
      name: "anotherAction",
      message: "Do you want to perform another query?",
    })
    .then((answer) => {
      if (answer.anotherAction) {
        // If the user wants to perform another action, run init again
        init();
      } else {
        console.log("Goodbye!");
        process.exit();
      }
    });
}

// Function call to initialize app
init();
