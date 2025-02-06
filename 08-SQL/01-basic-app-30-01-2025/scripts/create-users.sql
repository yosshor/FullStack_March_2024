create database store_mrc24;

use store_mrc24;

-- create users table --
CREATE TABLE users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE users;

ALTER TABLE users 
CHANGE COLUMN id user_id INT AUTO_INCREMENT;

INSERT INTO users (username, email) VALUES ('david', 'david@example.com');

INSERT INTO users (username, email) VALUES 
    ('user1', 'user1@example.com'),
    ('user2', 'user2@example.com');

SELECT * FROM users;

SELECT user_id, username from users;

CREATE TABLE orders (
    order_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    total_amount DECIMAL(10,2) NOT NULL,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

DESCRIBE orders;

INSERT INTO orders (user_id, total_amount) 
VALUES (1, 199.99);

select * from orders;

-- Basic JOIN (INNER JOIN) to get all orders with user information
SELECT 
    u.username,
    u.email,
    o.order_id,
    o.total_amount,
    o.order_date
FROM users u
JOIN orders o ON u.user_id = o.user_id;

-- LEFT JOIN to get all users, even those without orders
SELECT 
    u.username,
    u.email,
    o.order_id,
    o.total_amount,
    o.order_date
FROM users u
LEFT JOIN orders o ON u.user_id = o.user_id;

SELECT 
    u.username,
    u.email,
    o.order_id,
    o.total_amount,
    o.order_date
FROM users u
RIGHT JOIN orders o ON u.user_id = o.user_id;

-- With aggregation to get total orders per user --
SELECT 
    u.username,
    u.email,
    COUNT(o.order_id) as total_orders,
    SUM(o.total_amount) as total_spent
FROM users u
LEFT JOIN orders o ON u.user_id = o.user_id
GROUP BY u.user_id, u.username, u.email;


