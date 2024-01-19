import React, { useState } from 'react';
import axios from 'axios';

const RegistrationPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');

  const handleRegister = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/logPOST', {
        username,
        password,
        cpassword,
      });

      // Assuming your API returns a status of 200 for a successful registration
      if (response.status === 200) {
        // Handle successful registration
        console.log('Registration successful');
      } else {
        // Handle registration error
        console.error('Registration failed');
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Error during registration:', error);
    }
  };

  return (
    <div>
      <div className="content">
        <div className="container">
          <div className="col-md-6 col-md-offset-3">
            <form action="register.php" className="form-group" method="POST">
              <div className="form-group">
                <label htmlFor="username">Username: </label>
                <input
                  type="text"
                  id="username"
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
                  id="password"
                  name="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="error"></span>
              </div>
              <div className="form-group">
                <label htmlFor="cpassword">Confirm Password: </label>
                <input
                  type="password"
                  id="cpassword"
                  name="cpassword"
                  className="form-control"
                  value={cpassword}
                  onChange={(e) => setCpassword(e.target.value)}
                />
                <span className="error"></span>
              </div>
              <button type="submit" className="btn btn-default" onClick={handleRegister}>
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
