import Breadcrumb from "@/components/common/Breadcrumb";
import Layout from "@/components/layout/Layout";
import Home3Contact from "@/components/contact/Home3Contact";

import React from "react";
import blogData from "../data/blogData.json";
import Link from "next/link";

function BlogPgage() {
  return (
    <Layout>
      <Breadcrumb
        pageList=""
        title="HR & PAYROLL"
        pageName="HR & PAYROLL"
      />
     
      <div className="home3-blog-area sec-mar">
        <div className="container">
          <div className="row g-lg-4 gy-5">
            {blogData.map((item) => {
              const { id, category, img, date, hint, title, paragraph } = item;
              return (
                <div
                  key={id}
                  className="col-lg-6 col-md-6 wow animate fadeInLeft"
                  data-wow-delay="300ms"
                  data-wow-duration="1500ms"
                >
                  <div className="single-blog magnetic-item">
                    <div className="blog-img">
                      <img className="img-fluid" src={img} alt="" />
                      {/* <div className="blog-tag">{category}</div> */}
                    </div>
                    <div className="blog-content">
                      {/* <ul className="blog-meta">
                        <li>{date}</li>
                        <li>Comment ({count_comment})</li>
                      </ul> */}
                     
                      <p><span style={{paddingBottom : 20, color:"var(--theme-color)"}}>{hint}</span></p>
                      <h4 >{title}</h4>
                      <div style={{marginTop : 10,height:220}}>
                        <p>{paragraph}</p>
                      </div>
                      <div className="blog-footer">
                        <div className="read-btn">
                          <Link legacyBehavior href="/">
                            <a>
                              Read More
                              <svg
                                width={12}
                                height={12}
                                viewBox="0 0 13 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M0 1H12M12 1V13M12 1L0.5 12" />
                              </svg>
                            </a>
                          </Link>
                        </div>
                      {/*
                        <div className="social-area">
                          <ul>
                            <li>
                              <a href="https://www.facebook.com/">
                                <i className="bx bxl-facebook" />
                              </a>
                            </li>
                            <li>
                              <a href="https://twitter.com/">
                                <i className="bx bxl-twitter" />
                              </a>
                            </li>
                            <li>
                              <a href="https://www.pinterest.com/">
                                <i className="bx bxl-pinterest-alt" />
                              </a>
                            </li>
                            <li>
                              <a href="https://www.instagram.com/">
                                <i className="bx bxl-instagram" />
                              </a>
                            </li>
                          </ul>
                          <span>
                            <img
                              src="/assets/img/home-3/plain-icon.svg"
                              alt=""
                            />
                          </span>
                        </div>
                      */}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="case-study-details sec-mar">
            <div className="row">
              <div className="col-lg-12">
              
                <div className="row g-lg-4 gy-5 mb-120">
                <div className="col-lg-6">
                    <div className="case-img magnetic-item">
                      <img className="img-fluid" src="assets/img/inner-pages/hr1.png" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center">
                    <div className="section-title-4 home case-content">
                      <h2>The Global <span>HR</span> Platform you deserve</h2>
                      <p style={{ marginTop: -20, marginBottom: 5 }}>Handle every HR task on a single human resource management system with an intuitive experience you and your team will love.</p>
                      <p style={{ marginBottom: 5 }}>From onboarding to offboarding and everything in between, you can do it on one centralized human resource management system.</p>
                      <p style={{ marginBottom: 5 }}>It's all in one place, so you can spend less time tracking down documents and more time giving your global team the experience they deserve. Whether you have a small team or a global enterprise, we’re ready to help with the tools you need and the features you love.</p>
                     </div>
                  </div>
                  
                </div>

                <div className="row g-lg-4 gy-5 mb-20">
                  <div className="col-lg-6 d-flex align-items-center">
                    <div className="section-title-4 home case-content">
                      <h2><span>HR </span>& <span>Payroll </span>Services</h2>
                      <p style={{marginTop: -20, marginBottom: 30 }}>Are you tired of managing complex payroll tasks on your own? Look no further! Our top-notch payroll services streamline your processes, boost efficiency, and ensure compliance, leaving you with more time to focus on what Truly Matters-growing your business</p>
                      
                      <h2>Supercharge Your <span>HR </span>& <span>Payroll </span> Today</h2>
                      <p style={{ marginTop: -20 }}>When it comes to managing your HR and payroll processes, choosing the right partner is crucial. At our company, we go above and beyond to deliver exceptional service that sets us apart from the competition.</p>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="case-img magnetic-item">
                      <img
                        className="img-fluid"
                        src="assets/img/inner-pages/hr2.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="case-study-pages sec-mar">
            <div className="container">
            <h2><span>HR & PAYROLL SERVICES</span></h2>
              <div className="row gy-5 mb-60 justify-content-center">
                <div className="">
                  <div className="case-study-wrap">
                    <div className="row">
                      <div className="col-lg-7 d-flex align-items-center">
                        <div className="case-content">
                          <h3>1.Payroll Services</h3>
                          <p>VINPRO Global provides flexible payroll solutions that help to simplify payroll, so you can scale up or down depending on your business needs. We manage the complexities and day-to-day tasks of payroll, so you can focus on running your business. By ensuring greater accuracy and seamless integration. Our extensive network of experts enables us to provide both local or global coverage, depending on where your business is based. </p>
                          <div className="linkfeature">
                              <ul>
                                <li>Payroll Processing That's Faster And Easier Locally And Globally</li>
                                <li>Online Employee And Manager Self-Service</li>
                                <li>Certified, Experienced Payroll Professionals</li>
                                <li>Simple Integration With Your Existing Business Software, Time Tracking, HR Systems And Enterprise Resource Planning (ERP)</li>
                              </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5">
                        <div className="case-img magnetic-item">
                          <img
                            className="img-fluid"
                            src="assets/img/inner-pages/hr3.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="">
                  <div className="case-study-wrap">
                    <div className="row">
                      <div className="col-lg-7 d-flex align-items-center">
                        <div className="case-content">
                        <h3>2.Process Payroll & HR</h3>
                          <h5>We've Got Your Back For Payroll & HR Processing</h5>
                          <p>When It Comes To Managing Payroll And HR Tasks, You Can Count On Us To Be Your Reliable Support System. We Understand The Complexities Involved In These Critical Areas, And We're Here To Make Your Life Easier. Here's How We Support You
                            <br/>There Are Several Factors That Differentiate These Two Outsourcing Models. Here We Focus On The Main Differences:
                          </p>
                          <div className="linkfeature">
                              <ul>
                                <li><b>Accuracy And Compliance: </b> Payroll And HR Processes Require Meticulous Attention To Detail And Adherence To Ever-Changing Regulations. Our Experienced Team Stays Up-To-Date With The Latest Laws And Regulations, Ensuring Accurate Calculations And Full Compliance. Say Goodbye To Payroll Errors And Compliance Headaches.</li>
                               </ul>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-5">
                        <div className="case-img magnetic-item">
                          <img
                            className="img-fluid"
                            src="assets/img/inner-pages/hr4.png"
                            alt=""
                          />
                        </div>
                      </div>
                    
                      <div className="linkfeature" style={{marginLeft:15}}>
                          <ul>
                            <li><b>Timely And Efficient: </b>We Know That Timely Payroll Processing And HR Administration Are Vital To Keep Your Business Running Smoothly. With Our Streamlined Systems And Efficient Processes, We Guarantee Timely Delivery Of Payroll And HR Services, Saving You Valuable Time And Reducing Administrative Burdens.</li>
                            <li><b>Dedicated Support: </b>Our Team Of Experts Is Always Ready To Assist You. Whether You Have Questions About Payroll Calculations, Employee Benefits, Or HR Policies, We Provide Prompt And Knowledgeable Support. You Can Rely On Us To Be There Whenever You Need Us</li>
                            <li><b>Scalable Solutions: </b>As Your Business Grows, So Do Your HR And Payroll Needs. We Offer Scalable Solutions That Can Adapt To Your Evolving Requirements. Whether You're Hiring New Employees, Expanding To New Locations, Or Implementing New Policies, Our Services Can Accommodate Your Changing Business Landscape.</li>
                          </ul>
                      </div>
                     
                    </div>
                  </div>
                </div>
            
                <div className="">
                  <div className="case-study-wrap">
                    <div className="row">
                      <div className="col-lg-5">
                        <div className="case-img magnetic-item">
                          <img
                            className="img-fluid"
                            src="assets/img/inner-pages/hr5.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-7 d-flex align-items-center">
                        <div className="case-content">
                          <h3>3.Managed Payroll</h3>
                          <h5>Relieve Your Payroll Burden with Our Managed Services</h5>
                          <p>Say goodbye to the hassle of payroll processing and let us handle it all for you. With our comprehensive Payroll Managed Services, we take care of the entire payroll process from start to finish, allowing you to redirect your valuable resources towards more valuable tasks</p>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                <div className="">
                  <div className="case-study-wrap">
                    <div className="row">
                      <div className="col-lg-5">
                        <div className="case-img magnetic-item">
                          <img
                            className="img-fluid"
                            src="assets/img/inner-pages/hr6.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-7 d-flex align-items-center">
                        <div className="case-content">
                          <h3>4.Comprehensive Payroll</h3>
                          <h5>Leave Your Payroll in Our Capable Hands - We're Your Trusted Partner</h5>
                          <p>When it comes to running payroll smoothly and efficiently, count on us to take care of every detail. Our comprehensive payroll services cover everything from data capture to payment disbursal, including tax reporting. But we don't stop there. <br/>
                          We go the extra mile by acting as your dedicated payroll team, representing you and providing assistance to your employees.</p>
                          <p>By fully outsourcing your payroll department functions to us, you can rely on our expertise to handle employee inquiries, resolve payroll issues, and ensure a seamless experience for everyone involved.</p>
                        </div>
                      </div>
                      <div className="case-content">
                    <p style={{paddingTop:20}}>
                      Join the thousands of satisfied clients from diverse industries who have chosen us for our responsive, knowledgeable, and personalized service. With us as your trusted partner, you can confidently entrust your payroll responsibilities to our capable hands.
                    </p>
                    </div>
                    </div>
                  </div>
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

export default BlogPgage;