import React, { useState } from "react";
import { register } from "../../../controllers/auth/users/register";
import styles from "./Register.module.scss"
import { Link, useNavigate } from "react-router-dom";
import { setUserDetails } from "../../../store/slices/userSlice";
import { useDispatch } from 'react-redux';


const Register: React.FC = () => {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await register({ username, email, password });
    console.log("Registration Successful");
    const data = {
      userName: res.payload.username,
      email: res.payload.email,
      role: res.payload.role,
      date: res.date.toString(),
      userId: res.payload.userId,
      isAuthenticated: true,
      token: res.token
    }
    dispatch(setUserDetails(data));
    navigate("/home");

  };


  return (
    <div className={styles.container}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={username}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', padding: '20px', gap: '10px' }}>

          <button style={{ backgroundColor: 'lightGreen', color: 'black' }} type="submit">Register</button>
          <Link to="/login"><button style={{width:'max-content', color: 'black' }}>Login</button></Link>
        </div>
      </form>
    </div>
  );
};

export default Register;

