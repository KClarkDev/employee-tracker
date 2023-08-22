SELECT employees.id AS Employee_ID,
            employees.first_name AS First_Name,
            employees.last_name AS Last_Name,
            roles.title AS Job_Title,
            roles.salary AS Salary,
            departments.dept_name AS Department_Name,
            (SELECT first_name FROM employees AS employeeManagers WHERE employees.manager_id = employeeManagers.id) AS Manager_ID
     FROM employees
     JOIN roles ON employees.role_id = roles.id
     JOIN departments ON roles.department_id = departments.id