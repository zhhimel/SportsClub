
const page = () => {
  return (
    <div>
      <div className="content">
    <div className="container">
        <div className="col-md-6 col-md-offset-3">
            <form action="register.php" className="form-group" method="POST">
                <div className="form-group">
                    <label for="username">Username: </label>
                    <input type="text" id="username" name="username" className="form-control" value=""/>
                    <span className="error"></span>
                </div>
                <div className="form-group">
                    <label for="password">Password: </label>
                    <input type="password" id="password" name="password" className="form-control" value=""/>
                    <span className="error"></span>
                </div>
                <div className="form-group">
                    <label for="cpassword">Confirm Password: </label>
                    <input type="password" id="cpassword" name="cpassword" className="form-control" value=""/>
                    <span className="error"></span>
                </div>
                <button type="submit" className="btn btn-default">Register</button>
            </form>
        </div>
    </div>
</div>

    </div>
  )
}

export default page
