
const page = () => {
  return (
    <div>
      <div className="content">
        <div className="container">
          <div className="col-md-6 col-md-offset-3">
            <form action="login.php" method="POST">
              <div className="form-group">
                <label for="username">Username: </label>
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  value=""
                />
                <span className="error"></span>
              </div>
              <div className="form-group">
                <label for="password">Password: </label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  value=""
                />
                <span className="error"></span>
              </div>
              <button type="submit" className="btn btn-default">
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
