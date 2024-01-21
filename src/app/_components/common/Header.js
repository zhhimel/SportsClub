'use client'
import Link from "next/link";
const Header = () => {

  const user=window.localStorage.getItem('user');

  const handleLogOut = () => {
    window.localStorage.removeItem('user');
    window.location.href='/';
  }
  return (
    <div>
      <header className="bgImage">
        <nav className="navbar">
          <div className="container">
            <div className="navbar-header">
              <Link  href="/" className="navbar-brand">
                Event Management Systems
              </Link>
            </div>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link  href="/">Home</Link>
              </li>
              <li>
                <Link  href="/viewEvents">Events</Link>
              </li>
              <li>
                <Link  href="/viewLocations">Locations</Link>
              </li>
              <li>
                <Link  href="/feedback">Feedback</Link>
              </li>
              <li>
                <Link  href="/contact">Contact Us</Link>
              </li>
              {user!=null?(  <li className="btnlogout">
                <Link  className="btn btn-default navbar-btn" href="/login">
                  Login <span className="glyphicon glyphicon-log-out"></span>
                </Link>
              </li>):(
                  <li className="btnlogout">
                  <Link href='/' className="btn btn-default navbar-btn" onClick={handleLogOut}>
                    Logout <span className="glyphicon glyphicon-log-out"></span>
                  </Link>
                </li>
              )}
            
              <div
                className="modal fade"
                id="login"
                tabindex="-1"
                role="dialog"
                aria-labelledby="myModalLabel"
              >
                <div className="modal-dialog" role="document"> 
                  <div className="modal-content">
                    <div className="modal-header">
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                      <h4 className="modal-title" id="myModalLabel">
                        Login
                      </h4>
                    </div>
                    <div className="row">
                      <div className="modal-body">
                        <div className="col-md-6 col-md-offset-3">
                          <form action="login" method="POST">
                            <div className="form-group">
                              <label for="username">Username:</label>
                              <input
                                type="text"
                                name="username"
                                className="form-control"
                                value=""
                              />
                              <span className="error"></span>
                            </div>
                            <div className="form-group">
                              <label for="password">Password:</label>
                              <input
                                type="password"
                                name="password"
                                className="form-control"
                                value=""
                              />
                              <span className="error"></span>
                            </div>
                            <button
                              type="submit"
                              className="btn btn-default loginbtn"
                            >
                              Login
                            </button>
                            <Link 
                              className="btn btn-default navbar-btn rgsterbtn"
                              href="register_form"
                            >
                              Register
                            </Link>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-default closebtn"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </nav>
        <div className="col-md-12">
          <div className="container">
            <div className="jumbotron">
              <h1>Urban Events Venues & Catering</h1>
              <p>
                Whether you're looking to book a cocktail party, post-work
                gathering, celebratory function, conference, business meeting,
                wedding, or private dining event, our dedicated Urban Events
                team can create a package that will meet your every need.
              </p>
              <p id="dateAndTime"></p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;