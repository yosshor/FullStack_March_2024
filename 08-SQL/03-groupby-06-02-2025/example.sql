select * from products;

select supplier, count(*) as number_of_products
from products
group by supplier;

select supplier, avg(price) as avg_price
from products
group by supplier;

-- get sum of all stocks per category
SELECT category, SUM(stock) AS total_stock
FROM products
GROUP BY category;

-- get max price per supplier
select supplier, min(price) as max_price
from products
group by supplier
ORDER BY min(price);