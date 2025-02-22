import Breadcrumb from "@/components/common/Breadcrumb";
import Layout from "@/components/layout/Layout";
import Home3Contact from "@/components/contact/Home3Contact";
import Citylist from "./citylist"
import EORcalculator from "./EORcalculator";
import React, { useEffect, useState } from "react";

function CaseStudyDetailsPage() {
  const [show, setShow] = useState(false);

  return (
    <Layout>
      <Breadcrumb
        // pageList="Employer of Record"
        title="Employer of Record."
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
              <div className="case-content mb-60 text-center">
                <p> Hiring, or what many call "partnering", with an employer of record comes with several benefits. Hiring an EOR gives the client's company the opportunity to  manage their time more efficiently and effectively. Businesses rely on employers of record to help them hire employees
                  in multiple countries. With an EOR, a company can expand operations into another country without having to set up a local entity,
                  which can be expensive and take months or longer to accomplish. Working with an EOR allows businesses
                  big and small to employ and pay workers in other countries quickly and affordably. </p>
              </div>

              <div className="row g-lg-4 gy-5 mb-120">
                <div className="col-lg-6">
                  <div className="case-img magnetic-item">
                    <img
                      className="img-fluid"
                      src="assets/img/inner-pages/eor1.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center">
                  <div className="section-title-4 home case-content">
                    <h2>Employer of Record - <span>EOR</span></h2>
                    <p style={{ marginBottom: 0 }}>An Employer of Record is a company or organization that that helps you employ people legally in other countries and is legally responsible paying employees, including dealing with employee taxes, benefits, insurance, visa application, and sponsorship applications and a great many other transactions and operations concerning human resources.</p>
                    <p style={{ marginBottom: 0 }}>Businesses rely on EOR to help them hire employees in multiple countries. With an EOR, a company can expand operations into another country without having to set up a local entity, which can be expensive and take months or longer to accomplish. Working with an EOR allows businesses big and small to employ and pay workers in other countries quickly and affordably.</p>
                    <p>Companies often hire EOR to decrease all the complications and hurdles related to human resources operations, market access, market understanding and market participation, and managing payroll for international employees.</p>
                  </div>
                </div>
              </div>

              <div className="row g-lg-4 gy-5 mb-120">
                <div className="col-lg-6 d-flex align-items-center">
                  <div className="section-title-4 home case-content">
                    <h2><span>EOR</span> Service</h2>
                    <p style={{ marginBottom: 0 }}>Employer of record services allow companies without local legal entities to employ workers legally in other countries. These services mostly fall under the functions of human resources and legal teams, including payroll, benefits, taxes, stock options, and compliance.
                    </p>
                    <p style={{ marginBottom: 0 }}>Other employer of record services may include advisory services for companies looking to expand their teams into new markets. For example, an EOR may offer advice on how to integrate remote workers or how to create a global compensation plan. </p>
                    <p style={{ marginBottom: 0 }}>Employer of record services typically do not involve "co-employment," an arrangement in which two companies employ the same person simultaneously. In the country where the employee works, the EOR is the only employer on paper. In practice, however, the EOR does not have any involvement in the day-to-day life of the employee beyond HR functions like payroll and benefits administration.</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="case-img magnetic-item">
                    <img
                      className="img-fluid"
                      src="assets/img/inner-pages/eor2.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div className="row g-lg-4 gy-5 mb-120">
                <div className="col-lg-6">
                  <div className="case-img magnetic-item">
                    <img
                      className="img-fluid"
                      src="assets/img/inner-pages/eor3.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center">
                  <div className="section-title-4 home case-content">
                    <h2>EOR<span>VS</span>PEO</h2>
                    <p style={{ marginBottom: 0 }}>Even though they seem similar and many companies tend to confuse them, Professional Employer Organizations (PEOs) and Employers of Record (EORs) provide very different services.</p>
                    <p style={{ marginBottom: 0 }}>There are several factors that differentiate these two outsourcing models. Here we focus on the main differences:</p>
                    <div className="what-we-do-content">
                      <ul className="about-featue">
                        <li>
                          <svg width={15} height={15} viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.376831 8.16821C-0.247095 8.54593 -0.0579659 9.49862 0.662688 9.60837C1.24211 9.69666 1.52052 10.3701 1.17304 10.8431C0.740845 11.4312 1.27942 12.2389 1.98713 12.0639C2.55609 11.9231 3.07065 12.4387 2.9302 13.0088C2.75556 13.718 3.56158 14.2577 4.14855 13.8246C4.62054 13.4764 5.29275 13.7554 5.38073 14.336C5.49024 15.0581 6.44099 15.2476 6.81798 14.6224C7.12107 14.1198 7.84864 14.1198 8.15171 14.6224C8.52867 15.2476 9.47943 15.0581 9.58896 14.336C9.67707 13.7554 10.3492 13.4764 10.8211 13.8246C11.4081 14.2577 12.2142 13.718 12.0395 13.0088C11.899 12.4387 12.4136 11.9231 12.9826 12.0639C13.6903 12.2389 14.2289 11.4312 13.7967 10.8431C13.4492 10.3701 13.7276 9.69653 14.307 9.60837C15.0276 9.49864 15.2168 8.54597 14.5929 8.16821C14.0912 7.86452 14.0912 7.13547 14.5929 6.83178C15.2168 6.45407 15.0277 5.50138 14.307 5.39162C13.7276 5.30334 13.4492 4.62989 13.7967 4.15695C14.2289 3.56879 13.6903 2.76112 12.9826 2.93613C12.4136 3.07687 11.8991 2.5613 12.0395 1.99115C12.2141 1.28199 11.4081 0.742345 10.8211 1.17541C10.3492 1.52356 9.67695 1.2446 9.58896 0.664029C9.47945 -0.0580599 8.5287 -0.247606 8.15171 0.377594C7.84863 0.880237 7.12106 0.880237 6.81798 0.377594C6.44103 -0.247596 5.49027 -0.0580833 5.38073 0.664029C5.29263 1.24462 4.62054 1.5236 4.14855 1.17541C3.56158 0.742345 2.75554 1.28201 2.9302 1.99115C3.07065 2.56126 2.55612 3.07686 1.98713 2.93613C1.2794 2.76113 0.740845 3.56879 1.17304 4.15695C1.52049 4.62989 1.24209 5.30346 0.662688 5.39162C-0.0579425 5.50136 -0.247105 6.45403 0.376831 6.83178C0.878459 7.13548 0.878459 7.86453 0.376831 8.16821Z" />
                          </svg>
                          Liability
                        </li>
                        <li>
                          <svg width={15} height={15} viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.376831 8.16821C-0.247095 8.54593 -0.0579659 9.49862 0.662688 9.60837C1.24211 9.69666 1.52052 10.3701 1.17304 10.8431C0.740845 11.4312 1.27942 12.2389 1.98713 12.0639C2.55609 11.9231 3.07065 12.4387 2.9302 13.0088C2.75556 13.718 3.56158 14.2577 4.14855 13.8246C4.62054 13.4764 5.29275 13.7554 5.38073 14.336C5.49024 15.0581 6.44099 15.2476 6.81798 14.6224C7.12107 14.1198 7.84864 14.1198 8.15171 14.6224C8.52867 15.2476 9.47943 15.0581 9.58896 14.336C9.67707 13.7554 10.3492 13.4764 10.8211 13.8246C11.4081 14.2577 12.2142 13.718 12.0395 13.0088C11.899 12.4387 12.4136 11.9231 12.9826 12.0639C13.6903 12.2389 14.2289 11.4312 13.7967 10.8431C13.4492 10.3701 13.7276 9.69653 14.307 9.60837C15.0276 9.49864 15.2168 8.54597 14.5929 8.16821C14.0912 7.86452 14.0912 7.13547 14.5929 6.83178C15.2168 6.45407 15.0277 5.50138 14.307 5.39162C13.7276 5.30334 13.4492 4.62989 13.7967 4.15695C14.2289 3.56879 13.6903 2.76112 12.9826 2.93613C12.4136 3.07687 11.8991 2.5613 12.0395 1.99115C12.2141 1.28199 11.4081 0.742345 10.8211 1.17541C10.3492 1.52356 9.67695 1.2446 9.58896 0.664029C9.47945 -0.0580599 8.5287 -0.247606 8.15171 0.377594C7.84863 0.880237 7.12106 0.880237 6.81798 0.377594C6.44103 -0.247596 5.49027 -0.0580833 5.38073 0.664029C5.29263 1.24462 4.62054 1.5236 4.14855 1.17541C3.56158 0.742345 2.75554 1.28201 2.9302 1.99115C3.07065 2.56126 2.55612 3.07686 1.98713 2.93613C1.2794 2.76113 0.740845 3.56879 1.17304 4.15695C1.52049 4.62989 1.24209 5.30346 0.662688 5.39162C-0.0579425 5.50136 -0.247105 6.45403 0.376831 6.83178C0.878459 7.13548 0.878459 7.86453 0.376831 8.16821Z" />
                          </svg>
                          Insurance
                        </li>
                        <li>
                          <svg width={15} height={15} viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.376831 8.16821C-0.247095 8.54593 -0.0579659 9.49862 0.662688 9.60837C1.24211 9.69666 1.52052 10.3701 1.17304 10.8431C0.740845 11.4312 1.27942 12.2389 1.98713 12.0639C2.55609 11.9231 3.07065 12.4387 2.9302 13.0088C2.75556 13.718 3.56158 14.2577 4.14855 13.8246C4.62054 13.4764 5.29275 13.7554 5.38073 14.336C5.49024 15.0581 6.44099 15.2476 6.81798 14.6224C7.12107 14.1198 7.84864 14.1198 8.15171 14.6224C8.52867 15.2476 9.47943 15.0581 9.58896 14.336C9.67707 13.7554 10.3492 13.4764 10.8211 13.8246C11.4081 14.2577 12.2142 13.718 12.0395 13.0088C11.899 12.4387 12.4136 11.9231 12.9826 12.0639C13.6903 12.2389 14.2289 11.4312 13.7967 10.8431C13.4492 10.3701 13.7276 9.69653 14.307 9.60837C15.0276 9.49864 15.2168 8.54597 14.5929 8.16821C14.0912 7.86452 14.0912 7.13547 14.5929 6.83178C15.2168 6.45407 15.0277 5.50138 14.307 5.39162C13.7276 5.30334 13.4492 4.62989 13.7967 4.15695C14.2289 3.56879 13.6903 2.76112 12.9826 2.93613C12.4136 3.07687 11.8991 2.5613 12.0395 1.99115C12.2141 1.28199 11.4081 0.742345 10.8211 1.17541C10.3492 1.52356 9.67695 1.2446 9.58896 0.664029C9.47945 -0.0580599 8.5287 -0.247606 8.15171 0.377594C7.84863 0.880237 7.12106 0.880237 6.81798 0.377594C6.44103 -0.247596 5.49027 -0.0580833 5.38073 0.664029C5.29263 1.24462 4.62054 1.5236 4.14855 1.17541C3.56158 0.742345 2.75554 1.28201 2.9302 1.99115C3.07065 2.56126 2.55612 3.07686 1.98713 2.93613C1.2794 2.76113 0.740845 3.56879 1.17304 4.15695C1.52049 4.62989 1.24209 5.30346 0.662688 5.39162C-0.0579425 5.50136 -0.247105 6.45403 0.376831 6.83178C0.878459 7.13548 0.878459 7.86453 0.376831 8.16821Z" />
                          </svg>
                          Regulatory Compliance Management
                        </li>
                        <li>
                          <svg width={15} height={15} viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.376831 8.16821C-0.247095 8.54593 -0.0579659 9.49862 0.662688 9.60837C1.24211 9.69666 1.52052 10.3701 1.17304 10.8431C0.740845 11.4312 1.27942 12.2389 1.98713 12.0639C2.55609 11.9231 3.07065 12.4387 2.9302 13.0088C2.75556 13.718 3.56158 14.2577 4.14855 13.8246C4.62054 13.4764 5.29275 13.7554 5.38073 14.336C5.49024 15.0581 6.44099 15.2476 6.81798 14.6224C7.12107 14.1198 7.84864 14.1198 8.15171 14.6224C8.52867 15.2476 9.47943 15.0581 9.58896 14.336C9.67707 13.7554 10.3492 13.4764 10.8211 13.8246C11.4081 14.2577 12.2142 13.718 12.0395 13.0088C11.899 12.4387 12.4136 11.9231 12.9826 12.0639C13.6903 12.2389 14.2289 11.4312 13.7967 10.8431C13.4492 10.3701 13.7276 9.69653 14.307 9.60837C15.0276 9.49864 15.2168 8.54597 14.5929 8.16821C14.0912 7.86452 14.0912 7.13547 14.5929 6.83178C15.2168 6.45407 15.0277 5.50138 14.307 5.39162C13.7276 5.30334 13.4492 4.62989 13.7967 4.15695C14.2289 3.56879 13.6903 2.76112 12.9826 2.93613C12.4136 3.07687 11.8991 2.5613 12.0395 1.99115C12.2141 1.28199 11.4081 0.742345 10.8211 1.17541C10.3492 1.52356 9.67695 1.2446 9.58896 0.664029C9.47945 -0.0580599 8.5287 -0.247606 8.15171 0.377594C7.84863 0.880237 7.12106 0.880237 6.81798 0.377594C6.44103 -0.247596 5.49027 -0.0580833 5.38073 0.664029C5.29263 1.24462 4.62054 1.5236 4.14855 1.17541C3.56158 0.742345 2.75554 1.28201 2.9302 1.99115C3.07065 2.56126 2.55612 3.07686 1.98713 2.93613C1.2794 2.76113 0.740845 3.56879 1.17304 4.15695C1.52049 4.62989 1.24209 5.30346 0.662688 5.39162C-0.0579425 5.50136 -0.247105 6.45403 0.376831 6.83178C0.878459 7.13548 0.878459 7.86453 0.376831 8.16821Z" />
                          </svg>
                          Business Registration
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row g-lg-4 gy-5 mb-120">
                <div className="col-lg-6 wow animate fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
                  <div className="about-left-content">
                    <div className="section-title-4 home">
                      <h2>Is <span>EOR</span> Legal?</h2>
                      <p>Yes, it is legal to hire employees in other countries through an EOR. Some EORs are more compliant than others, though.</p>
                      <p>Only EORs that own their own entities can guarantee the maximum level of compliance everywhere they operate. Before you begin working with an EOR, make sure your EOR owns a local entity and has sufficient knowledge to handle localized payroll, benefits, taxes, and compliance.</p>
                    </div>

                  </div>
                </div>
                <div className="col-lg-6 wow animate fadeInRight" data-wow-delay="500ms" data-wow-duration="1500ms">
                  <div className="about-right-img d-flex justify-content-center  magnetic-item">
                    <img className="img-fluid" src="assets/img/inner-pages/eor4.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="gradiant-img">
          <img className="img-fluid" src="assets/img/Gradient.png" alt="" />
        </div>
        <div className="home4-about-section sec-mar">
          <div className="container">
            <div className="row">

              <div className="col-lg-6 wow animate fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
                <div className="about-left-img-wrap">
                  <div className="big-img magnetic-item">
                    <img className="img-fluid" src="assets/img/inner-pages/eor6.png" alt="" />
                  </div>
                  <div className="sm-img  magnetic-item">
                    <img className="img-fluid" src="assets/img/home-4/about-image-02.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 wow animate fadeInRight" data-wow-delay="500ms" data-wow-duration="1500ms">
                <div className="banner-right-content">
                  <div className="section-title-4 home">
                    <h2>Retain Employee Ownership​</h2>
                    <p>We help you build the perfect Indian team without giving up employee ownership!  Employee IP, day to day communication, and management are owned and managed by you</p>
                    <p>Vinpro  doesn't manage, direct, or even have access to any work your hires are doing. They work exclusively for you, acting like any team member, following your tools and processes. Zpro only does the finding, hiring, local laws compliance, social security, office and ensures they have the conditions to perform.</p>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {show ?
          <div>
            <div className="whyIndia">
              <div className="container">
                <div className="row mb-60">
                  <div className="col-lg-12">
                    <div className="case-content mb-60">
                      <div className="d-flex justify-content-between mt-3">
                        <h2>why India?</h2>
                        <a className="closeicon" onClick={()=>setShow(!show)}>X</a>
                      </div>
                      <p>Availability of suitable human resources have made India one of the hotspots of KPO/IT industry, Finance/Banking, Shared Service Centers, back office etc. India is home to a vast pool of human resources consisting of educated, English speaking, tech-savvy personnel.
                        Every year, more than 30 million graduates are enrolled in higher education in India. These figures very well give the idea of human resources availability in India
                        Onboard Talents in India with VINPRO</p>
                    </div>
                    <div className="row justify-content-center">
                      <div className="col-xl-3 col-sm-6">
                        <div className="single-process magnetic-item" >
                          {/* <div className="icon">
                            <img src="assets/img/inner-pages/research.svg" alt="" />
                          </div> */}
                          <div className="work-icon">
                            <img
                              src="assets/img/inner-pages/work-icon-01.svg"
                              alt=""
                            />
                          </div>
                          <h3>Hire Remote Employees</h3>
                        </div>
                      </div>
                      <div className="col-xl-3 col-sm-6">
                        <div className="single-process magnetic-item" >
                          {/* <div className="icon">
                            <img src="assets/img/inner-pages/devlopment.svg" alt="" />
                          </div> */}
                          <div className="work-icon">
                              <img
                                src="assets/img/inner-pages/work-icon-02.svg"
                                alt=""
                              />
                            </div>
                          <h3>Full India Coverage, No Compliance Risk</h3>
                        </div>
                      </div>
                      <div className="col-xl-3 col-sm-6">
                        <div className="single-process magnetic-item" >
                          {/* <div className="icon">
                            <img src="assets/img/inner-pages/testing.svg" alt="" />
                          </div> */}
                          <div className="work-icon">
                              <img
                                src="assets/img/inner-pages/work-icon-03.svg"
                                alt=""
                              />
                            </div>
                          <h3>Skilled Resources At Very Competitive Salary In India</h3>
                        </div>
                      </div>
                      <div className="col-xl-3 col-sm-6">
                        <div className="single-process magnetic-item" >
                          {/* <div className="icon">
                            <img src="assets/img/inner-pages/deploy.svg" alt="" />
                          </div> */}
                          <div className="work-icon">
                                  <img
                                    src="assets/img/inner-pages/work-icon-04.svg"
                                    alt=""
                                  />
                                </div>
                          <h3>No Transfer Pricing.</h3>
                        </div>
                      </div>

                      <div className="col-xl-3 col-sm-6">
                        <div className="single-process magnetic-item" >
                          {/* <div className="icon">
                            <img src="assets/img/inner-pages/devlopment.svg" alt="" />
                          </div> */}
                          <div className="work-icon">
                              <img
                                src="assets/img/inner-pages/work-icon-02.svg"
                                alt=""
                              />
                            </div>
                          <h3>Hire The Best Full-Time Talent Without Setting Up A New Entity</h3>
                        </div>
                      </div>
                      <div className="col-xl-3 col-sm-6">
                        <div className="single-process magnetic-item" >
                          {/* <div className="icon">
                            <img src="assets/img/inner-pages/testing.svg" alt="" />
                          </div> */}
                          <div className="work-icon">
                              <img
                                src="assets/img/inner-pages/work-icon-03.svg"
                                alt=""
                              />
                            </div>
                          <h3>Access To Local Tax And Employment Expertise</h3>
                        </div>
                      </div>
                      <div className="col-xl-3 col-sm-6">
                        <div className="single-process magnetic-item" >
                          {/* <div className="icon">
                            <img src="assets/img/inner-pages/deploy.svg" alt="" />
                          </div> */}
                          <div className="work-icon">
                                  <img
                                    src="assets/img/inner-pages/work-icon-04.svg"
                                    alt=""
                                  />
                                </div>
                          <h3>Reduce Admin And Skip Costly Legal And Payroll Set-Up</h3>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>
              </div>
            </div>
            <EORcalculator />
          </div>
          :
          <Citylist show={setShow} />
        }
      </div>
      <Home3Contact />

    </Layout>
  );
}

export default CaseStudyDetailsPage;