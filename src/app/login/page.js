'use client'
import Link from "next/link";
const page = () => {
  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('logPOST', {
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
                <label for="username">Username: </label>
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  
                />
                <span className="error"></span>
              </div>
              <div className="form-group">
                <label for="password">Password: </label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  
                />
                <span className="error"></span>
              </div>
              <button type="submit" className="btn btn-default" onClick={handleLogin}>
                Login
              </button>
            </form>
            <div>
              Don't have an account? Click here to <Link href='/register'>register</Link>.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
