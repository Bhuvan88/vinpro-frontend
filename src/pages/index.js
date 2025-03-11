import React, { useState, useEffect } from 'react';
import About4 from "@/components/about/About4";
import Banner3 from "@/components/bannner/Banner3";
import Home3Contact from "@/components/contact/Home3Contact";
import Footer3 from "@/components/footer/Footer3";
import Header from "@/components/header/Header";
import Pricing from "@/components/pricingplan/Pricing4";
import useBodyClass from "@/hooks/useBodyClass";
import Head from "next/head";

export default function Home() {
  useBodyClass("home-dark2");
  const [showEdit, setShowEdit] = useState(false);

  const Estimation = () => <div className='estimateText'>
    <div className="d-flex justify-content-between group-btn mt-2">
      <div class="btn-group btn-small" role="group" aria-label="Basic radio toggle button group">
        <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked />
        <label class="btn btn-outline-primary" for="btnradio1" >MONTHLY</label>

        <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
        <label class="btn btn-outline-primary" for="btnradio2">ANNUAL</label>
      </div>
      <div>
        <button type="button" class="btn btn-outline-primary"> <i className="bi bi-download" /><span> </span>Download</button>
      </div>
    </div>

    <div className="d-flex justify-content-between mt-3">
      <h6>Gross Monthly Pay</h6>
      <h6>INR 10,000</h6>
    </div>
    <div className="d-flex justify-content-between">
      <h6>Employee Cost</h6>
      <h6>INR 500</h6>
    </div>
    <div className="d-flex justify-content-between">
      <h6>Skuad fee</h6>
      <h6>INR 500</h6>
    </div>
    <div className="d-flex justify-content-between">
      <h6>Total monthly cost of employee</h6>
      <h6>INR 24,500</h6>
    </div>
    <hr />
    <div className="d-flex align-items-center justify-content-between">
      <h6 className="mt-3">Want more detailed information?</h6>
      <div className="learn-btn"><a class="primary-btn8" href="/service-details">TAlK TO EXPERT<svg width="12" height="12" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 1H12M12 1V13M12 1L0.5 12"></path></svg></a></div>
    </div>
  </div>;


  const CalculatorSection = () =>
    <div className="home3-solution-section calculationSection">
      <div className="container">
        <div className="row justify-content-center g-4">
          <div
            className="col-lg-6 col-md-6 col-sm-10 wow animate fadeInUp"
            data-wow-delay="300ms"
            data-wow-duration="1500ms"
          >
            <div className="section-title-4 home">
              <span>Higring Insights</span>
              <h2 style={{color:'#ffffff'}}>Calculate the cost too hire an employee in a new country</h2>
            </div>
            {showEdit && <Estimation />}
          </div>
          <div
            className="col-lg-6 col-md-6 col-sm-10 wow animate fadeInUp"
            data-wow-delay="400ms"
            data-wow-duration="1500ms"
          >
            <div className="faq-page">
              <div className="contact-form-wrap" style={{backgroundColor:'#f1f1f1'}}>

                <div className="contact-form">
                  <form>
                    <div className="row">
                      <div className="col-md-12 mb-20">
                        <div className="form-inner">
                          <select className="form-select" id="country" aria-label="Select a country you want hire">
                            <option value="1">Select a country you want hire</option>
                            <option value="2">India</option>
                            <option value="3">Bahrain</option>
                            <option value="4">UAE</option>
                            <option value="5">UK</option>
                            <option value="6">USA</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6 mb-20">
                        <div className="form-inner">
                          <select className="form-select" id="currency" aria-label="Currency">
                            <option value="1">Currency</option>
                            <option value="2">INR</option>
                            <option value="3">BHD</option>
                            <option value="3">USD</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6 mb-20">
                        <div className="form-inner">
                          <input type="text" placeholder="gross Annual salary" />
                        </div>
                      </div>
                      <div className="col-lg-12 mb-20 ">
                        <div className="d-flex flex-row">
                          <p>Eligible to work in India?</p>
                          <div className="form-check">
                            <input className="radio-btn" type="radio" name="inlineCheckbox" />
                            <label className="form-check-label" for="inlineCheckbox">Yes</label>
                          </div>
                          <div class="form-check">
                            <input className="radio-btn" type="radio" name="inlineCheckbox" />
                            <label className="form-check-label" for="inlineCheckbox">No</label>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-12 text-center">
                        <div className="form-inner">
                          <button className="primary-btn3" type="submit" onClick={() => setShowEdit(true)}>
                            Calculate
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;

  return (
    <>
      <Head>
        <title>
          Connect by Vinpro
        </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/img/sm-logo.svg" />
      </Head>

      <Header />
      <Banner3 />
      <CalculatorSection />

      <About4 />
      <Pricing />
      <Home3Contact />

      {/* <Partner3 /> 
      <Solution3 />
      <About3 />
      <SuccessStory3 />
      <Testimonial3 />
      <PricingPlan3 />
      <Home3Contact />
      <Home3Team />
      <Home3Blog />*/}
      <Footer3 />
    </>
  );
}
