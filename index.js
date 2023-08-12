const inquirer = require("inquirer");

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
        console.log("You chose to view all departments");
        break;
      case "View all roles":
        // Function to present the job title, role id, the department that role belongs to, and the salary for that role
        console.log("You chose to view all roles");
        break;
      case "View all employees":
        // Function to present a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
        console.log("You chose to view all employees");
        break;
      case "Add a department":
        // Function to prompt the user to enter the name of the department and that department is added to the database
        console.log("You chose to add a department");
        break;
      case "Add a role":
        // Function to prompt the user to enter the name, salary, and department for the role and that role is added to the database
        console.log("You chose to add a role");
        break;
      case "Add an employee":
        // Function to prompt the user to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
        console.log("You chose to add an employee");
        break;
      case "Update an employee role":
        // Function to prompt the user to select an employee to update and their new role and this information is updated in the database
        console.log("You chose to update an employee role");
        break;
      default:
        console.log("Invalid response");
    }
  });
}

// Function call to initialize app
init();
