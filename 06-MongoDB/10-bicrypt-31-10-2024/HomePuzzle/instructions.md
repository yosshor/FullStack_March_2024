# Security Implementation Exercise: User Authentication & Protection

**Base Project**: Users-Pets Application

## Level 1: Basic Security Implementation (max: 90 points)
### Database Security
1. Protect Database Connection
   - Implement environment variables using `dotenv` to secure the database URL
   - Move the database connection string from your code to a `.env` file

2. Password Protection
   - Use `bcrypt` to hash user passwords before storing them in the database
   - Implement password verification during login
   - Ensure password comparison is done securely using bcrypt's compare function

## Level 2: Admin Security Layer (max: 95 points)
### System Administrator Access
1. Create Special Admin Routes
   - Implement separate registration and login endpoints for system administrators
   - Create a dedicated admin collection in the database

2. Enhanced Security Measures
   - Implement bcrypt protection for admin passwords
   - Use environment variables to store admin-specific secrets
   - Ensure high-strength encryption and secret keys for admin accounts

## Level 3: Advanced Security Challenge (max: 100 points)
### Admin Login Protection
1. Implement Login Attempt Monitoring
   - Track failed login attempts for admin accounts
   - After 3 failed attempts:
     - Block admin access for 5 minutes
     - Implement a countdown timer before allowing new attempts

2. Security Notifications
   - After 5 failed login attempts:
     - Send an email alert to the system administrator
     - Include timestamp and attempt details in the notification

### Implementation Tips
- Use secure environment variables for all sensitive information
- Implement proper error handling for all security features
- Ensure secure storage of failed login attempts
- Use async/await for database and encryption operations

### Testing Requirements
- Test all security features thoroughly
- Verify email notifications are working
- Confirm login blocking functionality
- Test password hashing and verification
