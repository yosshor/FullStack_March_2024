-- Exercise 1 Setup: Basic Data Retrieval
CREATE TABLE employees (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    department VARCHAR(50) NOT NULL,
    salary DECIMAL(10,2) NOT NULL
);

-- Insert sample data for employees
INSERT INTO employees (first_name, last_name, department, salary) VALUES
    ('John', 'Smith', 'Marketing', 55000.00),
    ('Emma', 'Johnson', 'Marketing', 62000.00),
    ('Michael', 'Brown', 'IT', 75000.00),
    ('Sarah', 'Davis', 'Marketing', 58000.00),
    ('Robert', 'Wilson', 'HR', 52000.00),
    ('Lisa', 'Anderson', 'Marketing', 61000.00),
    ('David', 'Taylor', 'IT', 78000.00),
    ('Jennifer', 'Martinez', 'Marketing', 59000.00);

-- Exercise 2 Setup: Sales Analysis
CREATE TABLE products (
    product_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) NOT NULL
);

CREATE TABLE sales (
    sale_id INT PRIMARY KEY AUTO_INCREMENT,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    sale_date DATE NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);

-- Insert sample data for products
INSERT INTO products (name, price) VALUES
    ('Laptop', 999.99),
    ('Smartphone', 699.99),
    ('Tablet', 449.99),
    ('Desktop PC', 1299.99),
    ('Printer', 299.99);

-- Insert sample data for sales
INSERT INTO sales (product_id, quantity, sale_date) VALUES
    (1, 3, '2024-01-15'),  -- Laptop
    (1, 2, '2024-01-20'),  -- Laptop
    (2, 5, '2024-01-18'),  -- Smartphone
    (3, 1, '2024-01-22'),  -- Tablet
    (4, 2, '2024-01-25'),  -- Desktop PC
    (2, 3, '2024-01-28'),  -- Smartphone
    (1, 1, '2024-01-30'),  -- Laptop
    (4, 1, '2024-02-01'),  -- Desktop PC
    (5, 4, '2024-02-05');  -- Printer

-- Exercise 3 Setup: Customer Engagement Analysis
CREATE TABLE customers (
    customer_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    join_date DATE NOT NULL
);

CREATE TABLE orders (
    order_id INT PRIMARY KEY AUTO_INCREMENT,
    customer_id INT NOT NULL,
    order_date DATE NOT NULL,
    status VARCHAR(20) NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

CREATE TABLE order_items (
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    unit_price DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(order_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id),
    PRIMARY KEY (order_id, product_id)
);

-- Insert sample data for customers
INSERT INTO customers (name, join_date) VALUES
    ('Alice Johnson', '2023-06-15'),
    ('Bob Wilson', '2023-07-20'),
    ('Carol Martinez', '2023-08-10'),
    ('David Brown', '2023-09-05'),
    ('Eva Davis', '2023-10-15');

-- Insert sample data for orders
-- Note: Using relative dates to ensure "last 90 days" criteria can be met
INSERT INTO orders (customer_id, order_date, status) VALUES
    (1, DATE_SUB(CURRENT_DATE, INTERVAL 20 DAY), 'completed'),
    (1, DATE_SUB(CURRENT_DATE, INTERVAL 45 DAY), 'completed'),
    (1, DATE_SUB(CURRENT_DATE, INTERVAL 60 DAY), 'completed'),
    (2, DATE_SUB(CURRENT_DATE, INTERVAL 30 DAY), 'completed'),
    (2, DATE_SUB(CURRENT_DATE, INTERVAL 95 DAY), 'cancelled'),
    (3, DATE_SUB(CURRENT_DATE, INTERVAL 15 DAY), 'completed'),
    (3, DATE_SUB(CURRENT_DATE, INTERVAL 40 DAY), 'completed'),
    (3, DATE_SUB(CURRENT_DATE, INTERVAL 65 DAY), 'completed'),
    (3, DATE_SUB(CURRENT_DATE, INTERVAL 89 DAY), 'completed'),
    (4, DATE_SUB(CURRENT_DATE, INTERVAL 100 DAY), 'completed'),
    (5, DATE_SUB(CURRENT_DATE, INTERVAL 25 DAY), 'completed'),
    (5, DATE_SUB(CURRENT_DATE, INTERVAL 55 DAY), 'completed');

-- Insert sample data for order_items
INSERT INTO order_items (order_id, product_id, quantity, unit_price) VALUES
    (1, 1, 1, 999.99),  -- Alice's first order
    (1, 2, 1, 699.99),
    (2, 3, 2, 449.99),  -- Alice's second order
    (3, 4, 1, 1299.99), -- Alice's third order
    (4, 1, 1, 999.99),  -- Bob's first order
    (5, 2, 1, 699.99),  -- Bob's cancelled order
    (6, 1, 1, 999.99),  -- Carol's first order
    (6, 4, 1, 1299.99),
    (7, 2, 2, 699.99),  -- Carol's second order
    (8, 3, 1, 449.99),  -- Carol's third order
    (9, 5, 3, 299.99),  -- Carol's fourth order
    (10, 1, 1, 999.99), -- David's order
    (11, 2, 1, 699.99), -- Eva's first order
    (12, 3, 2, 449.99); -- Eva's second order