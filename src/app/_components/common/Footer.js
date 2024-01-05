
const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="row">
            <section>
              <div className="footerContent col-md-4">
                <p className="footerContent1">
                  <strong>I</strong>
                  <span className="small footerSubtext">nstitute of</span>
                  <strong>A</strong>
                  <span className="small footerSubtext">rt</span>
                  <strong>D</strong>
                  <span className="small footerSubtext">esign and</span>
                  <strong>T</strong>
                  <span className="small footerSubtext">echnology</span>
                </p>

                <p className="footerSubtext2">
                  Kill Avenue, Dun Laoghaire, Co. Dublin &copy; Urban Events
                  Venue & Catering, 2016.
                </p>
              </div>
            </section>
            <section>
              <div className="footcontent col-md-4">
                DL824 Multimedia Design/Web Engineering
                <br />
                Creative Computing 2015-2016.
                <br />
                Julz Engracio, N00145647
              </div>
            </section>
            <section>
              <div className="footcontent col-md-4">
                Follow Us:
                <br />
                {/* <img src=}  /> */}
                <img src="images/twitter.png" />
                <img src="images/googleplus.png" />
                <img src="images/youtube.png" />
              </div>
            </section>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
