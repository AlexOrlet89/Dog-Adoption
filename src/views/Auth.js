import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signInUser, signupUser } from '../services/users';

export default function Auth({ setCurrentUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await signupUser({ email, password });
      setCurrentUser(resp.email);
      console.log(resp.email);
      history.push('/');
    } catch (e) {
      setError('something went wrong!');
    }
  };

  return (
    <div>
      SignIn
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            {' '}
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>
            {' '}
            Password
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <button> SignUp </button>
        </form>
      </div>
    </div>
  );
}
