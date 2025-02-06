# MySQL Practice Exercises

## Exercise 1: Basic Data Retrieval
You have a table called `employees` with the following columns: `id`, `first_name`, `last_name`, `department`, and `salary`. 

The company wants to:
1. List all employees in the "Marketing" department
2. Show only their full names (combining first and last name)
3. Sort the results alphabetically by last name

Write a query that accomplishes these requirements.

## Exercise 2: Sales Analysis
You have two tables:
- `products` (columns: product_id, name, price)
- `sales` (columns: sale_id, product_id, quantity, sale_date)

The management needs a report that shows:
1. The total revenue (price * quantity) for each product
2. Only include products with total revenue greater than $1000
3. Sort the results by revenue in descending order
4. Show the product name and total revenue

Write a query to generate this report.

## Exercise 3: Customer Engagement Analysis
You have three interconnected tables:
- `customers` (columns: customer_id, name, join_date)
- `orders` (columns: order_id, customer_id, order_date, status)
- `order_items` (columns: order_id, product_id, quantity, unit_price)

The marketing team wants to identify their "Premium Customers" based on the following criteria:
1. Customers who have placed at least 3 orders
2. Have spent more than $500 in total
3. Have at least one order in the last 90 days
4. Never had an order with 'cancelled' status

Create a query that:
- Lists these premium customers
- Shows their total spending
- Shows their total number of orders
- Shows the date of their most recent order
- Sort them by total spending in descending order

Write a query to identify these premium customers and provide the requested information.

## How to submit:
1. Create a new file with all the commands you used to solve the exercises.
2. take a picture of each table and save it in your folder.