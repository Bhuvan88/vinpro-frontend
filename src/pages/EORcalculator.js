import React, { useState, useEffect } from 'react';

export default function CalculatorSection() {
   const [showEdit, setShowEdit] = useState(false);

  return <div className="home3-solution-section sec-mar" style={{marginTop:60}}>
    <div className="container">
      <h2>EOR Calculator</h2>
      <p style={{marginBottom:40}}>Select the country you want to hire in, to explore and benchmark salaries for international roles</p>
      <div className="row justify-content-center g-4">
      <div
          className="col-sm-12 wow animate fadeInUp"
          data-wow-delay="400ms"
          data-wow-duration="1500ms"
        >
          <div className="">
            <div className="contact-form-wrap">
              <div className="contact-form">
                <form>
                  <div className="row">
                    <div className="col-md-12 mb-20">
                      <div className="form-inner">

                        <select className="form-select" id="country" aria-label="Select a country you want hire">
                          <option value="2">India</option>
                          <option value="3">Bahrain</option>
                          <option value="4">UAE</option>
                          <option value="5">UK</option>
                          <option value="6">USA</option>
                        </select>
                       
                      </div>
                    </div>

                    <div className="col-md-12 mb-20">
                      <div className="form-inner">

                        <select className="form-select" id="country" aria-label="Select a country you want hire">
                          <option value="2">Tamil Nadu</option>
                          <option value="3">Kerala</option>
                          <option value="4">Hyderabad</option>
                          <option value="5">Mumbai</option>
                          <option value="6">Pune</option>
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

                    <div className="col-lg-12 mb-20">
                        <h5>Benifits</h5>
                        <p>To accurately calculate costs, please ensure that mandatory benefits for this country are selected, if any.</p>
                    </div>

                    <div className="col-lg-12 mb-20">
                      <div className="benifitbox d-flex justify-content-between">
                        <div>
                          <h5>HealthCare</h5>
                          <p>Ensure the employee is covered by a healthcare option. This is either a monthly gross allowance or a localised healthcare plan depending on what is available.Simply press add to get started and provide healthcare.</p>
                        </div>
                        <div style={{marginTop:50}}>
                        <button type="submit">Add</button>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-12 mb-20">
                      <div className="benifitbox d-flex justify-content-between">
                        <div>
                          <h5>Recruitment assistance</h5>
                          <p>We can help you hire the best resource matching your requirements and skill sets at 8.33% of the Annual Starting CTC</p>
                        </div>
                        <div style={{marginTop:50}}>
                        <button type="submit">Add</button>
                        </div>
                      </div>
                    </div>

                  </div>
                </form>
                <div className="col-lg-12 text-center">
                      <div className="form-inner">
                        <button className="calculatebtn primary-btn3" type="submit" onClick={() => setShowEdit(true)}>
                          Calculate Costs
                        </button>
                      </div>
                    </div>
              </div>
            </div>
          </div>
        </div>

      {showEdit &&
        <div
          className="col-sm-12 wow animate fadeInUp" style={{marginTop:50}}
          data-wow-delay="300ms"
          data-wow-duration="1500ms"
        >
          <h5>Employees Take home Pay for India</h5>
          <div>
            <div className="d-flex justify-content-between group-btn mt-2">
              <div class="btn-group btn-small" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked />
                <label class="btn btn-outline-primary" for="btnradio1" >MONTHLY</label>

                <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
                <label class="btn btn-outline-primary" for="btnradio2">ANNUAL</label>
              </div>
              {/* <div>
                <button type="button" class="btn btn-outline-primary"> <i className="bi bi-download" /><span> </span>Download</button>
              </div> */}
            </div>

            <div className="d-flex justify-content-between mt-3">
              <h6>Gross Monthly Pay</h6>
              <h6>INR 1,00,000.00</h6>
            </div>
            <div className="d-flex justify-content-between">
              <p>Employee State Insurance</p>
              <p>INR 0.00</p>
            </div>
            <div className="d-flex justify-content-between">
              <p>Professional Tax</p>
              <p>INR 2,400.00</p>
            </div>
            <div className="d-flex justify-content-between">
              <p>Provident Tax</p>
              <p>INR 46,500.00</p>
            </div>
            <div className="d-flex justify-content-between">
              <p>Income Tax (New Regime)</p>
              <p>INR 52,100.00</p>
            </div>
          <br/>
            <div className="d-flex justify-content-between">
              <h6>Net Annual Salary</h6>
              <p>INR 1,00,000.00</p>
            </div>

            <hr />
            <h5>Other Resources</h5>
            <div className="d-flex justify-content-between">
              <p>On Boarding timeline</p>
              <p>3 DAYS</p>
            </div>

            <div className="d-flex justify-content-between">
              <p>Hiring Guide</p>
              <p>View More</p>
            </div>

          </div>
          <div className="benifitbox d-flex justify-content-between mt-20">
            <div>
              <h5>Calculation are estimate</h5>
              <p>Calculations are estimated figures based on a country’s local taxation and compliance costs. the net payment and demployer contribution may change based on an employee’s personal data</p>
            </div>
           
          </div>
          <div className='text-center mt-20'>
                <button type="button" className="primary-btn3" style={{border:'none'}}> <i className="bi bi-download" /><span> </span>Download</button>
              </div>
        </div>
      }
       
      </div>
    </div>
  </div>;
}