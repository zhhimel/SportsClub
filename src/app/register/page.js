'use client';
import React, { useState } from 'react';

const page = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/regPOST', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Handle successful login
        console.log('Login successful');
      } else {
        // Handle login error
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div>
      <div className="content">
        <div className="container">
          <div className="col-md-6 col-md-offset-3">
            <form action="#" method="POST">
              <div className="form-group">
                <label htmlFor="username">Username: </label>
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <span className="error"></span>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password: </label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="error"></span>
              </div>
              <button type="submit" className="btn btn-default" onClick={handleLogin}>
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
