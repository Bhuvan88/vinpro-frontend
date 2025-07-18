import Breadcrumb from "@/components/common/Breadcrumb";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";

function Citylist(props) {
  const [view, setView] = useState(false);
  const [sections, setSections] = useState(null);
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const API_URL_IMAGE = process.env.NEXT_PUBLIC_API_URL_IMAGE;

  useEffect(() => {
    if (view) {
      props.show(view);
    }
  }, [view]);

  useEffect(() => {
    getCities();
  }, []);

  const getCities = async () => {
    try {
      let contentParams = API_URL + 'items/countries';

      let respData = await axios.get(contentParams);
      if (respData.status === 200 && respData.data.data.length > 0) {
        setSections(respData.data.data);
      }
    } catch (error) {
      console.error("Error ", error);
    }
  }

  return (
    <div className="home5-case-study sec-mar">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {sections && sections.length > 0 &&
              sections.map((item,i)=>{
                return <div
              className="single-case-study wow animate fadeInUp"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="row g-4">
                <div className="col-lg-5 d-flex align-items-center">
                  <div className="case-study-content">
                    <h3><span style={{ fontSize: 36, fontWeight: 600, color: '#0C3069' }}>{item?.name}</span></h3>
                    <p>{item?.description}</p>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="case-study-img-and-btn">
                    <div className="case-img magnetic-item">
                      <img
                        className="img-fluid"
                        src={item?.image? API_URL_IMAGE + item?.image : "assets/img/home-5/city1.png"}
                        alt="city image"
                      />
                    </div>
                    <div className="learn-more-btn">

                      <Link className="primary-btn8" scroll={true} href="#calculator">
                        <svg
                          width={12}
                          height={12}
                          viewBox="0 0 13 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M0 1H12M12 1V13M12 1L0.5 12" />
                        </svg>
                        LEARN MORE
                      </Link>

                    </div>
                  </div>
                </div>
              </div>
            </div>
              }
            )}
            {/*
            <div
              className="single-case-study wow animate fadeInUp"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="row g-4">
                <div className="col-lg-5 d-flex align-items-center">
                  <div className="case-study-content">
                    <h3><span style={{ fontSize: 36, fontWeight: 600, color: '#0C3069' }}>India</span></h3>
                    <p>An EOR handles recruitment, compensation, taxes, regulatory compliance, and more, while the client company oversees the day-to-day work
                    </p>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="case-study-img-and-btn">
                    <div className="case-img magnetic-item">
                      <img
                        className="img-fluid"
                        src="assets/img/home-5/city1.png"
                        alt=""
                      />
                    </div>
                    <div className="learn-more-btn">

                      <Link className="primary-btn8" scroll={true} href="#calculator">
                        <svg
                          width={12}
                          height={12}
                          viewBox="0 0 13 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M0 1H12M12 1V13M12 1L0.5 12" />
                        </svg>
                        LEARN MORE
                      </Link>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="single-case-study wow animate fadeInUp"
              data-wow-delay="300ms"
              data-wow-duration="1500ms"
            >
              <div className="row g-4">
                <div className="col-lg-5 d-flex align-items-center">
                  <div className="case-study-content">
                    <h3><span style={{ fontSize: 36, fontWeight: 600, color: '#0C3069' }}>Dubai</span></h3>
                    <p>An EOR handles recruitment, compensation, taxes, regulatory compliance, and more, while the client company oversees the day-to-day work.</p>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="case-study-img-and-btn">
                    <div className="case-img magnetic-item">
                      <img
                        className="img-fluid"
                        src="assets/img/home-5/city2.png"
                        alt=""
                      />
                    </div>
                    <div className="learn-more-btn">
                      <Link className="primary-btn8" scroll={true} href="#calculator">
                        <svg
                          width={12}
                          height={12}
                          viewBox="0 0 13 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M0 1H12M12 1V13M12 1L0.5 12" />
                        </svg>
                        LEARN MORE
                      </Link>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="single-case-study wow animate fadeInUp"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="row g-4">
                <div className="col-lg-5 d-flex align-items-center">
                  <div className="case-study-content">
                    <h3><span style={{ fontSize: 36, fontWeight: 600, color: '#0C3069' }}>Bahrin</span></h3>
                    <p>An EOR handles recruitment, compensation, taxes, regulatory compliance, and more, while the client company oversees the day-to-day work.</p>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="case-study-img-and-btn">
                    <div className="case-img magnetic-item">
                      <img
                        className="img-fluid"
                        src="assets/img/home-5/city3.png"
                        alt=""
                      />
                    </div>
                    <div className="learn-more-btn">
                      <Link className="primary-btn8" scroll={true} href="#calculator">
                        <svg
                          width={12}
                          height={12}
                          viewBox="0 0 13 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M0 1H12M12 1V13M12 1L0.5 12" />
                        </svg>
                        LEARN MORE
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>*/}

          </div>
        </div>
      </div>
      <div id="calculator" style={{ marginTop: 10 }}></div>
    </div>);
}

export default Citylist;
