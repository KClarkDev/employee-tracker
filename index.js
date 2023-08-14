console.log("TOP OF INDEX.JS");

const inquirer = require("inquirer");
const utils = require("./utils/utils.js");
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
  },
  console.log(`Connected to the company_db database`)
);

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

// Function to initialize app
function init() {
  inquirer.prompt(question).then((answer) => {
    switch (answer.userAction) {
      case "View all departments":
        // Function to present a formatted table showing department names and department ids
        utils.viewDepartments();
        askForAnotherAction();
        break;
      case "View all roles":
        // Function to present the job title, role id, the department that role belongs to, and the salary for that role
        utils.viewRoles();
        askForAnotherAction();
        break;
      case "View all employees":
        // Function to present a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
        utils.viewEmployees();
        askForAnotherAction();
        break;
      case "Add a department":
        // Function to prompt the user to enter the name of the department and that department is added to the database
        utils.addDepartment();
        askForAnotherAction();
        break;
      case "Add a role":
        // Function to prompt the user to enter the name, salary, and department for the role and that role is added to the database
        utils.addRole();
        askForAnotherAction();
        break;
      case "Add an employee":
        // Function to prompt the user to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
        utils.addEmployee();
        askForAnotherAction();
        break;
      case "Update an employee role":
        // Function to prompt the user to select an employee to update and their new role and this information is updated in the database
        utils.updateEmployeeRole();
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
      }
    });
}

// Function call to initialize app
init();

module.exports = {
  init: init,
  askForAnotherAction: askForAnotherAction,
};
