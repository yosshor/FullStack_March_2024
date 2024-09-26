# TypeScript Node.js Server-Client Exercise

## Objective
Create a simple server and client application using TypeScript and Node.js, implementing basic GET and POST requests.



## Exercise Description

### Part 1: Server
1. Set up a new Node.js project with TypeScript.
2. Create a simple Express server that listens on port 3000.
3. Implement the following endpoints:
   - GET `/api/get-todos`: Returns a list of todos
   - POST `/api/add-todo`: Adds a new todo to the list
4. Use an a server in-memory array to store the todos.

### Part 2: Client
1. Create a separate TypeScript file for the client.
2. Implement functions to interact with the server:
   - `getTodos()`: Sends a GET request to fetch all todos
   - `addTodo(title: string)`: Sends a POST request to add a new todo

### Part 3: Testing
1. Use the client functions to:
   - Fetch and display all todos
   - Add a new todo
   - Fetch and display the updated list of todos

## Bonus Challenges
1. Add error handling to both server and client (so the client can understand the error in the server).
2. Implement input validation for the POST request (Make sure the data the client sent is in the right format (challenge: use Zod or Joy)).
3. Add a DELETE endpoint to remove a todo by its ID (not learned in class. This is a challenge).

## Tips
- Use the `fetch` API or a library like `axios` for making HTTP requests in the client.
- Consider using interfaces to define the structure of a todo item.
- Use async/await for handling asynchronous operations.

Remember to focus on TypeScript features like type annotations, interfaces, and modules to make your code more robust and maintainable.