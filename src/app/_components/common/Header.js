import React from "react";

const Header = () => {
  return (
    <div>
      <header className="bgImage">
        <nav className="navbar">
          <div className="container">
            <div className="navbar-header">
              <a href="index" class="navbar-brand">
                Event Management Systems
              </a>
            </div>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="viewEvents">Events</a>
              </li>
              <li>
                <a href="viewLocations">Locations</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
              <li className="btnlogout">
                <a class="btn btn-default navbar-btn" href="logout">
                  Logout <span class="glyphicon glyphicon-log-out"></span>
                </a>
              </li>
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
                        <div class="col-md-6 col-md-offset-3">
                          <form action="login" method="POST">
                            <div class="form-group">
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
                              class="btn btn-default loginbtn"
                            >
                              Login
                            </button>
                            <a
                              className="btn btn-default navbar-btn rgsterbtn"
                              href="register_form"
                            >
                              Register
                            </a>
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
        <div class="col-md-12">
          <div class="container">
            <div class="jumbotron">
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
