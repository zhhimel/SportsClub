
const page = () => {
  return (
    <div>
      <div className="content">
        <div className="container">
          <div className="col-md-12">
            <h1>What we organize</h1>
          </div>
        </div>

        <div className="container">
          <div className="col-md-12">
            <hr />
          </div>
        </div>

        <div className="row">
          <section>
            <div className="container">
              <div className="col-md-6">
                <img src="images/wedding2.jpg" className="img-responsive" />
              </div>
              <div className="subcontent col-md-6">
                <h1>Wedding</h1>
                <p>
                  The most important day in a couple's life. Guaranteeing
                  personalized solutions and flawless execution, our venues
                  provide the perfect location for your special day.
                </p>
                <hr className="customline" />
                <button type="button" className="btn btn-default btn-lg">
                  View Events{" "}
                  <span
                    className="glyphicon glyphicon-arrow-right"
                    aria-hidden="true"
                  ></span>
                </button>
              </div>
            </div>
          </section>
        </div>

        <div className="container">
          <div className="col-md-12">
            <hr />
          </div>
        </div>

        <div className="row">
          <section>
            <div className="container">
              <div className="col-md-6">
                <img src="images/birthday2.jpg" className="img-responsive" />
              </div>
              <div className="subcontent col-md-6">
                <h1>Birthday</h1>
                <p>
                  Whether an all-day or the ultimate extravaganza that lasts
                  well into the wee hours, our Urban Events team is here to make
                  sure all your birthday party wishes come true so you can kick
                  back, drink up and enjoy your special day!
                </p>
                <hr className="customline" />
                <button type="button" className="btn btn-default btn-lg">
                  View Events{" "}
                  <span
                    className="glyphicon glyphicon-arrow-right"
                    aria-hidden="true"
                  ></span>
                </button>
              </div>
            </div>
          </section>
        </div>

        <div className="container">
          <div className="col-md-12">
            <hr />
          </div>
        </div>

        <div className="row">
          <section>
            <div className="container">
              <div className="col-md-6">
                <img src="images/fashion2.jpg" className="img-responsive" />
              </div>
              <div className="subcontent col-md-6">
                <h1>Fashion</h1>
                <p>
                  Fast becoming to go-to location for fashion events, PR
                  gatherings and product launches, The Urban Purveyor Group
                  venues provide you with choice and quality in premium
                  locations for all your event needs.
                </p>
                <hr className="customline" />
                <button type="button" className="btn btn-default btn-lg">
                  View Events{" "}
                  <span
                    className="glyphicon glyphicon-arrow-right"
                    aria-hidden="true"
                  ></span>
                </button>
              </div>
            </div>
          </section>
        </div>

        <div className="container">
          <div className="col-md-12">
            <hr />
          </div>
        </div>

        <div className="row">
          <section>
            <div className="container">
              <div className="col-md-6">
                <img src="./styles/images/meeting2.jpg" />
              </div>
              <div className="subcontent col-md-6">
                <h1>Meeting</h1>
                <p>
                  From formal, to not-so-formal, our flexible event spaces can
                  cater to your every need for meetings and conferences large or
                  small, and our dedicated event team can assist with all
                  aspects of your event planning.
                </p>
                <hr className="customline" />
                <button type="button" className="btn btn-default btn-lg">
                  View Events{" "}
                  <span
                    className="glyphicon glyphicon-arrow-right"
                    aria-hidden="true"
                  ></span>
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default page;
