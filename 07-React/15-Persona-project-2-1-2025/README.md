# StarShip Game Project

This project is a React-based game application that includes a Phaser game and a game-over modal. The application is designed to provide an engaging user experience with a simple and intuitive interface.

## Features

- **Starship Integration**: The application integrates a Phaser game component.
- **Game Over Modal**: Displays a modal with options to play again or navigate to the home page when the game is over.
- **Error Handling**: Displays error messages if any issues occur during the game.
- **User Authentication**: Users must log in or register to access the game. JWT (JSON Web Tokens) is used for session management, and passwords are securely hashed using bcrypt.
- **Score and Lives**: Tracks the player's score and lives during the game.
- **Save Results**: Saves the player's score and displays the last score of the user.
- **SweetAlert Integration**: SweetAlert is used to show elegant alerts and messages during the application lifecycle.
- **MongoDB Integration**: MongoDB is used to store user data, including login credentials and scores.
- **Interactive Gameplay**: If the fire from the starship overlaps with the meteors, a sound effect is played, and the meteor disappears, adding an interactive and dynamic experience to the gameplay.

## Technologies Used

- React
- Phaser
- TypeScript
- SweetAlert
- JWT for authentication
- bcrypt for secure password storage
- MongoDB for storing user data and scores

## File Structure

- `src/`
  - `components/`
    - `StarshipGame.tsx`: The Phaser game component.
    - `Modal.tsx`: The modal component displayed when the game is over.
  - `controllers/auth/`
    - `Login.ts`: Manages authentication logic for login with token validation.
    - `Register.ts`: Manages authentication logic for register with token validation.
  - `pages/`
    - `Login.tsx`: Handles user login functionality.
    - `Register.tsx`: Handles user registration functionality.
    - `Home.tsx`: Home page. If the user is not logged in, they are redirected to the Login page.
    - `Game.tsx`: The main game component that handles the game logic and UI.
  - `router.tsx`: Defines the routes for the application, including login, register, home, and game pages.

## Getting Started

1. **Clone the repository**:

   ```sh
   git clone https://github.com/your-repo/persona-project.git
   cd persona-project
   ```

2. **Install dependencies**:

   ```sh
   npm install
   ```

3. **Run the application**:

   ```sh
   npm start
   ```

4. **Open the application**:
   Open your browser and navigate to `http://localhost:3000`.

## Usage

- **Authentication**: Users must log in or register to access the game. If a user tries to access the game without authentication, they will see a SweetAlert prompt asking them to log in or register.
- **Playing the Game**: Start the game by navigating to the game page. Play the game until it is over.
- **Game Over**: When the game is over, a modal will appear with options to play again or go to the home page.
- **Score Management**: After the game, the user's score is saved and displayed on their profile or home page.

## Components

### `Game.tsx`

The main game component that includes the following features:

- Checks if the user is authenticated before allowing access to the game.
- Displays the Phaser game.
- Shows a modal with a "Game Over" message and options to play again or navigate to the home page.

### `StarshipGame.tsx`

The Phaser game component that handles the game logic and rendering. Features include:
- Detects when the starship's fire overlaps with meteors.
- Plays a sound effect upon collision.
- Removes the meteor from the game screen.

### `Modal.tsx`

The modal component that is displayed when the game is over. It includes:

- A title.
- A message.
- Buttons to play again or navigate to the home page.

### `Login.tsx` & `Register.tsx`

- **Login.tsx**: Allows users to log in using their email and password. Implements bcrypt for password verification and JWT for token generation.
- **Register.tsx**: Allows users to register by providing a username, email, and password. Passwords are securely hashed using bcrypt before being saved.

### `authService.ts`

Handles authentication logic, including:
- User login and registration requests.
- JWT token validation.
- Storing and retrieving tokens from localStorage or sessionStorage.

### MongoDB Integration

- User data, including login credentials and scores, is stored in a MongoDB database.
- The database is used to persist user information and retrieve the last saved score when a user logs in.
- The integration ensures scalability and secure data handling for the application.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or inquiries, please contact [yosishor28@gmail.com](mailto:yosishor28@gmail.com).

