-- Flight Companies


INSERT INTO flight_company VALUES
(1, 'Delta Airlines', 'DL'),
(2, 'United Airlines', 'UA'),
(3, 'American Airlines', 'AA');

-- Airplanes


INSERT INTO airplane VALUES
(1, 'Boeing 737-800', 180, 1),
(2, 'Airbus A320', 150, 2),
(3, 'Boeing 787-9', 290, 3);

-- Seats


-- Generate seats (20 per airplane)
INSERT INTO seat VALUES
(1, 1, '1A'), (2, 1, '1B'), (3, 1, '1C'), (4, 1, '1D'), (5, 1, '1E'), (6, 1, '1F'),
(7, 1, '2A'), (8, 1, '2B'), (9, 1, '2C'), (10, 1, '2D'), (11, 1, '2E'), (12, 1, '2F'),
(13, 1, '3A'), (14, 1, '3B'), (15, 1, '3C'), (16, 1, '3D'), (17, 1, '3E'), (18, 1, '3F'),
(19, 1, '4A'), (20, 1, '4B'),
(21, 2, '1A'), (22, 2, '1B'), (23, 2, '1C'), (24, 2, '1D'), (25, 2, '1E'), (26, 2, '1F'),
(27, 2, '2A'), (28, 2, '2B'), (29, 2, '2C'), (30, 2, '2D'), (31, 2, '2E'), (32, 2, '2F'),
(33, 2, '3A'), (34, 2, '3B'), (35, 2, '3C'), (36, 2, '3D'), (37, 2, '3E'), (38, 2, '3F'),
(39, 2, '4A'), (40, 2, '4B'),
(41, 3, '1A'), (42, 3, '1B'), (43, 3, '1C'), (44, 3, '1D'), (45, 3, '1E'), (46, 3, '1F'),
(47, 3, '2A'), (48, 3, '2B'), (49, 3, '2C'), (50, 3, '2D'), (51, 3, '2E'), (52, 3, '2F'),
(53, 3, '3A'), (54, 3, '3B'), (55, 3, '3C'), (56, 3, '3D'), (57, 3, '3E'), (58, 3, '3F'),
(59, 3, '4A'), (60, 3, '4B');

-- Flights


INSERT INTO flight VALUES
(1, 1, '2024-02-10', '08:00', '10:30', 299.99, 'LAX', 'SFO'),
(2, 2, '2024-02-10', '09:00', '11:30', 349.99, 'JFK', 'MIA'),
(3, 3, '2024-02-10', '10:00', '12:30', 399.99, 'ORD', 'DFW'),
(4, 1, '2024-02-10', '11:00', '13:30', 449.99, 'SEA', 'LAX'),
(5, 2, '2024-02-10', '12:00', '14:30', 499.99, 'BOS', 'ORD'),
(6, 3, '2024-02-10', '13:00', '15:30', 549.99, 'DFW', 'PHX'),
(7, 1, '2024-02-10', '14:00', '16:30', 599.99, 'SFO', 'SEA'),
(8, 2, '2024-02-10', '15:00', '17:30', 649.99, 'MIA', 'JFK'),
(9, 3, '2024-02-10', '16:00', '18:30', 699.99, 'PHX', 'LAX'),
(10, 1, '2024-02-10', '17:00', '19:30', 749.99, 'ORD', 'BOS');

-- Passengers


-- Generate 200 passengers (20 per flight)
INSERT INTO passenger 
SELECT 
    id,
    CONCAT('Passenger ', id),
    CONCAT('P', LPAD(id, 7, '0'))
FROM (SELECT 1 as id UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5 UNION
      SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9 UNION SELECT 10) ones,
     (SELECT 1 as id UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5 UNION
      SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9 UNION SELECT 10) tens,
     (SELECT 1 as id UNION SELECT 2) hundreds;

-- Flight Seats


-- Assign passengers to seats (20 per flight)
INSERT INTO flight_seats 
SELECT 
    f.flight_num,
    s.seat_id,
    p.passenger_id,
    FLOOR((p.passenger_id - 1) % 20 / 6) + 1 as seat_row,
    CHAR(65 + ((p.passenger_id - 1) % 20 % 6)) as seat_char
FROM 
    (SELECT 1 as flight_num UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5
     UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9 UNION SELECT 10) f
CROSS JOIN
    (SELECT passenger_id FROM passenger WHERE passenger_id <= 200) p
JOIN 
    seat s ON s.seat_id = ((f.flight_num - 1) * 20 + (p.passenger_id - 1) % 20 + 1)
WHERE 
    p.passenger_id > (f.flight_num - 1) * 20 
    AND p.passenger_id <= f.flight_num * 20;