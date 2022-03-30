import React from 'react';

export default function SignIn() {
  return (
    <div>
      SignIn
      <div>
        <form>
          <label>
            {' '}
            Email:
            <input type="email" />
          </label>
          <label>
            {' '}
            Password
            <input type="password" />
          </label>
          <button> SignIn </button>
        </form>
      </div>
    </div>
  );
}
