import React, { useState } from 'react';
import { signInUser, signupUser } from '../services/users';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await signupUser({ email, password });
    } catch {
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
          <button> SignIn </button>
        </form>
      </div>
    </div>
  );
}
