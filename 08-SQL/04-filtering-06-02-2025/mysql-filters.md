# MySQL Filtering Commands Reference

## WHERE
The fundamental filtering command in MySQL. Used to specify conditions that rows must meet to be included in the result.

```sql
SELECT * FROM products WHERE price > 100;
```

### Common WHERE Operators
- `=` Equal to
- `>` Greater than
- `<` Less than
- `>=` Greater than or equal to
- `<=` Less than or equal to
- `!=` or `<>` Not equal to
- `IS NULL` Check for null values
- `IS NOT NULL` Check for non-null values

## BETWEEN
Filters values within a specified range (inclusive).

```sql
SELECT * FROM products 
WHERE price BETWEEN 10 AND 50;
```

## IN
Matches any value in a specified list of values.

```sql
SELECT * FROM orders 
WHERE status IN ('pending', 'processing', 'shipped');
```

## LIKE
Pattern matching using wildcards:
- `%` Matches any sequence of characters
- `_` Matches any single character

```sql
SELECT * FROM customers 
WHERE email LIKE '%@gmail.com';
```

## NOT
Negates a condition. Can be used with other filtering commands.

```sql
SELECT * FROM products 
WHERE category NOT IN ('Food', 'Drinks');
```

## AND/OR
Combines multiple filtering conditions:
- `AND`: All conditions must be true
- `OR`: At least one condition must be true

```sql
SELECT * FROM products 
WHERE price > 100 
AND category = 'Electronics' 
OR brand = 'Apple';
```

## HAVING
Filters grouped results. Must be used after GROUP BY.

```sql
SELECT category, COUNT(*) as count 
FROM products 
GROUP BY category 
HAVING count > 5;
```

## REGEXP/RLIKE
Advanced pattern matching using regular expressions.

```sql
SELECT * FROM customers 
WHERE name REGEXP '^[A-D]';  -- Names starting with A through D
```

### Common REGEXP Patterns
- `^` Start of string
- `$` End of string
- `[abc]` Any character listed
- `[a-z]` Any character in range
- `*` Zero or more occurrences
- `+` One or more occurrences

## Best Practices
1. Use appropriate indexes for filtered columns
2. Start with most restrictive conditions first
3. Avoid using wildcards at the start of LIKE patterns
4. Use parameter binding to prevent SQL injection
5. Test complex filters with EXPLAIN to optimize performance