import { useRouter } from 'next/router'
import React from 'react'

function About3() {
  const currentRoute = useRouter().pathname
  return (
    <div className={`home3-about-section ${currentRoute === "/about"? "sec-mar":""}`}>
  <div className="container-fluid">
    <div className="row g-lg-4 gy-5">
      <div className="col-lg-9">
        <div className="section-title-3 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
          <h2>Welcome to Vinpro Connect!</h2>
          <p>At Vinpro Connect, we are dedicated to simplifying the complexities of global employment and HR management. Since our inception in 2011, we have been committed to providing seamless professional services across verticals, including Employer on Record (EOR), Payroll Services, Recruitment Services and comprehensive Accounting, Tax and Advisory services to businesses of all sizes. </p>
        </div>
        <div className="about-left">
          <div className="about-img  wow animate fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
            <img className="img-fluid magnetic-item" src="assets/img/home-3/2.png" alt="" />
          </div>
          <div className="about-content wow animate fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
            <h2>Our Story</h2>
            <p>Our journey began with a vision to bridge the gap between businesses and their global workforce. Founded by a team of HR professionals, legal experts and finance professionals, we recognized the challenges companies face when expanding internationally. Over the years, we have grown into a trusted partner for businesses looking to navigate the intricacies of global employment with ease and confidence. </p>
            <div className="devider" />
            <ul className="about-feature">
              <li>
                <h5>Customized Solutions</h5>
                <p>Services are professional w offerings provided.</p>
              </li>
              <li>
                <h5>Quality Reliability</h5>
                <p>Services are professional w offerings provided.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="about-right">
          <div className="about-img wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
            <img className="img-fluid magnetic-item" src="assets/img/home-3/1.png" alt="" />
          </div>
          <div className="about-exprience d-flex align-items-center justify-content-center wow animate fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
            <div className="exp-text">
              <img src="assets/img/home-3/rotate-text.png" alt="" />
            </div>
            <div className="years">
              <h2>14<br /><span>Years</span></h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


  )
}

export default About3
