import { useLoginViewModel } from './loginViewModel';
import { Link, useNavigate } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../home/Home';
import styles from './Login.module.scss';


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
    <div className={styles.container}>
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
        <div style={{ display: 'flex', justifyContent: 'center', padding: '20px', gap: '10px' }}>

          <button style={{ color: 'black' }} type="submit">Login</button>
          <Link to="/register"><button style={{ backgroundColor: 'lightGreen', color: 'black' }}>Register</button></Link>
        </div>

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
