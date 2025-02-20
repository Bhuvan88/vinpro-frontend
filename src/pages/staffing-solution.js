import Breadcrumb from "@/components/common/Breadcrumb";
import Layout from "@/components/layout/Layout";
import Home3Contact from "@/components/contact/Home3Contact";
import Service4 from "@/components/services/Service4";
import React from "react";

function StaffingSolutionPage() {
  return (
    <Layout>
      <Breadcrumb
        // pageList="Employer of Record"
        title="Staffing Solution."
      // pageName="Employer of Record"
      />
      <div className="case-study-details sec-mar mt-40">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/*}
              <div className="case-study-title">
                <h2>Employer of Record</h2>
              </div>
              <div className="case-big-img magnetic-item">
                <img
                  className="img-fluid"
                  src="assets/img/inner-pages/case-study-img-01.png"
                  alt=""
                />
              </div>
              */}

              <div className="row g-lg-4 gy-5 mb-120">
                <div className="col-lg-6 d-flex align-items-center">
                  <div className="section-title-4 home case-content">
                    <h2>Our Staffing <span>Service</span> Include </h2>
                    <h5 style={{ marginBottom: 0 }}>1.Temporary Staffing</h5>
                    <p style={{ marginBottom: 30 }}>Need additional support for a short-term project or during peak seasons? Our temporary staffing solutions are tailored to provide your business with skilled professionals quickly and efficiently, ensuring you never miss a beat.</p>
                    <h5 style={{ marginBottom: 0 }}>2.Permanent Placement</h5>
                    <p style={{ marginBottom: 0 }}>Finding long-term talent is key to your business’s growth. Our permanent staffing service focuses on sourcing highly qualified candidates who not only meet your technical requirements but align with your company culture and values.</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="case-img magnetic-item">
                    <img className="img-fluid" src="assets/img/inner-pages/case-study-img-02.png" alt="" />
                  </div>
                </div>
              </div>

              <div className="row g-lg-4 gy-5 mb-20">
                <div className="col-lg-6">
                  <div className="case-img magnetic-item">
                    <img
                      className="img-fluid"
                      src="assets/img/inner-pages/case-study-img-02.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center">
                  <div className="section-title-4 home case-content">
                    <h5 style={{ marginBottom: 0 }}>3.Contract Staffing</h5>
                    <p style={{ marginBottom: 30 }}>If you need flexible staffing for specialized roles or for a limited period, our contract staffing service gives you access to experts on a short-term basis, helping you maintain operational efficiency without the commitment of permanent hires.</p>
                    <h5 style={{ marginBottom: 0 }}>4.Executive Search</h5>
                    <p style={{ marginBottom: 0 }}>For key leadership roles, our executive search team is skilled in identifying top-tier candidates who have the vision and expertise to lead your organization into the future.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
       
        <div className="home6-what-we-do-section sec-mar ">
          <div className="container">
            <div className="row mb-55">
              <div className="col-lg-12 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                <div className="section-title-6 text-center">
                  <span>SERVICES</span>
                  <h2>Why Choose Us?</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Service4 />
       {/*<div className="gradiant-img">
          <img className="img-fluid" src="assets/img/Gradient.png" alt="" />
        </div>*/}
       
        <div className="service-faq-area sec-mar">
          <div className="container">
            <div className="row gy-5">
             
              <div
                className="col-lg-6 d-flex align-items-center wow animate fadeInRight"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div className="faq-content-area">
                  <h2>Process</h2>
                  <h5 style={{ marginBottom: 5, color:'var(--theme-color)' }}>Consultation</h5>
                  <p style={{ marginBottom: 20 }}>We begin by understanding your business goals and staffing needs, ensuring we have a comprehensive view of the roles you’re hiring for.</p>
                  
                  <h5 style={{ marginBottom: 5, color:'var(--theme-color)' }}>Recruitment & Sourcing</h5>
                  <p style={{ marginBottom: 20 }}>Using our extensive network, we identify and engage with potential candidates that match your job description.</p>
                
                  <h5 style={{ marginBottom: 5, color:'var(--theme-color)' }}>Candidate Screening: </h5>
                  <p style={{ marginBottom: 20 }}>We thoroughly vet each candidate, conducting interviews, skills assessments, and background checks to ensure they’re the right fit.</p>
                
                  <h5 style={{ marginBottom: 5, color:'var(--theme-color)' }}>Placement & Support:</h5>
                  <p style={{ marginBottom: 30 }}>Once we’ve found the right candidate, we assist in the placement process and offer ongoing support to ensure a seamless transition.</p>
                
                </div>
              </div>
              <div
                className="col-lg-6 wow animate fadeInLeft"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="faq-img magnetic-item">
                  <img
                    className="img-fluid"
                    src="assets/img/inner-pages/service-faq-img-01.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

          
      </div>
      <Home3Contact />

    </Layout>
  );
}

export default StaffingSolutionPage;