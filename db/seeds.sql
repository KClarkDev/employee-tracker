INSERT INTO departments (dept_name)
VALUES ("Ecology"),
       ("Engineering"),
       ("GIS"),
       ("Sales"),
       ("Acquisitions");

INSERT INTO roles (title, salary, department_id)
VALUES ("Engineer I", 60000, 2),
("Engineer II", 75000, 2),
("Engineer III", 90000, 2),
("Geospatial Analyst I", 50000, 3),
("Geospatial Analyst II", 60000, 3),
("Geospatial Analyst III", 70000, 3),
("Ecologist I", 40000, 1),
("Ecologist II", 5000, 1),
("Ecologist III", 60000, 1),
("Sales Representative", NULL, 4),
("Land Representative", NULL, 5),
("Marketing Specialist", 55000, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Tyler", "Schulz", 6, NULL ),
("Samantha", "Brown", 7, NULL),
("Caitlin", "Jones", 9, NULL),
("Jason", "Miller", 10, NULL),
("Julia", "Grayson", 2, NULL);

UPDATE employees SET manager_id = 1 WHERE first_name = "Samantha";
