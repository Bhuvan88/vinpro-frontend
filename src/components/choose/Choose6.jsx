import Link from "next/link";
import React from "react";

function Choose6() {
  return (
    <div className="home6-choose-section sec-mar">
      <div className="container">
        <div className="row">
          <div className="choose-top">
            <div className="row">
              <div
                className="col-lg-6 wow animate fadeInUp"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="choose-title">
                  <span>Why Choose Us</span>
                  <h2>Unlock the potential of your business.</h2>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="choose-right-img magnetic-item">
                  <img
                    className="img-fluid"
                    src="assets/img/home-3/3.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="choose-btm">
            <div className="row  g-lg-4 gy-5">
              <div className="col-lg-7">
                <div className="choose-left-content">
                  <div className="vectors">
                    <img
                      className="choose-vec-top-r"
                      src="assets/img/home-6/choose-vec-top-r.svg"
                      alt=""
                    />
                    <img
                      className="choose-vec-btm-l"
                      src="assets/img/home-6/choose-vec-btm-l.svg"
                      alt=""
                    />
                  </div>
                  <div className="icon">
                    <img src="assets/img/logo1.png" alt="" />
                  </div>
                  <h4>
                      At Vinpro Connect, we are dedicated to simplifying the complexities of global employment and HR management. <br />
                    <span>Since 2011.</span>
                  </h4>
                  <p>
                  Our team is our greatest asset. Comprising experienced HR specialists, legal advisors, and payroll experts, we bring a wealth of knowledge and expertise to every client engagement. We are passionate about helping businesses succeed by managing their HR needs efficiently and effectively. </p>
                  
                  <div className="sl">
                    <h2>#1</h2>
                  </div>
                  <div className="about-btn">
                    <Link legacyBehavior href="/about">
                      <a>
                        <svg
                          width={7}
                          height={7}
                          viewBox="0 0 13 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M0 1H12M12 1V13M12 1L0.5 12" />
                        </svg>
                        About More
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="choose-feature">
                  <ul>
                    <li>
                      <div className="single-feature">
                        <div className="progress">
                          <h3>
                            <span className="counter">100</span>%
                          </h3>
                        </div>
                        <div className="content">
                          <h4>Payroll Management</h4>
                          <p>
                          Ensuring accurate and timely payroll processing across multiple jurisdictions. 
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="single-feature">
                        <div className="progress">
                          <h3>
                            <span className="counter">100</span>%
                          </h3>
                        </div>
                        <div className="content">
                          <h4>Employee Benefits Administration</h4>
                          <p>
                          Offering competitive benefits packages tailored to each market. 
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="single-feature">
                        <div className="progress">
                          <h3>
                            <span className="counter">100</span>%
                          </h3>
                        </div>
                        <div className="content">
                          <h4>HR Consulting</h4>
                          <p>
                          Providing strategic HR advice to optimize your workforce management. 
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="single-feature">
                        <div className="progress">
                          <h3>
                            <span className="counter">100</span>%
                          </h3>
                        </div>
                        <div className="content">
                          <h4>Compliance and Legal Support</h4>
                          <p>
                          Navigating the complexities of local labor laws and regulations. 
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Choose6;
