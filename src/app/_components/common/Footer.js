import React from "react";

const Footer = () => {
  return (
    <div>
      <footer>
        <div class="container">
          <div class="row">
            <section>
              <div class="footerContent col-md-4">
                <p class="footerContent1">
                  <strong>I</strong>
                  <span class="small footerSubtext">nstitute of</span>
                  <strong>A</strong>
                  <span class="small footerSubtext">rt</span>
                  <strong>D</strong>
                  <span class="small footerSubtext">esign and</span>
                  <strong>T</strong>
                  <span class="small footerSubtext">echnology</span>
                </p>

                <p class="footerSubtext2">
                  Kill Avenue, Dun Laoghaire, Co. Dublin &copy; Urban Events
                  Venue & Catering, 2016.
                </p>
              </div>
            </section>
            <section>
              <div class="footcontent col-md-4">
                DL824 Multimedia Design/Web Engineering
                <br />
                Creative Computing 2015-2016.
                <br />
                Julz Engracio, N00145647
              </div>
            </section>
            <section>
              <div class="footcontent col-md-4">
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
