# SQL Exercise: Recipe Management System

Your task is to design and implement a database schema for a recipe management application. The system should allow users to create, share, and manage recipes with their ingredients.

## Requirements

1. Users should be able to:
   - Register with email, username, and password
   - Create and share recipes
   - Rate other users' recipes

2. Each recipe should have:
   - A title and description
   - Preparation time and cooking time
   - Difficulty level (e.g., easy, medium, hard)
   - Number of servings 
   - Creation date
   - Author (user who created it)

3. Ingredients should:
   - Have a name, unit of measurement
   - Be associated with recipes with specific quantities
   - Be reusable across different recipes

## Tasks

1. Create tables for:
   - Users
   - Recipes
   - Ingredients
   - Recipe-Ingredient relationships
   - Recipe ratings

2. Implement the following constraints:
   - Users must have unique emails and usernames
   - Recipe titles must not be empty
   - Ingredient quantities must be positive numbers
   - Rating values should be between 1 and 5

3. Write SQL queries to:
   - Add a new recipe with its ingredients
   - Add a new user
   - Rate a recipe to a user
   
4. Fill the tables with some data (You can use AI for that).

## Bonus Challenge
- Implement a tagging system for recipes (e.g., "vegetarian", "dessert", "quick meals")
- Add nutritional information for ingredients

Submit your solution as SQL files containing:
1. Table creation statements (DDL)
2. Sample data insertion statements (DML)
3. Required query implementations