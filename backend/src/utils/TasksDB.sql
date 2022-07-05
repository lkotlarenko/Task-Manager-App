DROP SCHEMA IF EXISTS TasksDB;
CREATE SCHEMA IF NOT EXISTS TasksDB;

CREATE TABLE TasksDB.StatusTypes  (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  type TEXT NOT NULL
);

CREATE TABLE TasksDB.Tasks (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  task TEXT NOT NULL,
  taskStatus INTEGER NOT NULL,
  FOREIGN KEY (taskStatus) REFERENCES TasksDB.StatusTypes (id),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO
  TasksDB.StatusTypes (type)
VALUES
  ("done");

INSERT INTO
  TasksDB.StatusTypes (type)
VALUES
  ("ongoing");
  
INSERT INTO
  TasksDB.StatusTypes (type)
VALUES
  ("pending");

INSERT INTO
  TasksDB.Tasks (task, taskStatus)
VALUES
  ("eat", 1);

INSERT INTO
  TasksDB.Tasks (task, taskStatus)
VALUES
  ("code", 2);

INSERT INTO
  TasksDB.Tasks (task, taskStatus)
VALUES
  ("test db", 3);
