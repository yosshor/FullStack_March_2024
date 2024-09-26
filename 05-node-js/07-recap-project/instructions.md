# Pet Store CRUD Exercise with Node.js

## Objective
Create a RESTful API for a pet store that allows users to perform CRUD (Create, Read, Update, Delete) operations on pets.

## Requirements

1. Use Node.js and Express.js to create the server and API endpoints.
2. Implement the following CRUD operations:
   - Create: Add a new pet to the store
   - Read: Retrieve information about pets (individual and all pets)
   - Update: Modify information about an existing pet
   - Delete: Remove a pet from the store
3. Use a simple in-memory data structure (e.g., an array) to store pet information.
4. Each pet should have the following properties:
   - id (unique identifier)
   - name
   - species
   - age
   - price

## API Endpoints

Implement the following API endpoints:

- `POST /pets` - Create a new pet
- `GET /pets` - Retrieve all pets
- `GET /pets/:id` - Retrieve a specific pet by ID
- `PUT /pets/:id` - Update a specific pet by ID
- `DELETE /pets/:id` - Delete a specific pet by ID

## Additional Requirements

1. Use appropriate HTTP status codes for responses.
2. Implement basic error handling for invalid requests or non-existent pets.
3. Use a tool like Postman or cURL to test your API endpoints.

## Bonus Challenges

1. Implement data validation to ensure all required fields are provided and have the correct data types.
2. Add query parameters to the `GET /pets` endpoint to allow filtering by species or sorting by price.
3. Implement pagination for the `GET /pets` endpoint to return a limited number of results per page.

## Steps to Complete the Exercise

1. Set up a new Node.js project and install necessary dependencies (Express.js).
2. Create a server file (e.g., `app.js` or `server.js`) to set up the Express application.
3. Define the data structure to store pet information.
4. Implement each CRUD operation as a separate route handler.
5. Test each endpoint using a tool like Postman or cURL.
6. Refine your implementation and add error handling.
7. (Optional) Implement the bonus challenges.

## Expected Outcome

By completing this exercise, you will have created a basic CRUD API using Node.js and Express.js. This project will cover essential concepts such as:

- Setting up a Node.js project
- Creating a server with Express.js
- Implementing RESTful API endpoints
- Handling different HTTP methods (GET, POST, PUT, DELETE)
- Working with route parameters
- Basic error handling in an API context

This exercise provides a solid foundation for building more complex APIs and can be extended by connecting to a database for persistent storage in future projects.
