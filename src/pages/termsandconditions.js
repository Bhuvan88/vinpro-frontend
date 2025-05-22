import React, { useState, useEffect } from 'react';
import Breadcrumb from "@/components/common/Breadcrumb";
import Layout from "@/components/layout/Layout";
import useBodyClass from "@/hooks/useBodyClass";
import Head from "next/head";

export default function PricingPage() {
  useBodyClass("home-dark2");
  const content = `<b>Terms and Conditions</b>`;
  return (<Layout>
      <Breadcrumb
        // pageList="Employer of Record"
        title="Terms and Conditions"
      // pageName="Employer of Record"
      />
      <div className="case-study-details" style={{ backgroundColor: '#fff', padding: '50px 0px' }}>
        <div className="container">
          <div className="row g-4 justify-content-center">
            <div className="case-content">
              <h3 className='mt-5'>1. Introduction</h3>
              <p>These Terms and Conditions ("Terms") govern your use of [Your HR & Employment Platform Name] ("Platform," "We," "Us," or "Our"), a global HR and employment management website providing services such as job postings, recruitment, payroll management, compliance assistance, and related HR solutions.</p>
              <p>By accessing or using the Platform, you ("User," "Employer," "Employee," or "Candidate") agree to comply with these Terms. If you do not agree, you must not use the Platform.</p>
            
              <h3 className='mt-5'>2. Definitions</h3>
              <p>Employer: A company or individual posting jobs or using HR services.</p>
              <p>Candidate/Employee: An individual seeking employment or using career services.</p>
              <p>Services: Job postings, recruitment tools, payroll processing, compliance management, and other HR-related services.</p>
              <p>User: Any person or entity using the Platform.</p>

              <h3 className='mt-5'>3.Eligibility & Registration</h3>
              <p>Users must be at least 18 years old (or the legal age in their jurisdiction).</p>
              <p>Employers must provide accurate business details.</p>
              <p>Candidates must provide truthful information in profiles and resumes.</p>
              <p>Users are responsible for maintaining the confidentiality of their account information.</p>

              <h3 className='mt-5'>4. Services Offered</h3>
              <p>The Platform may provide:<br/>
                &#10004; Payroll &amp; benefits management<br/>
                &#10004; Compliance &amp; legal HR support<br/>
                &#10004; Employee onboarding/offboarding<br/>
                &#10004; Other HR-related tools<br/>
              </p>

              <h3 className='mt-5'>5.⁠ ⁠User Obligations</h3>  
              <p>Employers:<br/>
                Must provide legitimate job opportunities (no fraudulent/scam postings).<br/>
                Must comply with anti-discrimination laws (e.g., equal opportunity employment).<br/>
                Must not misuse candidate data (GDPR/CCPA compliance required where applicable).
              </p>
              <p>Employers:<br/>
                Must provide accurate and non-misleading information.<br/>
                Must not apply fraudulently (fake identities, false credentials).<br/>
                Must respect employer confidentiality if accessing sensitive data.
              </p>

              <h3 className='mt-5'>6. Payments & Refunds</h3>
              <p>Employers may pay for job postings, recruitment tools, or HR services (subscription or one-time fees).</p>
              <p>Refund policies (if any) will be specified at checkout.</p>
              <p>Chargebacks/disputes may result in account suspension.</p>

              <h3 className='mt-5'>7. Data Privacy & Compliance</h3>
              <p>We adhere to GDPR (EU), CCPA (California), and other global data protection laws.<br/>
                Users consent to our Privacy Policy regarding data collection, storage, and processing.<br/>
                Employers must obtain consent before processing candidate data.
              </p>

              <h3 className='mt-5'>8. Intellectual Property</h3>
              <p>The Platform’s content (logos, software, trademarks) is owned by Vinpro. 
                Users may not copy, modify, or redistribute content without permission. <br/>
                Candidates retain rights to their resumes but grant the Platform a license to distribute to employers.</p>

              <h3 className='mt-5'>9. Termination & Suspension</h3>
              <p>We may suspend or terminate accounts for:<br/>
              &#10060; Fraudulent activity<br/>
              &#10060; Violation of these Terms<br/>
              &#10060; Illegal or unethical behavior</p>

              <h3 className='mt-5'>10. Termination & Suspension</h3>
              <p>The Platform is a service provider and does not guarantee employment</p>
              <p>We are not liable for: <br/>
                Job outcomes or employer-candidate disputes.<br/>
                Errors in payroll/compliance services (users should verify independently).<br/>
                Third-party integrations or external websites
              </p>

              <h3 className='mt-5'>11.⁠ ⁠Governing Law & Dispute Resolution</h3>
              <p>These Terms are governed by the laws of TamilNadu.<br/>
              Disputes will first attempt resolution via negotiation/mediation.<br/>
              If unresolved, disputes may proceed to binding arbitration/court in Chennai</p>

               <h3 className='mt-5'>12.⁠ ⁠Changes to Terms</h3>
               <p>We may update these Terms periodically. Users will be notified of changes, and continued use constitutes acceptance.</p>
            
              <h3 className='mt-5'>13.⁠ ⁠Contact Information</h3>
              <p>For questions, contact:<br/>
                <b>Email</b>: Hr@vinproglobal.com<br/>
               <b>Phone</b>: +91 9884882693<br/>
                <b>Address</b>: 5/4, Valluvar Salai, Ramapuram, Chennai - 600 089
                </p>
              <h3 className='mt-5'>Acceptance of Terms</h3>
              <p>By using Vinpro, you acknowledge that you have read, understood, and agreed to these Terms and Conditions.</p>
            </div>
          </div>
        </div>  
      </div>

    </Layout>
  );
}
