import React, { use, useEffect, useState } from "react";
import axios from "axios";

function Pricing4() {
   const [pricelist, setPricelist] = useState(null);
      
      useEffect(() => {
        getTeamlist();
      }, []);
    
      const API_URL = process.env.NEXT_PUBLIC_API_URL; //"http://localhost:8055/";
      const getTeamlist = async() => {
        try {
          let respData = await axios.get(`${API_URL}items/price_list`);
          console.log(respData);
          
          if (respData.status === 200 && respData.data.data.length > 0) {
            //console.log(respData.data.data);
            setPricelist(respData.data.data);
          }
        } catch (error) {
          console.error("Error submitting form:", error);
        }
    }
  return (
    <div className="home4-pricing-plan" style={{backgroundColor:'#fff'}}>
       <div className="gradiant-img">
                <img className="img-fluid" src="assets/img/Gradient.png" alt="" />
            </div>
    <div className="container-fluid">
      <div className="row wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
        <div className="col-lg-12">
          <div className="section-title-4 home two text-center">
            <h2>Hire and expand globally at a fraction of the cost</h2>
            <p>Best pricing in the EOR and global employment market. No hidden costs, no surprises.</p>
            {/* <nav>
              <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Billed Monthly</button>
                <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Billed Yearly
                  <span>-20 Off</span></button>
              </div>
            </nav> */}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex={0}>
              <div className="row g-4 align-items-center justify-content-center">
              {pricelist && pricelist.map((item,i) =>{
                var iteminfo = JSON.parse(item.details);
                return <div className="col-xl-4 col-md-6 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                  <div className="pricing-card two">
                    <div className="pricing-top">
                      <span>{item.title}</span>
                      <h2><sup>$</sup>{item.price}<sub>/{item.pricetitle}</sub></h2>
                    </div>
                    <div className="pricing-content">
                      <ul>
                      {iteminfo.map((info,j) =><li>{info}<img src="assets/img/home-4/check.svg" alt="" /></li>
                      )}
                       </ul>
                      <div className="pay-btn one">
                        <a className="primary-btn3" href={item.buttonlink}>{item.buttontext}</a>
                      </div>
                    </div>
                  </div>
                </div>
              })}
               
              </div>
            </div>
            {/*
             <div className="col-xl-4 col-md-6 wow animate fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                  <div className="pricing-card two">
                    <div className="pricing-top">
                      <span>Full-Time Employees</span>
                      <h2><sup>$</sup>199<sub>/Starting From</sub></h2>
                      <h5 style={{fontWeight:'300', fontSize:12, color:'#ffffff', marginTop:20}}>Unlock bigger discounts<br/>
                      More onboardings, more savings!</h5>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li>Hire full-time employees anywhere<img src="assets/img/home-4/check.svg" alt="" /></li>
                        <li>Payroll in 100+ currencies<img src="assets/img/home-4/check.svg" alt="" /></li>
                        <li>Contracts tailored to local laws<img src="assets/img/home-4/check.svg" alt="" /></li>
                        <li>Perks, benefits, time-off and expenses<img src="assets/img/home-4/check.svg" alt="" /></li>
                        <li>Employee tax management<img src="assets/img/home-4/check.svg" alt="" /></li>
                      </ul>
                      <div className="pay-btn two">
                        <a className="primary-btn3" href="#">Request Demo</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6 wow animate fadeInRight" data-wow-delay="300ms" data-wow-duration="1500ms">
                  <div className="pricing-card two">
                    <div className="pricing-top">
                      <span>Enterprise</span>
                      <h2 style={{fontSize:50}}>Get a Quote</h2>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li>Localized employment agreements<img src="assets/img/home-4/check.svg" alt="" /></li>
                        <li>Payroll in 100+ currencies, taxes and deductions<img src="assets/img/home-4/check.svg" alt="" /></li>
                        <li>Benefits, time-off, expenses and bonuses<img src="assets/img/home-4/check.svg" alt="" /></li>
                        <li>Dedicated employee and employer manager<img src="assets/img/home-4/check.svg" alt="" /></li>
                        <li>Customized systems integrations and reporting<img src="assets/img/home-4/check.svg" alt="" /></li>
                      </ul>
                      <div className="pay-btn three">
                        <a className="primary-btn3" href="#">Talk to our experts</a>
                      </div>
                    </div>
                  </div>
                </div>

            <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabIndex={0}>
              <div className="row g-4 align-items-center justify-content-center">
                <div className="col-xl-4 col-md-6">
                  <div className="pricing-card">
                    <div className="pricing-top">
                      <span>Basic Plan</span>
                      <h2><sup>$</sup>290<sub>/year</sub></h2>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li>Email &amp; communication services<img src="assets/img/home-4/check.svg" alt="" /></li>
                        <li>Basic data backup and storage<img src="assets/img/home-4/check.svg" alt="" /></li>
                        <li>Standard security measuresimg<img src="assets/img/home-4/check.svg" alt="" /></li>
                        <li>Limited software support<img src="assets/img/home-4/cross.svg" alt="" /></li>
                        <li>Suitable for small businesses<img src="assets/img/home-4/cross.svg" alt="" /></li>
                      </ul>
                      <div className="pay-btn">
                        <a className="primary-btn3" href="#">Pay Now</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="pricing-card two">
                    <div className="pricing-top">
                      <span>Premium Plan </span>
                      <h2><sup>$</sup>490<sub>/year</sub></h2>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li>Email &amp; communication services<img src="assets/img/home-4/check.svg" alt="" /></li>
                        <li>Basic data backup and storage<img src="assets/img/home-4/check.svg" alt="" /></li>
                        <li>Standard security measuresimg<img src="assets/img/home-4/check.svg" alt="" /></li>
                        <li>Limited software support<img src="assets/img/home-4/check.svg" alt="" /></li>
                        <li>Suitable for small businesses<img src="assets/img/home-4/check.svg" alt="" /></li>
                      </ul>
                      <div className="pay-btn">
                        <a className="primary-btn3" href="#">Pay Now</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="pricing-card">
                    <div className="pricing-top">
                      <span>Enterprise Plan</span>
                      <h2><sup>$</sup>890<sub>/year</sub></h2>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li>Email &amp; communication services<img src="assets/img/home-4/check.svg" alt="" /></li>
                        <li>Basic data backup and storage<img src="assets/img/home-4/check.svg" alt="" /></li>
                        <li>Standard security measuresimg<img src="assets/img/home-4/check.svg" alt="" /></li>
                        <li>Limited software support<img src="assets/img/home-4/check.svg" alt="" /></li>
                        <li>Suitable for small businesses<img src="assets/img/home-4/check.svg" alt="" /></li>
                      </ul>
                      <div className="pay-btn">
                        <a className="primary-btn3" href="#">Pay Now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>  
            </div>
            */}
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Pricing4
