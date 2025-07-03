import Breadcrumb from "@/components/common/Breadcrumb";
import Layout from "@/components/layout/Layout";
import Home3Contact from "@/components/contact/Home3Contact";

import React, { useState, useEffect } from 'react';
import blogData from "../data/blogData.json";
import Link from "next/link";
import axios from "axios";

function BlogPgage() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const API_URL_IMAGE = process.env.NEXT_PUBLIC_API_URL_IMAGE;
  const [sections, setSections] = useState(null);
  const [blogSection, setBlogSection] = useState(blogData);
  const [bannerSection, setBannerSection] = useState(null);
  const [Section1, setSection1] = useState(null);
  const [Section2, setSection2] = useState(null);
  const [Section3, setSection3] = useState(null);
  const [Section4, setSection4] = useState(null);
  const [Section5, setSection5] = useState(null);
  const [Section6, setSection6] = useState(null);
  const [Section7, setSection7] = useState(null);
  const [Section8, setSection8] = useState(null);
  const [Section9, setSection9] = useState(null);
  const [Section10, setSection10] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
        try {
            let contentParams = API_URL + 'items/webcontent';

            let respData = await axios.get(contentParams);
            if (respData.status === 200 && respData.data.data.length > 0) {
              setSections(respData.data.data);
            }
          } catch (error) {
            console.error("Error ", error);
          }
      };
      fetchData();
  }, []);

  useEffect(() => {
    if (sections && sections.length > 0) {
      for (var i = 0; i < 11; i++) {
        var mysections = sections.filter(section => section.section_title === `HrpayrollSection${i + 1}`);
        if (mysections) {
          if (i === 0) {
            setBannerSection(mysections[0]);
          } else if (i === 1) {
            //setBlogSection(prev => prev[0][mysections[0]]);
            setSection1(mysections[0]);
          } else if (i === 2) {
            setSection2(mysections[0]);
          } else if (i === 3) {
            setSection3(mysections[0]);
          } else if (i === 4) {
            setSection4(mysections[0]);
          } else if (i === 5) {
            setSection5(mysections[0]);
          } else if (i === 6) {
            setSection6(mysections[0]);
          } else if (i === 7) {
            setSection7(mysections[0]);
          } else if (i === 8){
            setSection8(mysections[0]);
          } else if (i === 9){
            setSection9(mysections[0]);
          } else if (i === 10){
            setSection10(mysections[0]);
          }

        }
      }
    }
  }, [sections]);


  useEffect(() => {
    if(Section1){
       blogSection[0]= {
          "id": "1",
          "img": Section1?.image1 ?  Section1?.image1 : "/assets/img/home-3/hris 1.png",
          "hint": Section1?.subtitle ?  Section1?.subtitle :  "Human Resource information system.",
          "title" :  Section1?.title ?  Section1?.title :  "HRIS",
          "paragraph":  Section1?.description ?  Section1?.description : "An HRIS (Human Resources Information System) is a software or online platform used by organizations to manage and automate various human resources (HR) functions and processes. It serves as a central database that stores employee data and streamlines HR tasks, from recruitment to payroll, benefits management, performance evaluations, and compliance with labor laws.",
          "link": Section1?.button_link ? Section1?.button_link : "",
          "btn_text": Section1?.button_text ? Section1?.button_text : ""
        };
    }
    if(Section2){
       blogSection[1]= {
          "id": "2",
          "img": Section2?.image1 ?  Section2?.image1 : "/assets/img/home-3/contract 1.png",
          "hint": Section2?.subtitle ?  Section2?.subtitle :  "HIRING",
          "title" :  Section2?.title ?  Section2?.title :  "CONTRACTOR MANAGEMENT",
          "paragraph":  Section2?.description ?  Section2?.description : "Managing contractors and freelancers around the world involves overseeing payments, ensuring compliance, handling communication, and maintaining an organized workflow. Here’s a detailed breakdown of key areas you should cover for successful contractor management",
          "link": Section2?.button_link ? Section2?.button_link : "",
          "btn_text": Section2?.button_text ? Section2?.button_text : ""
        };
    }
    if(Section3){
       blogSection[2]= {
          "id": "3",
          "img": Section3?.image1 ?  Section3?.image1 : "/assets/img/home-3/hiring remotely 1.png",
          "hint": Section3?.subtitle ?  Section3?.subtitle :  "LOCATION",
          "title" :  Section3?.title ?  Section3?.title : "REMOTE TALENT",
          "paragraph":  Section3?.description ?  Section3?.description : "Remote talent refers to workers who are employed or contracted to perform their job duties from a location outside of the employer’s office, often from their home or any location of their choosing. With the rise of digital work tools, a growing number of businesses are looking to hire qualified candidates from around the world, regardless of geographical constraints. This approach enables organizations to access a global talent pool and hire the best candidates for their needs, regardless of location.",
          "link": Section3?.button_link ? Section3?.button_link : "",
          "btn_text": Section3?.button_text ? Section3?.button_text : ""
        };
    }
     if(Section4){
       blogSection[3]= {
          "id": "4",
          "img": Section4?.image1 ?  Section4?.image1 : "/assets/img/home-3/hiring remotely 1.png",
          "hint": Section4?.subtitle ?  Section4?.subtitle : "API",
          "title" :  Section4?.title ?  Section4?.title : "REMOTE EMBEDDED & APIs",
          "paragraph":  Section4?.description ?  Section4?.description : "APIs are sets of rules and protocols that allow different software applications to communicate with each other. They allow businesses to integrate third-party services or functionalities into their platforms without building them from scratch.",
          "link": Section4?.button_link ? Section4?.button_link : "",
          "btn_text": Section4?.button_text ? Section4?.button_text : ""
        };
    }
  }, [Section1, Section2, Section3, Section4]);

  return (
    <Layout>
      <Breadcrumb
        pageList=""
        title={bannerSection ? bannerSection?.title : "HR & PAYROLL"}
        pageName="HR & PAYROLL"
        image1={bannerSection && bannerSection?.image1 ? API_URL_IMAGE + bannerSection?.image1 : null}
        image2={bannerSection && bannerSection?.image2 ? API_URL_IMAGE + bannerSection?.image2 : null}
      // p
      />
      <div className="home3-blog-area sec-mar">
        <div className="container">
          <div className="row g-lg-4 gy-5">

            {blogSection.map((item) => {
              const { id, category, img, date, hint, title, paragraph, btn_text, link } = item;
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

                      <p><span style={{ paddingBottom: 20, color: "var(--theme-color)" }}>{hint}</span></p>
                      <h4 >{title}</h4>
                      <div style={{ marginTop: 10, height: 220 }}>
                        <div dangerouslySetInnerHTML={{ __html: (paragraph) }} />
                      </div>
                      <div className="blog-footer">
                        <div className="read-btn">
                          <Link legacyBehavior href={link!= "" ? link : "/"}>
                            <a>
                              {btn_text != "" ? btn_text : "Read More"}
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
                      <img className="img-fluid" 
                      src={Section5?.image1 ? API_URL_IMAGE + Section5?.image1 : "assets/img/inner-pages/hr1.png"} alt="Section5 image" />
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center">
                    <div className="section-title-4 home case-content">
                      {Section5?.title ? <h2>{Section5?.title}</h2> : <h2>The Global <span>HR</span> Platform you deserve</h2>}
                      {Section5?.description ? <div dangerouslySetInnerHTML={{ __html: (Section5?.description) }} /> : <>
                      <p style={{ marginTop: -20, marginBottom: 5 }}>Handle every HR task on a single human resource management system with an intuitive experience you and your team will love.</p>
                      <p style={{ marginBottom: 5 }}>From onboarding to offboarding and everything in between, you can do it on one centralized human resource management system.</p>
                      <p style={{ marginBottom: 5 }}>It's all in one place, so you can spend less time tracking down documents and more time giving your global team the experience they deserve. Whether you have a small team or a global enterprise, we’re ready to help with the tools you need and the features you love.</p>
                      </>}
                    </div>
                  </div>

                </div>

                <div className="row g-lg-4 gy-5 mb-20">
                  <div className="col-lg-6 d-flex align-items-center">
                    <div className="section-title-4 home case-content">
                      {Section6?.title ? <h2>{Section6?.title}</h2> : <h2><span>HR </span>& <span>Payroll </span>Services</h2>}
                      {Section6?.description ? <div dangerouslySetInnerHTML={{ __html: (Section6?.description) }} /> :<><p style={{ marginTop: -20, marginBottom: 30 }}>Are you tired of managing complex payroll tasks on your own? Look no further! Our top-notch payroll services streamline your processes, boost efficiency, and ensure compliance, leaving you with more time to focus on what Truly Matters-growing your business</p>
                      <h2>Supercharge Your <span>HR </span>& <span>Payroll </span> Today</h2>
                      <p style={{ marginTop: -20 }}>When it comes to managing your HR and payroll processes, choosing the right partner is crucial. At our company, we go above and beyond to deliver exceptional service that sets us apart from the competition.</p>
                      </>}
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="case-img magnetic-item">
                      <img
                        className="img-fluid"
                        src={Section6?.image1 ? API_URL_IMAGE + Section6?.image1 : "assets/img/inner-pages/hr2.png"} alt="Section6 image" />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="case-study-pages sec-mar">
            <div className="container">
              {Section7?.title ? <h2>{Section7?.title}</h2> : <h2><span>HR & PAYROLL SERVICES</span></h2>}
              <div className="row gy-5 mb-60 justify-content-center">
                <div className="">
                  <div className="case-study-wrap">
                    <div className="row">
                      <div className="col-lg-7 d-flex align-items-center">
                    
                        <div className="case-content">
                          {Section7?.description ? <div dangerouslySetInnerHTML={{ __html: (Section7?.description) }} /> : 
                          <>
                          <h3>1. Payroll Services</h3>
                          <p>VINPRO Global provides flexible payroll solutions that help to simplify payroll, so you can scale up or down depending on your business needs. We manage the complexities and day-to-day tasks of payroll, so you can focus on running your business. By ensuring greater accuracy and seamless integration. Our extensive network of experts enables us to provide both local or global coverage, depending on where your business is based. </p>
                          <div className="linkfeature">
                            <ul>
                              <li>Payroll Processing That's Faster And Easier Locally And Globally</li>
                              <li>Online Employee And Manager Self-Service</li>
                              <li>Certified, Experienced Payroll Professionals</li>
                              <li>Simple Integration With Your Existing Business Software, Time Tracking, HR Systems And Enterprise Resource Planning (ERP)</li>
                            </ul>
                          </div>
                          </>}
                        </div>

                      </div>
                      <div className="col-lg-5">
                        <div className="case-img magnetic-item">
                          <img
                            className="img-fluid"
                            src={Section7?.image1 ? API_URL_IMAGE + Section7?.image1 : "assets/img/inner-pages/hr3.png"}
                            alt="Section7 image"
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
                           {Section8?.title ? <h3>{Section8?.title}</h3> : <h3>2. Process Payroll & HR</h3>}
                          {Section8?.description ? <div dangerouslySetInnerHTML={{ __html: (Section8?.description) }} /> : <>
                          <h5>We've Got Your Back For Payroll & HR Processing</h5>
                          <p>When It Comes To Managing Payroll And HR Tasks, You Can Count On Us To Be Your Reliable Support System. We Understand The Complexities Involved In These Critical Areas, And We're Here To Make Your Life Easier. Here's How We Support You
                            <br />There Are Several Factors That Differentiate These Two Outsourcing Models. Here We Focus On The Main Differences:
                          </p>
                          <div className="linkfeature">
                            <ul>
                              <li><b>Accuracy And Compliance: </b> Payroll And HR Processes Require Meticulous Attention To Detail And Adherence To Ever-Changing Regulations. Our Experienced Team Stays Up-To-Date With The Latest Laws And Regulations, Ensuring Accurate Calculations And Full Compliance. Say Goodbye To Payroll Errors And Compliance Headaches.</li>
                            </ul>
                          </div>
                          </>}
                        </div>
                      </div>

                      <div className="col-lg-5">
                        <div className="case-img magnetic-item">
                          <img
                            className="img-fluid"
                            src={Section8?.image1 ? API_URL_IMAGE + Section8?.image1 :"assets/img/inner-pages/hr4.png"}
                            alt="Section 8 image"
                          />
                        </div>
                      </div>
                      {/*
                      <div className="linkfeature" style={{ marginLeft: 15 }}>
                        <ul>
                          <li><b>Timely And Efficient: </b>We Know That Timely Payroll Processing And HR Administration Are Vital To Keep Your Business Running Smoothly. With Our Streamlined Systems And Efficient Processes, We Guarantee Timely Delivery Of Payroll And HR Services, Saving You Valuable Time And Reducing Administrative Burdens.</li>
                          <li><b>Dedicated Support: </b>Our Team Of Experts Is Always Ready To Assist You. Whether You Have Questions About Payroll Calculations, Employee Benefits, Or HR Policies, We Provide Prompt And Knowledgeable Support. You Can Rely On Us To Be There Whenever You Need Us</li>
                          <li><b>Scalable Solutions: </b>As Your Business Grows, So Do Your HR And Payroll Needs. We Offer Scalable Solutions That Can Adapt To Your Evolving Requirements. Whether You're Hiring New Employees, Expanding To New Locations, Or Implementing New Policies, Our Services Can Accommodate Your Changing Business Landscape.</li>
                        </ul>
                      </div>
                      */}

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
                            src={Section9?.image1 ? API_URL_IMAGE + Section9?.image1 :"assets/img/inner-pages/hr5.png"}
                            alt="Section 9 Image"
                          />
                        </div>
                      </div>
                      <div className="col-lg-7 d-flex align-items-center">
                        <div className="case-content">
                          {Section9?.title ? <h3>{Section9?.title}</h3> : <h3>3. Managed Payroll</h3>}
                          {Section9?.description ? <div dangerouslySetInnerHTML={{ __html: (Section9?.description) }} /> : <>
                          <h5>Relieve Your Payroll Burden with Our Managed Services</h5>
                          <p>Say goodbye to the hassle of payroll processing and let us handle it all for you. With our comprehensive Payroll Managed Services, we take care of the entire payroll process from start to finish, allowing you to redirect your valuable resources towards more valuable tasks</p>
                          </>}
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
                            src={Section10?.image1 ? API_URL_IMAGE + Section10?.image1 :"assets/img/inner-pages/hr6.png"}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-7 d-flex align-items-center">
                        <div className="case-content">
                          {Section10?.title ? <h3>{Section10?.title}</h3> :<h3>4. Comprehensive Payroll</h3>}
                          {Section10?.description ? <div dangerouslySetInnerHTML={{ __html: (Section10?.description) }} /> : <>
                          <h5>Leave Your Payroll in Our Capable Hands - We're Your Trusted Partner</h5>
                          <p>When it comes to running payroll smoothly and efficiently, count on us to take care of every detail. Our comprehensive payroll services cover everything from data capture to payment disbursal, including tax reporting. But we don't stop there. <br />
                            We go the extra mile by acting as your dedicated payroll team, representing you and providing assistance to your employees.</p>
                          <p>By fully outsourcing your payroll department functions to us, you can rely on our expertise to handle employee inquiries, resolve payroll issues, and ensure a seamless experience for everyone involved.</p>
                        </>}
                        </div>
                      </div>
                      {/*
                      <div className="case-content">
                        <p style={{ paddingTop: 20 }}>
                          Join the thousands of satisfied clients from diverse industries who have chosen us for our responsive, knowledgeable, and personalized service. With us as your trusted partner, you can confidently entrust your payroll responsibilities to our capable hands.
                        </p>
                      </div>*/}
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