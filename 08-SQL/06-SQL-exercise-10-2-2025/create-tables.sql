-- Flight Company table
CREATE TABLE Flight_Company (
    company_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    iata_code CHAR(2)
);

-- Modified Airplane table
CREATE TABLE Airplane (
    airplane_id INT PRIMARY KEY AUTO_INCREMENT,
    model VARCHAR(50),
    capacity INT,
    company_id INT,
    FOREIGN KEY (company_id) REFERENCES Flight_Company(company_id)
);

-- Modified Flight table
CREATE TABLE Flight (
    flight_id INT PRIMARY KEY AUTO_INCREMENT,
    airplane_id INT,
    departure_date DATE,
    departure_time TIME,
    arrival_time TIME,
    price DECIMAL(10,2),
    origin VARCHAR(3),
    destination VARCHAR(3),
    FOREIGN KEY (airplane_id) REFERENCES Airplane(airplane_id)
);

-- Seat table remains similar
CREATE TABLE Seat (
    seat_id INT PRIMARY KEY AUTO_INCREMENT,
    airplane_id INT,
    seat_number VARCHAR(3),
    FOREIGN KEY (airplane_id) REFERENCES Airplane(airplane_id)
);

-- Flight_Seats table modified
CREATE TABLE Flight_Seats (
    flight_id INT,
    seat_id INT,
    passenger_id BIGINT NULL,
    seat_row TINYINT,
    seat CHAR(1),
    PRIMARY KEY (flight_id, seat_id),
    FOREIGN KEY (flight_id) REFERENCES Flight(flight_id),
    FOREIGN KEY (seat_id) REFERENCES Seat(seat_id),
    FOREIGN KEY (passenger_id) REFERENCES Passenger(passenger_id)
);

-- Passenger table remains the same
CREATE TABLE Passenger (
    passenger_id BIGINT PRIMARY KEY,
    name VARCHAR(60),
    passport_number VARCHAR(50)
);


CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM('Passenger', 'Employee', 'Sysadmin', 'Waiting', 'Not_Active') DEFAULT 'Waiting',
    dateTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


INSERT INTO users (username, email, password, role) VALUES
('john_doe', 'john.doe@example.com', '$2y$10$GKs7U8ByenTUplNg7HqHXeXg5AvW8VD5J2CLZGfqZ9SOoYburaGuy', 'Passenger'),
('jane_smith', 'jane.smith@example.com', '$2y$10$LteYQTzQZJ8MK9VYtVwPjuM2YZ.g4nYA0RrLYnLkXqg5ABWIaQUPe', 'Employee'),
('admin_user', 'admin@system.com', '$2y$10$P3KHrSYswIRyPV/7MQzr0.HDvbG1NbNvQY8ZwVHhXLBZJG/cBk2CK', 'Sysadmin'),
('new_member', 'new.member@example.com', '$2y$10$EGzqRlCsGxZ8oUl/vwY9ZekSJ1YpUwK9Yx11DsR5H2UDvNnpHEbHa', 'Waiting'),
('inactive_user', 'inactive@example.com', '$2y$10$yP64xkGn0xHI9qvNFQqTbeEySK.wGZcqKP9FXV/Ld4WxBnZYST.7S', 'Not_Active'),
('alex_jones', 'alex.jones@example.com', '$2y$10$TvU5lUkzDQNR.UIWJVcgG.hwzF3eF4cLPJm2tn4/gU/GqXK7.K.U6', 'Passenger'),
('sara_miller', 'sara.miller@example.com', '$2y$10$zQY3p.KpROJxUDj2O9tQVuLxY/E6Y2gFs9PzvSWEy7qJd5qxlRSHS', 'Employee'),
('robert_brown', 'robert.brown@example.com', '$2y$10$XsxvM3Jg2NvMpVzA1t2a3e5F6h/UVexP8e9dQGXtNfY3iWDjm50Sm', 'Passenger'),
('lisa_white', 'lisa.white@example.com', '$2y$10$JFY3RkQ2g5RK7mN.dWtF5.f.EPJKh4aezZf9RwCb3uUj9oUvY1jSm', 'Waiting'),
('tech_support', 'support@system.com', '$2y$10$A9kNw9UDqGHtPSHVJ2UqyeVPwxiN5N0QNtWUH.l.I00f2Xh5aSMTm', 'Employee');

