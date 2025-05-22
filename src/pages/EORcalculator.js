import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function CalculatorSection() {
  const [showEdit, setShowEdit] = useState(false);
  const [countries, setCountries] = useState(null);
  const [country, setCountry] = useState(null);
  const [countryName, setCountryName] = useState(null);

  const [currency, setCurrency] = useState(null);
  const [currencylist, setCurrencyList] = useState(null);
  const [ctc, setCTC] = useState(null);
  const [mode, setMode] = useState('yearly');
  const [ctcCalculation, setCtcCalculation] = useState(null);
  const [invoice, setInvoice] = useState(null);

  const API_URL = process.env.NEXT_PUBLIC_API_URL; //"http://localhost:8055/";

  useEffect(() => {
    getCountries();
  }, []);

    useEffect(() => {
      if (country) {
        countries.map((item, i) => {
          if (item.id == country) {
            //console.log('item.currencynew', item);
            let currenyArray=[]
            if(item.currencynew.length > 0){
              item.currencynew.map((item2, i) => {
                currenyArray.push({
                  name: item2.currency_id.name,
                  rate: item2.currency_id.rate
                })
              });
              
            }
            setCurrencyList(currenyArray);
          }
        });
      }
    }, [country]);

  useEffect(() => {
    if (ctc) {
      ctcCalcuation();
    }
  }, [mode, currency]);

  const getCountries = async () => {
    try {
      let countryParams = process.env.NEXT_PUBLIC_API_URL+'items/countries?fields[]=*&fields[]=currency.name&fields[]=currency.rate&fields[]=currencynew.currency_id.name&fields[]=currencynew.currency_id.rate';

      let respData = await axios.get(countryParams);
      if (respData.status === 200 && respData.data.data.length > 0) {
        setCountries(respData.data.data);
      }
    } catch (error) {
      console.error("Error ", error);
    }
  }

  const ctcCalcuation = async () => {
    try {
      if(ctc<=100){
        setCtcCalculation(null);
        setShowEdit(false);
        return;
      }
      let params = 'country=' + country + '&salary=' + ctc + '&mode=' + mode + '&currency=' + currency;
      let respData = await axios.get(`${API_URL}calculation/salaryCalc?${params}`);
      if (respData.status === 200)
      {
        setInvoice(API_URL+'invoice/invoicepdf?country=' + country + '&salary=' + ctc + '&mode=' + mode + '&currency=' + currency);
        setCtcCalculation(respData.data.data);
        setShowEdit(true);
        
      } else {
        console.log('tstt not ok')
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }


  return <div className="home3-solution-section sec-mar" style={{ marginTop: 60 }}>
    <div className="container">
      <h2>EOR Calculator</h2>
      <p style={{ marginBottom: 40 }}>Select the country you want to hire in, to explore and benchmark salaries for international roles</p>
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

                        <select className="form-select" onChange={(e) => setCountry(e.target.value)} id="country" aria-label="Select a country you want hire">
                          <option>Select a country you want hire</option>
                          {countries &&
                            countries.map((item, i) => <option value={item.id}>{item.name}</option>)}
                        </select>

                      </div>
                    </div>

                    {/*  <div className="col-md-12 mb-20">
                      <div className="form-inner">

                       <select className="form-select" id="country" aria-label="Select a country you want hire">
                          <option value="2">Tamil Nadu</option>
                          <option value="3">Kerala</option>
                          <option value="4">Hyderabad</option>
                          <option value="5">Mumbai</option>
                          <option value="6">Pune</option>
                        </select>
                       
                      </div>
                    </div>*/}
                    <div className="col-lg-6 mb-20">
                      <div className="form-inner">
                        <select onChange={(e) =>{setCurrency(e.target.value); setCTC(null)}} className="form-select" id="currency" aria-label="Currency">
                          <option >Currency</option>
                          {currencylist &&
                            currencylist.map((item, i) => <option value={item.name}>{item.name}</option>)}
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-20">
                      <div className="form-inner">
                        {ctc ? <input type="text" onChange={(e) => setCTC(e.target.value)} value={ctc} placeholder="Gross Annual Salary" /> : <input type="text" onChange={(e) => setCTC(e.target.value)} value="" placeholder="Gross Annual Salary" />}
                      </div>
                    </div>

                  {/*}
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
                        <div style={{ marginTop: 50 }}>
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
                        <div style={{ marginTop: 50 }}>
                          <button type="submit">Add</button>
                        </div>
                      </div>
                    </div>
                    */}

                  </div>
                </form>
                <div className="col-lg-12 text-center">
                  <div className="form-inner">

                    <div className="form-inner">
                      {currency && country && ctc ?
                        <button className="calculatebtn primary-btn3" type="button" onClick={() => ctcCalcuation()}>
                          Calculate Cost
                        </button> :
                        <button className="calculatebtn primary-btn1" type="button" disabled >Calculate Cost</button>
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {showEdit &&
          <div
            className="col-sm-12 wow animate fadeInUp" style={{ marginTop: 50 }}
            data-wow-delay="300ms"
            data-wow-duration="1500ms"
          >
            <h5>Employee cost in {countryName}</h5>
            <div>
              <div className="d-flex justify-content-between group-btn mt-2">
                <div class="btn-group btn-small" role="group" aria-label="Basic radio toggle button group">
                  <input type="radio" class="btn-check" onClick={(e) => setMode(e.target.value)} name="btnradio" id="btnradio1" value="monthly" autocomplete="off" checked={mode == "monthly" ? "checked" : ''} />
                  <label class="btn btn-outline-primary" for="btnradio1" >MONTHLY</label>

                  <input type="radio" class="btn-check" onClick={(e) => setMode(e.target.value)} name="btnradio" id="btnradio2" autocomplete="off" value="yearly" checked={mode == "yearly" ? "checked" : ''} />
                  <label class="btn btn-outline-primary" for="btnradio2">ANNUAL</label>
                </div>
                {/* <div>
                  <button type="button" class="btn btn-outline-primary"> <i className="bi bi-download" /><span> </span>Download</button>
                </div> 
              */}
              </div>

              {ctcCalculation && <div className="d-flex justify-content-between mt-3">
                <h6  >Gross Salary</h6>
                <h6 >{currency} {(ctcCalculation.salary).toLocaleString()}</h6>
              </div>
              }
              {ctcCalculation && <div className="d-flex justify-content-between">
                <h6  >Employeer Cost</h6>
                <h6 >{currency} {(ctcCalculation.contribution).toLocaleString()}</h6>
              </div>
              }

              {ctcCalculation && <div className="d-flex justify-content-between">
                <h6 >Vinpro Management Fee</h6>
                <h6 >{currency} {(ctcCalculation.managementfee).toLocaleString()}</h6>
              </div>
              }
              <hr />
              {ctcCalculation && <div className="d-flex justify-content-between">
                <h6  >Total Cost Of Employee</h6>
                <h6 >{currency} {(ctcCalculation.takeHome).toLocaleString()}</h6>
              </div>
              }


              {/* <div className="d-flex justify-content-between mt-3">
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
          */}

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
              <a href={invoice} target='_blank'>
                <button type="button" className="primary-btn3" style={{ border: 'none' }}> <i className="bi bi-download" /><span> </span>Download</button>
              </a>
            </div>
          </div>
        }

      </div>
    </div>
  </div>;
}