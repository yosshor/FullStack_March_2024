create database whatsapp;

use whatsapp;

create table rooms (
room_id int auto_increment primary key,
room_name varchar(45) not null,
last_update date
);

insert into rooms (room_name, last_update) values
("room 2", "2025-04-06");
