import { useState } from 'react';
import { login } from '../../../controllers/auth/users/login';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../../store/slices/userSlice';
import {setUserDetails} from '../../../store/slices/userSlice';

export const useLoginViewModel = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  console.log('user', user);
  const handleSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();

      const form = new FormData(e.target as HTMLFormElement);
      const email = form.get('email') as string;
      const password = form.get('password') as string;

      setError(null);
      const {ok, payload, token,date} = await login(email, password);
      if (ok) {
        console.log('user logged in');
        const data = {
          userName: payload.username,
          email: payload.email,
          role: payload.role,
          date: date.toString(),
          userId: payload.userId,
          isAuthenticated: true,
          token: token
        }
        dispatch(setUserDetails(data));
        // dispatch({ type: 'user/setUserDetails', payload: payload })
        console.log('done')
        navigate('/home')
      }
    } catch (err) {
      setError('Invalid username or password');
    }
  };

  return {handleSubmit, error };
};
