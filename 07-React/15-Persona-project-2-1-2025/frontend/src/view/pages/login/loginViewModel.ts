import { useState } from 'react';
import { login } from './setUser';
import { useNavigate } from 'react-router-dom';


export const useLoginViewModel = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();

      const form = new FormData(e.target as HTMLFormElement);
      const email = form.get('email') as string;
      const password = form.get('password') as string;

      setError(null);
      const {ok} = await login(email, password);
      if (ok) {
        console.log('user logged in');
        navigate('/home')
      }
    } catch (err) {
      setError('Invalid username or password');
    }
  };

  return {handleSubmit, error };
};
