create database foods;

use foods;

create table students (
	student_id INT PRIMARY KEY auto_increment not null,
    student_name varchar(50) not null
    );
    
    create table foods (
    food_id INT PRIMARY KEY auto_increment not null,
    food_name varchar(40) not null,
    food_color varchar(50)
    )