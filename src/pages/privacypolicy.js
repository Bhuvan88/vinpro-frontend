import React, { useState, useEffect } from 'react';
import Footer3 from "@/components/footer/Footer3";
import Header from "@/components/header/Header";
import Pricing from "@/components/pricingplan/Pricing4";
import useBodyClass from "@/hooks/useBodyClass";
import Head from "next/head";
import Breadcrumb from "@/components/common/Breadcrumb";
import Layout from "@/components/layout/Layout";
export default function PricingPage() {
  useBodyClass("home-dark2");

  return (
    <Layout>
      <Breadcrumb
        // pageList="Employer of Record"
        title="Privacy Policy"
      // pageName="Employer of Record"
      />
      <div className="case-study-details" style={{ backgroundColor: '#fff', padding: '50px 0px' }}>
        <div className="container">
          <div className="row g-4 justify-content-center">
            <div className="case-content">
              <h3 className='text-center'>Privacy Policy</h3>
              <p>It is Vinpro’s policy to respect your privacy regarding any information we may collect while operating our website. This Privacy Policy applies to www.vinproglobal.com. We respect your privacy and are committed to protecting personally identifiable information you may provide us through the Website.</p>
              <p>We have adopted this privacy policy (“Privacy Policy”) to explain what information may be collected on our Website, how we use this information, and under what circumstances we may disclose the information to third parties. This Privacy Policy applies only to information we collect through the Website and does not apply to our collection of information from other sources.</p>
              <p>This Privacy Policy, together with the Terms and conditions posted on our Website, set forth the general rules and policies governing your use of our Website. Depending on your activities when visiting our Website, you may be required to agree to additional terms and conditions.</p>

              <h3 className='mt-5'>Website Visitors</h3>
              <p>Like most website operators, Vinpro collects non-personally-identifying information of the sort that web browsers and servers typically make available, such as the browser type, language preference, referring site, and the date and time of each visitor request. Vinpro’s purpose in collecting non-personally identifying information is to better understand how Vinpro’s visitors use its website. From time to time, Vinpro may release non-personally-identifying information in the aggregate, e.g., by publishing a report on trends in the usage of its website. </p>

              <h3 className='mt-5'>Links to external sites</h3>
              <p>Our Service may contain links to external sites that are not operated by us. If you click on a third party link, you will be directed to that third party’s site. We strongly advise you to review the Privacy Policy and terms and conditions of every site you visit. We have no control over, and assume no responsibility for the content, privacy policies or practices of any third party sites, products or services.</p>
              <p>www.vinproglobal.com uses the remarketing services to advertise on third party websites (including Google) to previous visitors to our site. It could mean that we advertise to previous visitors who haven’t completed a task on our site, for example using the contact form to make an enquiry. This could be in the form of an advertisement on the Google search results page, or a site in the Google Display Network. Third-party vendors, including Google, use cookies to serve ads based on someone’s past visits. Of course, any data collected will be used in accordance with our own privacy policy and Google’s privacy policy.</p>
              <p>You can set preferences for how Google advertises to you using the Google Ad Preferences page, and if you want to you can opt out of interest-based advertising entirely by cookie settings or permanently using a browser plugin.</p>

              <h3 className='mt-5'>Aggregated statistics</h3>
              <p>Vinpro may collect statistics about the behavior of visitors to its website. Vinpro may display this information publicly or provide it to others. However, Vinpro does not disclose your personally-identifying information.</p>

              <h3 className='mt-5'>Cookies</h3>
              <p>To enrich and perfect your online experience, Vinpro uses “Cookies”, similar technologies and services provided by others to display personalized content, appropriate advertising and store your preferences on your computer. A cookie is a string of information that a website stores on a visitor’s computer, and that the visitor’s browser provides to the website each time the visitor returns. Vinpro uses cookies to help Vinpro identify and track visitors, their usage of www.vinproglobal.com, and their website access preferences. Vinpro visitors who do not wish to have cookies placed on their computers should set their browsers to refuse cookies before using Vinpros websites, with the drawback that certain features of Vinpro’s websites may not function properly without the aid of cookies.</p>
              <p>By continuing to navigate our website without changing your cookie settings, you hereby acknowledge and agree to Vinpro’s use of cookies.</p>

              <h3 className='mt-5'>Privacy Policy Changes</h3>
              <p>Although most changes are likely to be minor, Vinpro may change its Privacy Policy from time to time, and in Vinpro’s sole discretion. Vinpro encourages visitors to frequently check this page for any changes to its Privacy Policy. Your continued use of this site after any change in this Privacy Policy will constitute your acceptance of such change.</p>
            </div>
          </div>
        </div>
      </div>

    </Layout>
  );
}
