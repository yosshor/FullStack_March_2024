-- drop database students;

create database students;
use students;


-- 3NF Example
-- Creating a database schema for a university system that keeps track of students, instructors, courses, and student registrations.
-- Each student has a unique student ID, name, and email.
create table Students(
    student_id INT PRIMARY KEY AUTO_INCREMENT,
    student_name VARCHAR(50),
    student_email VARCHAR(50)
);

-- Each instructor has a unique instructor ID, name, and email.
CREATE TABLE Instructors (
    instructor_id INT PRIMARY KEY AUTO_INCREMENT,
    instructor_name VARCHAR(50),
    instructor_email VARCHAR(50)
);

-- Each course has a unique course ID, course code, course name, and instructor ID.
CREATE TABLE Courses (
    course_id INT PRIMARY KEY AUTO_INCREMENT,
    course_code VARCHAR(10) UNIQUE,
    course_name VARCHAR(100),
    instructor_id INT,
    FOREIGN KEY (instructor_id) REFERENCES Instructors(instructor_id)
);


-- Each student registration has a student ID, course ID, and grade.
create table Registration(
    student_id INT,
    course_id  INT,
    grade DECIMAL(5,2),
    PRIMARY KEY(student_id, course_id),
    FOREIGN KEY(student_id) REFERENCES Students(student_id),
    FOREIGN KEY(course_id ) REFERENCES Courses(course_id )
);

-- Inserting data into the Students tables
INSERT INTO Students (student_name, student_email) VALUES
('Alice Johnson', 'alice.johnson@example.com'),
('Bob Smith', 'bob.smith@example.com'),
('Charlie Brown', 'charlie.brown@example.com'),
('David Lee', 'david.lee@example.com'),
('Emma Wilson', 'emma.wilson@example.com'),
('Frank Harris', 'frank.harris@example.com'),
('Grace Miller', 'grace.miller@example.com'),
('Henry Clark', 'henry.clark@example.com'),
('Ivy Adams', 'ivy.adams@example.com'),
('Jack White', 'jack.white@example.com');

-- Inserting data into the Instructors table
INSERT INTO Instructors (instructor_name, instructor_email) VALUES
('Dr. Alan Turing', 'alan.turing@example.com'),
('Dr. Barbara Liskov', 'barbara.liskov@example.com'),
('Dr. Charles Babbage', 'charles.babbage@example.com'),
('Dr. Donald Knuth', 'donald.knuth@example.com'),
('Dr. Edsger Dijkstra', 'edsger.dijkstra@example.com'),
('Dr. Grace Hopper', 'grace.hopper@example.com'),
('Dr. John McCarthy', 'john.mccarthy@example.com'),
('Dr. Leslie Lamport', 'leslie.lamport@example.com'),
('Dr. Robert Floyd', 'robert.floyd@example.com'),
('Dr. Tim Berners-Lee', 'tim.berners-lee@example.com');

-- Inserting data into the Courses table
INSERT INTO Courses (course_code, course_name, instructor_id) VALUES
('CS101', 'Introduction to Computer Science', 1),
('CS102', 'Data Structures and Algorithms', 2),
('CS103', 'Operating Systems', 3),
('CS104', 'Database Management Systems', 4),
('CS105', 'Artificial Intelligence', 5),
('CS106', 'Computer Networks', 6),
('CS107', 'Cyber Security', 7),
('CS108', 'Software Engineering', 8),
('CS109', 'Machine Learning', 9),
('CS110', 'Web Development', 10);

-- Inserting data into the Registration table
INSERT INTO Registration (student_id, course_id, grade) VALUES
(1, 1, 85.5),
(2, 1, 78.0),
(3, 2, 92.3),
(4, 3, 66.5),
(5, 4, 74.0),
(6, 5, 88.8),
(7, 6, 80.0),
(8, 7, 69.2),
(9, 8, 95.0),
(10, 9, 82.7);


-- Query to retrieve student registration information including student details,
-- course details, instructor details, and grades.
SELECT 
    s.student_id,
    s.student_name,
    s.student_email,
    c.course_id,
    c.course_code,
    c.course_name,
    i.instructor_id,
    i.instructor_name,
    i.instructor_email,
    r.grade
FROM Registration r
JOIN Students s ON r.student_id = s.student_id
JOIN Courses c ON r.course_id = c.course_id
JOIN Instructors i ON c.instructor_id = i.instructor_id;



