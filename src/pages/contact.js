import Breadcrumb from "@/components/common/Breadcrumb";
import Layout from "@/components/layout/Layout";
import Pricing from "@/components/pricingplan/Pricing4";
import React, { useEffect, useState } from "react";
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

  const handleSubmit = async(e) => {
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
    if(respData.status==200){
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
    <Layout>
      <Breadcrumb
        pageList="Contact"
        title="For Any Querry"
        pageName="CONTACT"
      />
      <div className="contact-page-wrap sec-mar">
        <div className="container">
          <div className="row g-lg-4 gy-5">
            <div className="col-lg-6">
              <div className="contact-content">
                <span>CONTACT WITH US</span>
                <h2>LET’S WORK TOGETHER?</h2>
                <p>
                  I have worls-class, flexible support via live chat, email and
                  hone. I guarantee that you’ll be able to have any issue
                  resolved within 24 hours.
                </p>
                <div className="informations">
                  <div className="single-info">
                    <div className="icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                    <div className="info">
                      <p>
                      5/4, Valluvar Salai,5/4, Valluvar Salai,<br/>
                      Ramapuram, Chennai - 600 089

                      </p>
                    </div>
                  </div>
                  <div className="single-info">
                    <div className="icon">
                      <i className="fas fa-phone-alt" />
                    </div>
                    <div className="info">
                      <a href="tel:+919884882693">+91 98848 82693</a>
                    </div>
                  </div>
                  <div className="single-info">
                    <div className="icon">
                      <i className="far fa-envelope" />
                    </div>
                    <div className="info">
                      <a href="mailto: hr@vinproglobal.com">hr@vinproglobal.com</a>
                    </div>
                  </div>
                </div>
                <div className="follow-area">
                  <h5 className="blog-widget-title">Follow Us</h5>
                  <p className="para">Follow us on Social Network</p>
                  <div className="blog-widget-body">
                    <ul className="follow-list d-flex flex-row align-items-start gap-4">
                      <li>
                        <a href="https://www.facebook.com/">
                          <i className="bx bxl-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.twitter.com/">
                          <i className="bx bxl-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/">
                          <i className="bx bxl-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.pinterest.com/">
                          <i className="bx bxl-pinterest" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-form-wrap">
                <div className="form-tltle">
                  <h5>For Any Query</h5>
                </div>
                <div className="contact-form">
                  <form>
                    <div className="row">
                      <div className="col-md-6 mb-20">
                        <div className="form-inner">
                          <label>first name</label>
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
                          <label>Last name</label>
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
                          <label>Company/Organization</label>
                          <input type="text" placeholder="Company/Organization"
                          id="company"
                          value={formValue.company}
                          onChange={handleChange}
                          />
                          {error.company && (
                            <span className="text-danger">{error.company}</span>
                          )}
                        </div>
                      </div>
                      <div className="col-lg-12 mb-20">
                        <div className="form-inner">
                          <label>Email</label>
                          <input type="email" placeholder="Email"
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
                          <label>Phone</label>
                          <input type="email" placeholder="Phone"
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
                          <label>Message</label>
                          <textarea defaultValue={""} placeholder="Additional Message" 
                          id="message"
                          value={formValue.message}
                          onChange={handleChange}
                          />
                          {error.message && (
                            <span className="text-danger">{error.message}</span>
                          )}
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-inner">
                          <button className="primary-btn3" type="submit"
                           onClick={(e) => handleSubmit(e, "user")}
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
      <Pricing />
    </Layout>
  );
}

export default Contactpage;
