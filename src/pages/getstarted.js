
import { useRouter } from "next/router";
import Link from "next/link";

import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";
const intialFormValue = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  message: "",
  company: "",
};
const API_URL = "http://localhost:8055/items/"
function Contactpage() {
  const [state, dispatch] = useReducer();

  const [formValue, setFormValue] = useState(intialFormValue);
  const handleChange = (e) => {
    // alert("hii")
    e.preventDefault();
    let { id, value } = e.target;
    let formData = { ...formValue, ...{ [id]: value } };
    setError({});
    setFormValue(formData);
  };

  const [error, setError] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(validate(formValue));

    //demo_users
    let encryptObj = {
      first_name: formValue.first_name,
      last_name: formValue.last_name,
      company_mail: formValue.email,
      phone_number: formValue.phone,
      help_description: formValue.message,
      company_name: formValue.company,
    };
    //alert(API_URL+'demo_users')
    let respData = await axios({
      method: "post",
      url: `${API_URL}demo_users`,
      data: encryptObj,
    });
    if (respData.status == 200) {
      setFormValue(intialFormValue)
      alert("Submitted Successfully")
    }

  };

  useEffect(() => {
    console.log(error);
  }, [error]);

  const validate = (values) => {
    const errors = {};
    if (!values.first_name) {
      errors.first_name = "First name is required";
    }
    if (!values.last_name) {
      errors.last_name = "Last name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    }
    if (!values.phone) {
      errors.phone = "Phone is required";
    }
    if (!values.message) {
      errors.message = "Message is required";
    }
    if (!values.company) {
      errors.company = "Company is required";
    }
    return errors;
  };

  return (
    <div>
      <header
        className={"header-area2"}
      >
        <div className="header-logo">
          <Link legacyBehavior href="/">
            <a>
              <img
                alt="image"
                className="img-fluid"
                src="assets/img/logo.svg"
              />
            </a>
          </Link>
        </div>
      </header>
      <div className="contact-page-wrap sec-mar">
        <div className="container" style={{ borderRadius: 20, padding: 40, background: 'linear-gradient(180deg, rgba(6, 216, 137, 0.14) 0%, rgba(6, 216, 137, 0.28) 100%)' }}>
          <div className="row g-lg-4 gy-5">
            <div className="col-lg-6">
              <div className="contact-content">
                <div className="blog-img">
                  <img
                    className="img-fluid"
                    src="assets/img/home-3/home3-blog-01.png"
                    alt=""
                  />
                </div>
                <br />
                <h2>The HR Management is Always Ahead with Us</h2>
                <ul>
                  <li>Instantly onboard new hires anywhere in the world</li>
                  <li>Run global payroll securely and with a single click</li>
                  <li>Stay 100% compliant with local employment laws</li>
                  <li>Manage benefits, work permits, timesheets, and more</li>
                </ul>

              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-form-wrap" style={{ background: '#f1f1f1' }}>
               
                <div className="contact-form">
                <h3 className="text-center">Schedule a demo</h3><br/>
                  <form>
                    <div className="row">
                      <div className="col-md-6 mb-20">
                        <div className="form-inner">
                          <input type="text" placeholder="First Name"
                            id="first_name"
                            value={formValue.first_name}
                            onChange={handleChange}
                          />
                          {error.first_name && (
                            <span className="text-danger">{error.first_name}</span>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6 mb-20">
                        <div className="form-inner">
                          <input type="text" placeholder="Last Name"
                            id="last_name"
                            value={formValue.last_name}
                            onChange={handleChange}
                          />
                          {error.last_name && (
                            <span className="text-danger">{error.last_name}</span>
                          )}
                        </div>
                      </div>

                      <div className="col-lg-12 mb-20">
                        <div className="form-inner">
                          <input type="email" placeholder="Company Email"
                            id="email"
                            value={formValue.email}
                            onChange={handleChange}
                          />
                          {error.email && (
                            <span className="text-danger">{error.email}</span>
                          )}
                        </div>
                      </div>
                      <div className="col-lg-12 mb-20">
                        <div className="form-inner">
                          <input type="email" placeholder="Phone Number"
                            id="phone"
                            value={formValue.phone}
                            onChange={handleChange}
                          />
                          {error.phone && (
                            <span className="text-danger">{error.phone}</span>
                          )}
                        </div>
                      </div>
                      <div className="col-lg-12 mb-20">
                        <div className="form-inner">
                          <select class="form-select" aria-label="Default select example">
                            <option selected>Select company size</option>
                            <option value="1">1 to 10</option>
                            <option value="2">11 to 50</option>
                            <option value="3">51 to 100</option>
                          </select>
                          {error.message && (
                            <span className="text-danger">{error.message}</span>
                          )}
                        </div>
                      </div>

                      <div className="col-lg-12 mb-20">
                        <div className="form-inner">
                          <select id="how_can_we_help_you_new-input" name="how_can_we_help_you_new" >
                            <option value="" selected="true" disabled="true">How can we help you?</option>
                            <option value="Hire employees with Skuad as the legal employer (EoR)">Hire employees with Skuad as the legal employer (EoR)</option>
                            <option value="Recruitment of employees/contractors (Recruitment + EoR)">Recruitment of employees/contractors (Recruitment + EoR)</option>
                            <option value="Hire contractors with Skuad as the contracting entity (AoR)">Hire contractors with Skuad as the contracting entity (AoR)</option>
                            <option value="Global payment solution for managing own contractors">Global payment solution for managing own contractors</option>
                            <option value="Seamlessly manage your freelancer network (FMS)">Seamlessly manage your freelancer network (FMS)</option>
                            <option value="Other">Other</option>
                          </select>
                          {error.message && (
                            <span className="text-danger">{error.message}</span>
                          )}
                        </div>
                      </div>

                      <div className="col-lg-12 mb-20">
                        <div className="form-inner">
                          <select class="form-select" aria-label="Default select example">
                            <option selected>Which countries do you want to hire in?</option>
                            <option value="1">India</option>
                            <option value="2">Dubai</option>
                            <option value="3">Behrain</option>
                          </select>
                          {error.message && (
                            <span className="text-danger">{error.message}</span>
                          )}
                        </div>
                      </div>
                      <p style={{fontSize:12}}>We respect your data. By submitting the form, you agree that we will contact you about our products and services, in accordance with our </p>

                      <div className="col-lg-12 text-center mt-3">
                        <div className="form-inner">
                          <button className="primary-btn3 " type="submit"
                          //onClick={(e) => handleSubmit(e, "user")}
                          >
                            Submit
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
    </div>
  );
}

export default Contactpage;
