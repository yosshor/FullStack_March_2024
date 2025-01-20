import { useLoginViewModel } from './loginViewModel';
import { Link, useNavigate } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../home/Home';


const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  //checking if the user is logged in
  const { token } = useContext(UserContext);
  useEffect(() => {
    if (token) {
      console.log('token', token);
      navigate('/home');
    }
  }, [token, navigate]);

  const { handleSubmit, error } = useLoginViewModel();
  const login = <>
    <Link to="/register"><button>Register</button></Link>
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="text"
            name='email'
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name='password'
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  </>


  return (
    <div>
      {token ? null : login}
    </div>

  );

};


export default LoginPage;
