import express from 'express';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';

const app = express();
app.use(cookieParser());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/your_database');

// Set up routes
app.post('/login', (req, res) => {
  // Authenticate user
  // If authentication successful:
  res.cookie('user_id', 'user_id_value', { httpOnly: true, maxAge: 3600000 }); // 1 hour
  res.send('Login successful');
});

app.get('/logout', (req, res) => {
  res.clearCookie('user_id');
  res.send('Logged out');
});

app.listen(3000, () => console.log('Server running on port 3000'));