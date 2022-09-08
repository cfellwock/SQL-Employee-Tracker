USE company_db;

INSERT INTO department (name)
VALUES ("Executive"),
("Management"),
("Sales"),
("Learning and Development");

INSERT INTO role (title, salary, department_id)
VALUES ("CEO", 1000000, 1),
("Manager", 150000, 2),
("Sales", 75000, 3),
("Trainer", 60000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Christian", "Fellwock", 1, NULL),
("Corey", "Yates", 2, 1),
("Adam", "Smasher", 3, 2),
("Agent", "Smith", 4, 1);
