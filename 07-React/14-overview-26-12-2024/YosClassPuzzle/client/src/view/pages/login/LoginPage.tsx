import React from 'react';
import { useLoginViewModel } from './loginViewModel';


const LoginPage: React.FC = () => {

  const { handleSubmit, error } = useLoginViewModel();

  return (
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
  );
};


export default LoginPage;
