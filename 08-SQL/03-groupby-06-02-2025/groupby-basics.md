# GROUP BY Basics for Beginners

## What is GROUP BY?
GROUP BY combines rows with the same values into summary rows. Think of it as organizing data into buckets.

## Basic Syntax
```sql
SELECT column_to_group, COUNT(*)
FROM table_name
GROUP BY column_to_group;
```

## Simple Examples Using Store Data

### 1. Count Products by Category
```sql
SELECT category, COUNT(*) as total_items
FROM products
GROUP BY category;

/* Result:
category     total_items
Electronics  12
Clothing     8
Stationery   10
*/
```

### 2. Average Price by Category
```sql
SELECT category, AVG(price) as avg_price
FROM products
GROUP BY category;

/* Result:
category     avg_price
Electronics  35.99
Clothing     24.50
Stationery   8.99
*/
```

### 3. Total Stock by Supplier
```sql
SELECT supplier, SUM(stock) as total_stock
FROM products
GROUP BY supplier;

/* Result:
supplier   total_stock
PaperCo   1200
TechPro    800
*/
```

## Steps to Use GROUP BY
1. Choose what to group (category, supplier, etc.)
2. Select that column + what to calculate (COUNT, AVG, SUM)
3. Add GROUP BY with the chosen column

## Common GROUP BY Functions
- COUNT(*): How many items?
- AVG(price): Average price?
- SUM(stock): Total stock?
- MAX(price): Highest price?
- MIN(price): Lowest price?

## Simple Rules
1. Any column in SELECT (except aggregates) must be in GROUP BY
2. GROUP BY comes after WHERE but before ORDER BY
3. Use HAVING to filter grouped results