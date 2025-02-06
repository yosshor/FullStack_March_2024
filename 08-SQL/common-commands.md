# Common MySQL Commands Reference

## Database Management

### Creating & Selecting Databases
```sql
-- Create new database
    create database store;
-- List all databases
SHOW DATABASES;

-- Select database to use
USE database_name;

-- Delete database
DROP DATABASE database_name;
```

## Table Operations

### Creating Tables
```sql
-- Basic table creation
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Show all tables
SHOW TABLES;

-- Show table structure
DESCRIBE users;
```

### Modifying Tables
```sql
-- Add column
ALTER TABLE table_name ADD column_name datatype;

-- Drop column
ALTER TABLE table_name DROP COLUMN column_name;

-- Modify column
ALTER TABLE table_name MODIFY column_name new_datatype;

-- Rename table
RENAME TABLE old_name TO new_name;
```

## Data Manipulation

### INSERT Operations
```sql
-- Insert single row
INSERT INTO users (username, email) VALUES ('john_doe', 'john@example.com');

-- Insert multiple rows
INSERT INTO users (username, email) VALUES 
    ('user1', 'user1@example.com'),
    ('user2', 'user2@example.com');
```

### SELECT Operations
```sql
-- Select all columns
SELECT * FROM table_name;

-- Select specific columns
SELECT username, email FROM users;

-- Select with conditions
SELECT * FROM users WHERE username = 'john_doe';

-- Select with ORDER BY
SELECT * FROM users ORDER BY created_at DESC;

-- Select with LIMIT
SELECT * FROM users LIMIT 10;

-- Select with JOIN
SELECT users.username, orders.order_date 
FROM users 
JOIN orders ON users.id = orders.user_id;
```

### UPDATE Operations
```sql
-- Update records
UPDATE users SET email = 'new@example.com' WHERE username = 'john_doe';

-- Update multiple columns
UPDATE users 
SET email = 'new@example.com', 
    username = 'new_john' 
WHERE id = 1;
```

### DELETE Operations
```sql
-- Delete specific records
DELETE FROM users WHERE username = 'john_doe';

-- Delete all records
DELETE FROM users;
```

## Filtering and Sorting

### WHERE Clauses
```sql
-- Basic conditions
SELECT * FROM users WHERE age >= 21;

-- Multiple conditions
SELECT * FROM users WHERE age >= 21 AND country = 'USA';

-- LIKE for pattern matching
SELECT * FROM users WHERE email LIKE '%@gmail.com';

-- IN clause
SELECT * FROM users WHERE country IN ('USA', 'Canada', 'Mexico');

-- BETWEEN clause
SELECT * FROM products WHERE price BETWEEN 10 AND 100;
```

### Sorting Results
```sql
-- Sort ascending
SELECT * FROM users ORDER BY username ASC;

-- Sort descending
SELECT * FROM users ORDER BY created_at DESC;

-- Multiple sort criteria
SELECT * FROM users ORDER BY country ASC, username DESC;
```

## Aggregating Data

### Common Aggregations
```sql
-- Count records
SELECT COUNT(*) FROM users;

-- Sum values
SELECT SUM(amount) FROM orders;

-- Average value
SELECT AVG(price) FROM products;

-- Group By with aggregation
SELECT country, COUNT(*) as user_count 
FROM users 
GROUP BY country;

-- Having clause
SELECT country, COUNT(*) as user_count 
FROM users 
GROUP BY country 
HAVING user_count > 100;
```

## Joins

### Common Join Types
```sql
-- Inner Join
SELECT users.username, orders.order_date 
FROM users 
INNER JOIN orders ON users.id = orders.user_id;

-- Left Join
SELECT users.username, orders.order_date 
FROM users 
LEFT JOIN orders ON users.id = orders.user_id;

-- Right Join
SELECT users.username, orders.order_date 
FROM users 
RIGHT JOIN orders ON users.id = orders.user_id;
```

## Index Management

### Creating and Removing Indexes
```sql
-- Create index
CREATE INDEX index_name ON table_name (column_name);

-- Create unique index
CREATE UNIQUE INDEX index_name ON table_name (column_name);

-- Remove index
DROP INDEX index_name ON table_name;
```

## Users and Privileges

### User Management
```sql
-- Create user
CREATE USER 'username'@'localhost' IDENTIFIED BY 'password';

-- Grant privileges
GRANT ALL PRIVILEGES ON database_name.* TO 'username'@'localhost';

-- Remove privileges
REVOKE ALL PRIVILEGES ON database_name.* FROM 'username'@'localhost';

-- Delete user
DROP USER 'username'@'localhost';
```

## Useful System Commands

### Information Commands
```sql
-- Show MySQL version
SELECT VERSION();

-- Show current database
SELECT DATABASE();

-- Show current user
SELECT USER();

-- Show server status
SHOW STATUS;

-- Show server variables
SHOW VARIABLES;
```

## Tips
1. Always use semicolons (;) to end statements
2. Use proper backups before major operations
3. Test UPDATE and DELETE statements with SELECT first
4. Use LIMIT when testing new queries
5. Remember to commit transactions when using START TRANSACTION
6. Always use WHERE clause with UPDATE and DELETE
7. Use EXPLAIN to analyze query performance