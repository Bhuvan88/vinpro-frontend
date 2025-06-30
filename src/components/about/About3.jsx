import { useRouter } from 'next/router'
import React from 'react'

const About3 = (props) => {
  const API_URL_IMAGE = process.env.NEXT_PUBLIC_API_URL_IMAGE; //"http://localhost:8055/uploads/";

  const { data1: Section1, data2: Section2 } = props;

  const currentRoute = useRouter().pathname
  return (
    <div className={`home3-about-section ${currentRoute === "/about" ? "sec-mar" : ""}`}>
      <div className="container-fluid">
        <div className="row g-lg-4 gy-5">
          <div className="col-lg-9">
            <div className="section-title-3 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              <h2>{Section1?.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: (Section1?.description) }} />
            </div>
            <div className="about-left">
              <div className="about-img  wow animate fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                <img className="img-fluid magnetic-item" src={Section2?.image1 ? API_URL_IMAGE + Section2?.image1 : "assets/img/home-3/2.png"} alt="" />
              </div>
              <div className="about-content wow animate fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                <h2 style={{color:"#102b71"}}>{Section2?.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: (Section2?.description) }} />
                <br/> 
                <div className="devider" />
                <ul className="about-feature">
                  {Section2?.list_details &&
                    JSON.parse(Section2?.list_details).map((item, i) => <li><h5>{item}</h5></li>)
                 }
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="about-right">
              <div className="about-img wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                <img className="img-fluid magnetic-item" src={Section1?.image1 ? API_URL_IMAGE + Section1?.image1 : "assets/img/home-3/1.png"} alt="" />
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
