CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
burger_id int AUTO_INCREMENT NOT NULL,
burger_name VARCHAR(50),
devoured BOOLEAN,
primary key(burger_id)
)