-- Yossi SHor
-- Exercise 1:
-- Get the all employees from marketing department
select CONCAT(first_name, ' ', last_name) AS full_name 
from employees 
where department = 'Marketing'
order by last_name asc;


-- Exercise 2: Sales Analysis
-- show all the products with their total revenue
with sum_table as (
	select p.price,
		p.name, 
		s.sale_id,
		s.product_id, 
		s.quantity,
		s.sale_date, 
		 p.price * s.quantity as total_revenue
		from products as p
	left join sales as s 
		on p.product_id = s.product_id)
select name as product_name, total_revenue from sum_table
where total_revenue > 1000
order by total_revenue desc;




-- Exercise 3: Customer Engagement Analysis
-- Show the  premium customers
WITH sum_table AS (
    SELECT 
        c.join_date,
        c.name, 
        o.order_id,
        i.product_id,
        o.order_date,
        o.status,
        i.quantity,
        i.unit_price,
        p.name AS product_name,
        
        -- Count total number of orders per customer
        COUNT(o.order_id) OVER(PARTITION BY c.customer_id) AS num_of_orders,

        -- Total amount spent per customer
        SUM(i.quantity * i.unit_price) OVER(PARTITION BY c.customer_id) AS total,

        -- Most recent order date per customer
        MAX(o.order_date) OVER(PARTITION BY c.customer_id) AS max_date,

        -- Count of cancelled orders per customer
        SUM(CASE WHEN o.status = 'cancelled' THEN 1 ELSE 0 END) 
        OVER(PARTITION BY c.customer_id) AS has_cancelled

    FROM customers AS c
    LEFT JOIN orders AS o ON o.customer_id = c.customer_id
    LEFT JOIN order_items AS i ON i.order_id = o.order_id
    LEFT JOIN products AS p ON p.product_id = i.product_id
)

-- Select the right fields of premium customers
SELECT DISTINCT NAME, num_of_orders, total, max_date FROM sum_table
WHERE has_cancelled != 1 
	AND max_date >= DATE_SUB(NOW(), INTERVAL 90 DAY)
	AND total > 500
ORDER BY total DESC
    

       
        



