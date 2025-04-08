use flights;
-- Insert Flight Companies
INSERT INTO Flight_Company (name, iata_code) VALUES
('American Airlines', 'AA'),
('Delta Air Lines', 'DL'),
('United Airlines', 'UA');

-- Insert Airplanes
INSERT INTO Airplane (model, capacity, company_id) VALUES
('Boeing 737', 180, 1),
('Airbus A320', 150, 2),
('Boeing 787', 330, 3);

-- Insert Flights (including tomorrow's flights)
INSERT INTO Flight (airplane_id, departure_date, departure_time, arrival_time, price, origin, destination) VALUES
(1, CURDATE() + INTERVAL 1 DAY, '08:00:00', '11:00:00', 299.99, 'LAX', 'JFK'),
(2, CURDATE() + INTERVAL 1 DAY, '10:30:00', '13:30:00', 199.99, 'SFO', 'ORD'),
(3, CURDATE() + INTERVAL 2 DAY, '14:00:00', '17:00:00', 399.99, 'JFK', 'LAX');

-- Insert Sample Passengers
INSERT INTO Passenger (passenger_id, name, passport_number) VALUES
(1001, 'John Smith', 'US123456'),
(1002, 'Maria Garcia', 'US789012'),
(1003, 'David Lee', 'US345678');

-- Insert Seats for first airplane (partial sample)
INSERT INTO Seat (airplane_id, seat_number) VALUES
(1, '1A'),
(1, '1B'),
(1, '1C'),
(1, '2A'),
(1, '2B'),
(1, '2C');

-- Insert Flight_Seats (partial sample)
INSERT INTO Flight_Seats (flight_id, seat_id, passenger_id, seat_row, seat) VALUES
(1, 1, 1001, 1, 'A'),
(1, 2, NULL, 1, 'B'),
(1, 3, 1002, 1, 'C'),
(1, 4, NULL, 2, 'A'),
(1, 5, 1003, 2, 'B'),
(1, 6, NULL, 2, 'C');