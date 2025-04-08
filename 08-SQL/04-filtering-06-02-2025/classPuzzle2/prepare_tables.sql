-- Create Database
CREATE DATABASE IF NOT EXISTS recipe_management;
USE recipe_management;

-- Create Users Table
CREATE TABLE users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Recipes Table
CREATE TABLE recipes (
    recipe_id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    prep_time INT NOT NULL COMMENT 'In minutes',
    cook_time INT NOT NULL COMMENT 'In minutes',
    difficulty ENUM('easy', 'medium', 'hard') NOT NULL,
    servings INT NOT NULL,
    author_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (author_id) REFERENCES users(user_id),
    CHECK (prep_time > 0),
    CHECK (cook_time > 0),
    CHECK (servings > 0)
);



-- Create Ingredients Table
CREATE TABLE ingredients (
    ingredient_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) UNIQUE NOT NULL,
    unit_of_measurement VARCHAR(20) NOT NULL,
    calories_per_unit DECIMAL(10,2) COMMENT 'Calories per unit of measurement'
);

-- Create Recipe-Ingredient Relationship Table
CREATE TABLE recipe_ingredients (
    recipe_id INT,
    ingredient_id INT,
    quantity DECIMAL(10,2) NOT NULL,
    PRIMARY KEY (recipe_id, ingredient_id),
    FOREIGN KEY (recipe_id) REFERENCES recipes(recipe_id),
    FOREIGN KEY (ingredient_id) REFERENCES ingredients(ingredient_id),
    CHECK (quantity > 0)
);

-- Create Recipe Ratings Table
CREATE TABLE recipe_ratings (
    rating_id INT PRIMARY KEY AUTO_INCREMENT,
    recipe_id INT,
    user_id INT,
    rating INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (recipe_id) REFERENCES recipes(recipe_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    UNIQUE KEY unique_rating (recipe_id, user_id),
    CHECK (rating BETWEEN 1 AND 5)
);

-- Bonus: Create Tags Table
CREATE TABLE tags (
    tag_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) UNIQUE NOT NULL
);

-- Bonus: Create Recipe-Tags Relationship Table
CREATE TABLE recipe_tags (
    recipe_id INT,
    tag_id INT,
    PRIMARY KEY (recipe_id, tag_id),
    FOREIGN KEY (recipe_id) REFERENCES recipes(recipe_id),
    FOREIGN KEY (tag_id) REFERENCES tags(tag_id)
);

-- Sample Data Insertion

-- Insert Users
INSERT INTO users (username, email, password_hash) VALUES
('john_doe', 'john@example.com', 'hashed_password_1'),
('jane_smith', 'jane@example.com', 'hashed_password_2'),
('chef_mike', 'mike@example.com', 'hashed_password_3'),
('vegan_lisa', 'lisa@example.com', 'hashed_pwd_6'),
('bbq_master', 'bbq@example.com', 'hashed_pwd_7'),
('dessert_pro', 'dessert@example.com', 'hashed_pwd_8'),
('keto_cook', 'keto@example.com', 'hashed_pwd_9'),
('pasta_lover', 'pasta@example.com', 'hashed_pwd_10');

-- Insert Ingredients
INSERT INTO ingredients (name, unit_of_measurement, calories_per_unit) VALUES
('Flour', 'cup', 455),
('Sugar', 'cup', 773),
('Eggs', 'piece', 72),
('Milk', 'cup', 103),
('Butter', 'tablespoon', 102),
('Vanilla Extract', 'teaspoon', 12);

-- Insert Recipes
INSERT INTO recipes (title, description, prep_time, cook_time, difficulty, servings, author_id) VALUES
('Classic Chocolate Cake', 'Rich and moist chocolate cake perfect for any occasion', 30, 45, 'medium', 8, 1),
('Vanilla Cupcakes', 'Light and fluffy vanilla cupcakes', 20, 25, 'easy', 12, 2),
('French Toast', 'Delicious breakfast treat', 15, 20, 'easy', 4, 3)
('Tiramisu Cake', 'Coffee-flavored Italian dessert cake', 40, 60, 'hard', 12, 3),
('Fettuccine Alfredo', 'Creamy pasta with parmesan sauce', 15, 20, 'medium', 4, 5),
('BBQ Ribs', 'Tender smoked ribs with dry rub', 40, 360, 'hard', 6, 2),
('Keto Pizza', 'Low-carb pizza with cauliflower crust', 30, 25, 'medium', 4, 4),
('Vegan Chocolate Cake', 'Dairy-free chocolate cake', 25, 35, 'medium', 12, 1),
('Cannoli', 'Italian pastry with sweet filling', 60, 30, 'hard', 24, 3),
('Carbonara', 'Classic Roman pasta dish', 20, 15, 'medium', 4, 5),
('BBQ Chicken Wings', 'Smoky grilled wings with sauce', 15, 45, 'easy', 6, 2),
('Keto Burger', 'Bunless burger with special sauce', 15, 15, 'easy', 4, 4),
('Vegan Lasagna', 'Plant-based lasagna with cashew cheese', 45, 60, 'hard', 8, 1),
('Cheesecake', 'New York style cheesecake', 30, 70, 'hard', 12, 3),
('Pesto Pasta', 'Homemade basil pesto with pasta', 20, 15, 'easy', 4, 5),
('BBQ Brisket', 'Texas-style smoked brisket', 60, 720, 'hard', 12, 2),
('Keto Cheesecake', 'Sugar-free low-carb cheesecake', 30, 60, 'medium', 12, 4),
('Vegan Sushi Rolls', 'Plant-based sushi with vegetables', 45, 30, 'hard', 4, 1),
('Gelato', 'Italian-style ice cream', 40, 30, 'hard', 8, 3),
('Cacio e Pepe', 'Traditional Roman cheese and pepper pasta', 10, 15, 'medium', 2, 5);

-- Insert Recipe Ingredients
INSERT INTO recipe_ingredients (recipe_id, ingredient_id, quantity) VALUES
(1, 1, 2.5),  -- 2.5 cups flour for chocolate cake
(1, 2, 2),    -- 2 cups sugar for chocolate cake
(1, 3, 3),    -- 3 eggs for chocolate cake
(2, 1, 1.5),  -- 1.5 cups flour for cupcakes
(2, 2, 1),    -- 1 cup sugar for cupcakes
(2, 6, 2);    -- 2 tsp vanilla for cupcakes

-- Insert Tags
INSERT INTO tags (name) VALUES
('dessert'),
('vegetarian'),
('breakfast'),
('quick meals');

-- Insert Recipe Tags
INSERT INTO recipe_tags (recipe_id, tag_id) VALUES
(1, 1), -- Chocolate Cake - dessert
(2, 1), -- Cupcakes - dessert
(3, 3), -- French Toast - breakfast
(3, 4); -- French Toast - quick meals

-- Insert Ratings
INSERT INTO recipe_ratings (recipe_id, user_id, rating) VALUES
(1, 2, 5),  -- Jane rates John's cake
(1, 3, 4),  -- Mike rates John's cake
(2, 1, 5),  -- John rates Jane's cupcakes
(3, 2, 4);  -- Jane rates Mike's french toast

-- Required Queries

-- Add a new recipe with ingredients
DELIMITER //
CREATE PROCEDURE add_recipe(
    IN p_title VARCHAR(100),
    IN p_description TEXT,
    IN p_prep_time INT,
    IN p_cook_time INT,
    IN p_difficulty ENUM('easy', 'medium', 'hard'),
    IN p_servings INT,
    IN p_author_id INT
)
BEGIN
    INSERT INTO recipes (title, description, prep_time, cook_time, difficulty, servings, author_id)
    VALUES (p_title, p_description, p_prep_time, p_cook_time, p_difficulty, p_servings, p_author_id);
    SELECT LAST_INSERT_ID() AS recipe_id;
END //
DELIMITER ;

-- Add a new user
DELIMITER //
CREATE PROCEDURE add_user(
    IN p_username VARCHAR(50),
    IN p_email VARCHAR(100),
    IN p_password_hash VARCHAR(255)
)
BEGIN
    INSERT INTO users (username, email, password_hash)
    VALUES (p_username, p_email, p_password_hash);
    SELECT LAST_INSERT_ID() AS user_id;
END //
DELIMITER ;

-- Rate a recipe
DELIMITER //
CREATE PROCEDURE rate_recipe(
    IN p_recipe_id INT,
    IN p_user_id INT,
    IN p_rating INT
)
BEGIN
    INSERT INTO recipe_ratings (recipe_id, user_id, rating)
    VALUES (p_recipe_id, p_user_id, p_rating)
    ON DUPLICATE KEY UPDATE rating = p_rating;
END //
DELIMITER ;

-- Useful Queries

-- Get recipe with average rating
CREATE VIEW recipe_details AS
SELECT 
    r.recipe_id,
    r.title,
    r.description,
    r.difficulty,
    u.username as author,
    AVG(rt.rating) as avg_rating,
    COUNT(DISTINCT rt.rating_id) as rating_count
FROM recipes r
JOIN users u ON r.author_id = u.user_id
LEFT JOIN recipe_ratings rt ON r.recipe_id = rt.recipe_id
GROUP BY r.recipe_id;

-- Get recipe ingredients with quantities
CREATE VIEW recipe_ingredients_view AS
SELECT 
    r.recipe_id,
    r.title,
    i.name as ingredient,
    ri.quantity,
    i.unit_of_measurement
FROM recipes r
JOIN recipe_ingredients ri ON r.recipe_id = ri.recipe_id
JOIN ingredients i ON ri.ingredient_id = i.ingredient_id;