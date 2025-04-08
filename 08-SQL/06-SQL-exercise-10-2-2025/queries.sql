-- Queries

-- Find all flights departing tomorrow
select * 
from flight
where departure_date = "2025-02-11";

-- List all direct flights between two cities
select *
from flight
where (origin = "LAX" and destination = "JFK") or (origin = "JFK" and destination = "LAX");

-- Show available seats on specific flight
select f.flight_id, f.destination, f.origin, fs.seat_row, fs.seat, f.departure_date 
from flight f
join flight_seats fs
where fs.passenger_id is null;
