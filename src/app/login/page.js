'use client';
import React, { useState } from 'react';
import axios from 'axios';

const Page = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`${process.env.BACKEND_URL}logPOST`, {
        email,
        password,
      });

      // Assuming your API returns a status of 200 for a successful login
      if (response.status === 200) {
        // Handle successful login
        console.log('Login successful');
      } else {
        // Handle login error
        console.error('Login failed');
      }
    } catch (error) {
      // Handle network or other errors
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
                <label htmlFor="username">Email: </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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

export default Page;
