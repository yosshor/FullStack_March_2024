# MySQL Database Normalization Guide

## Overview
Database normalization is a design technique that reduces data redundancy and eliminates data anomalies (Which is basically, one source of truth). This guide demonstrates the process using a university course registration system example.

## Normal Forms

### First Normal Form (1NF)
- Each table cell contains a single value
- Each record is unique
- No repeating groups

### Second Normal Form (2NF)
- Must satisfy 1NF
- All non-key attributes fully depend on the primary key

### Third Normal Form (3NF)
- Must satisfy 2NF
- No transitive dependencies between non-key attributes (A transitive dependency occurs when a non-key attribute (column) depends on another non-key attribute, rather than depending directly on the primary key of the table.)

## Practical Example: Course Registration System

### Initial Unnormalized Table
```sql
Registration(student_id, student_name, student_email, course_code, course_name, instructor_name, instructor_email, grade)
```

### First Normal Form (1NF)
```sql
Registration(
    student_id INT,
    student_name VARCHAR(50),
    student_email VARCHAR(50),
    course_code VARCHAR(10),
    course_name VARCHAR(100),
    instructor_name VARCHAR(50),
    instructor_email VARCHAR(50),
    grade CHAR(2)
)
```

### Second Normal Form (2NF)
```sql
Students(
    student_id INT PRIMARY KEY,
    student_name VARCHAR(50),
    student_email VARCHAR(50)
)

Courses(
    course_code VARCHAR(10) PRIMARY KEY,
    course_name VARCHAR(100),
    instructor_name VARCHAR(50),
    instructor_email VARCHAR(50)
)

Registration(
    student_id INT,
    course_code VARCHAR(10),
    grade CHAR(2),
    PRIMARY KEY(student_id, course_code),
    FOREIGN KEY(student_id) REFERENCES Students(student_id),
    FOREIGN KEY(course_code) REFERENCES Courses(course_code)
)
```

### Third Normal Form (3NF)
```sql
Students(
    student_id INT PRIMARY KEY,
    student_name VARCHAR(50),
    student_email VARCHAR(50)
)

Instructors(
    instructor_id INT PRIMARY KEY,
    instructor_name VARCHAR(50),
    instructor_email VARCHAR(50)
)

Courses(
    course_code VARCHAR(10) PRIMARY KEY,
    course_name VARCHAR(100),
    instructor_id INT,
    FOREIGN KEY(instructor_id) REFERENCES Instructors(instructor_id)
)

Registration(
    student_id INT,
    course_code VARCHAR(10),
    grade CHAR(2),
    PRIMARY KEY(student_id, course_code),
    FOREIGN KEY(student_id) REFERENCES Students(student_id),
    FOREIGN KEY(course_code) REFERENCES Courses(course_code)
)
```

## Benefits of Normalization
- Eliminates data redundancy
- Ensures data consistency
- Reduces update anomalies
- Improves data integrity
- Saves storage space
- Makes database maintenance easier