-- create database filters
create database filters;

-- use database filters
use filters;

-- Create the products table
CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    category VARCHAR(50),
    price DECIMAL(10,2),
    stock INT,
    supplier VARCHAR(100),
    rating DECIMAL(3,1),
    last_restock_date DATE
);

-- Insert sample data
INSERT INTO products VALUES
(1, 'College Notebook', 'Stationery', 4.99, 150, 'PaperCo', 4.5, '2024-01-15'),
(2, 'Scientific Calculator', 'Electronics', 29.99, 75, 'CalcTech', 4.8, '2024-01-10'),
(3, 'USB Flash Drive 32GB', 'Electronics', 15.99, 100, 'DataStore', 4.2, '2024-01-20'),
(4, 'Highlighter Set', 'Stationery', 6.99, 200, 'PaperCo', 4.0, '2024-01-05'),
(5, 'College Hoodie', 'Clothing', 39.99, 50, 'CampusWear', 4.7, '2024-01-12'),
(6, 'Water Bottle', 'Accessories', 12.99, 120, 'EcoGoods', 4.3, '2024-01-18'),
(7, 'Wireless Mouse', 'Electronics', 24.99, 80, 'TechPro', 4.6, '2024-01-22'),
(8, 'Study Lamp', 'Electronics', 19.99, 60, 'LightCo', 4.4, '2024-01-08'),
(9, 'Backpack', 'Accessories', 49.99, 40, 'BagMaster', 4.9, '2024-01-25'),
(10, 'Coffee Mug', 'Accessories', 9.99, 150, 'CupWorld', 4.1, '2024-01-14'),
(11, 'Pencil Set', 'Stationery', 3.99, 300, 'PaperCo', 4.0, '2024-01-17'),
(12, 'Laptop Sleeve', 'Electronics', 22.99, 70, 'TechPro', 4.5, '2024-01-19'),
(13, 'College T-Shirt', 'Clothing', 19.99, 100, 'CampusWear', 4.3, '2024-01-21'),
(14, 'Index Cards', 'Stationery', 2.99, 250, 'PaperCo', 3.9, '2024-01-16'),
(15, 'Power Bank', 'Electronics', 34.99, 60, 'TechPro', 4.7, '2024-01-23'),
(16, 'Desk Organizer', 'Accessories', 16.99, 90, 'OfficePro', 4.2, '2024-01-11'),
(17, 'College Sweatpants', 'Clothing', 29.99, 45, 'CampusWear', 4.6, '2024-01-24'),
(18, 'Sticky Notes', 'Stationery', 3.49, 400, 'PaperCo', 4.0, '2024-01-13'),
(19, 'Bluetooth Speaker', 'Electronics', 39.99, 30, 'SoundTech', 4.8, '2024-01-26'),
(20, 'Ruler Set', 'Stationery', 4.99, 180, 'PaperCo', 3.8, '2024-01-15'),
(21, 'College Cap', 'Clothing', 17.99, 75, 'CampusWear', 4.1, '2024-01-27'),
(22, 'Hand Sanitizer', 'Health', 3.99, 200, 'HealthCare', 4.3, '2024-01-28'),
(23, 'Wireless Keyboard', 'Electronics', 44.99, 40, 'TechPro', 4.7, '2024-01-29'),
(24, 'File Folders', 'Stationery', 5.99, 150, 'OfficePro', 3.9, '2024-01-30'),
(25, 'Sports Bottle', 'Accessories', 14.99, 100, 'SportGear', 4.4, '2024-01-31'),
(26, 'College Shorts', 'Clothing', 24.99, 60, 'CampusWear', 4.2, '2024-02-01'),
(27, 'Desk Calendar', 'Stationery', 8.99, 120, 'OfficePro', 4.0, '2024-02-02'),
(28, 'Webcam', 'Electronics', 49.99, 25, 'TechPro', 4.6, '2024-02-03'),
(29, 'Lunch Box', 'Accessories', 13.99, 80, 'EcoGoods', 4.3, '2024-02-04'),
(30, 'College Socks', 'Clothing', 9.99, 150, 'CampusWear', 4.1, '2024-02-05'),
(31, 'Face Masks', 'Health', 7.99, 300, 'HealthCare', 4.5, '2024-02-06'),
(32, 'USB Hub', 'Electronics', 29.99, 45, 'TechPro', 4.4, '2024-02-07'),
(33, 'Notebook Set', 'Stationery', 12.99, 100, 'PaperCo', 4.2, '2024-02-08'),
(34, 'College Lanyard', 'Accessories', 4.99, 200, 'CampusWear', 3.9, '2024-02-09'),
(35, 'Desk Fan', 'Electronics', 19.99, 50, 'TechPro', 4.3, '2024-02-10'),
(36, 'Hand Lotion', 'Health', 5.99, 120, 'HealthCare', 4.1, '2024-02-11'),
(37, 'College Scarf', 'Clothing', 15.99, 70, 'CampusWear', 4.2, '2024-02-12'),
(38, 'Pencil Sharpener', 'Stationery', 2.99, 250, 'PaperCo', 3.8, '2024-02-13'),
(39, 'Phone Stand', 'Electronics', 9.99, 150, 'TechPro', 4.0, '2024-02-14'),
(40, 'College Badge', 'Accessories', 3.99, 300, 'CampusWear', 3.9, '2024-02-15'),
(41, 'First Aid Kit', 'Health', 16.99, 80, 'HealthCare', 4.6, '2024-02-16'),
(42, 'College Beanie', 'Clothing', 14.99, 90, 'CampusWear', 4.3, '2024-02-17'),
(43, 'Whiteboard Markers', 'Stationery', 8.99, 180, 'OfficePro', 4.1, '2024-02-18'),
(44, 'Laptop Stand', 'Electronics', 32.99, 40, 'TechPro', 4.7, '2024-02-19'),
(45, 'College Wristband', 'Accessories', 2.99, 400, 'CampusWear', 3.8, '2024-02-20'),
(46, 'Vitamins', 'Health', 19.99, 100, 'HealthCare', 4.4, '2024-02-21'),
(47, 'College Tie', 'Clothing', 21.99, 50, 'CampusWear', 4.2, '2024-02-22'),
(48, 'Desk Mat', 'Accessories', 17.99, 70, 'OfficePro', 4.3, '2024-02-23'),
(49, 'Wireless Charger', 'Electronics', 27.99, 60, 'TechPro', 4.5, '2024-02-24'),
(50, 'College Pin Set', 'Accessories', 6.99, 200, 'CampusWear', 4.0, '2024-02-25');