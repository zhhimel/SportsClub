import React from "react";

const page = () => {
  return (
    <div>
      <div class="content">
        <div class="container">
          <div class="col-md-12">
            <h1>Contact Us</h1>
          </div>
        </div>

        <div class="container">
          <div class="col-md-12">
            <hr />
          </div>
        </div>

        <div class="container">
          <div class="col-md-6 contacts">
            <h1>
              <span class="glyphicon glyphicon-user"></span> Jullian Engracio
            </h1>
            <p>
              <span class="glyphicon glyphicon-envelope"></span> Email:
              julzengracio@yahoo.ie
              <br />
              <span class="glyphicon glyphicon-link"></span> Facebook:
              www.facebook.com/julzengracio
              <br />
              <span class="glyphicon glyphicon-phone"></span> Mobile:
              08712345678
            </p>
          </div>
          <div class="col-md-6">
            <form>
              <div class="form-group">
                <label for="Title">Title:</label>
                <input
                  type="text"
                  name="title"
                  id="Title"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <label for="Comment">Message:</label>
                <textarea
                  id="Comment"
                  rows="10"
                  class="form-control"
                ></textarea>
              </div>
              <button type="submit" class="btn btn-default pull-right">
                Send <span class="glyphicon glyphicon-send"></span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
