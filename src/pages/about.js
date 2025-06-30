import React, { useState, useEffect } from 'react';
import Home3Team from "../components/Team/Home3Team";
import About3 from "../components/about/About3";
import Choose6 from "../components/choose/Choose6";
import Breadcrumb from "../components/common/Breadcrumb";
import Home3Contact from "../components/contact/Home3Contact";
import Feature4 from "../components/features/Feature4";
import Layout from "../components/layout/Layout";
import Partnar4 from "../components/partner/Partnar4";
import axios from "axios";

function AboutPage() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL; //"http://localhost:8055/";
  const API_URL_IMAGE = process.env.NEXT_PUBLIC_API_URL_IMAGE; //"http://localhost:8055/uploads/";
  const [sections, setSections] = useState(null);
  const [bannerSection, setBannerSection] = useState(null);
  const [Section1, setSection1] = useState(null);
  const [Section2, setSection2] = useState(null);
    const [Section3, setSection3] = useState(null);
    const [section4, setSection4] = useState(null);
    const [section5, setSection5] = useState(null);

  useEffect(() => {
    getWebContent();
  }, []);

   useEffect(() => {
    if(sections && sections.length > 0) {
      //console.log('sections >>', sections);

      for(var i = 0; i < 6; i++) 
      {
        var mysections = sections.filter(section => section.section_title === `AboutSection${i + 1}`);
        if(mysections) {
          if(i === 0) {
            setBannerSection(mysections[0]);
          } else if(i === 1) {
            setSection1(mysections[0]);  
          } else if(i === 2) {
            setSection2(mysections[0]);
          } else if(i === 3) {
            setSection3(mysections[0]);
          } else if(i === 4) {
            setSection4(mysections[0]);
          }else if(i === 5) {
            setSection5(mysections[0]);
          }
        }
      }
        /*
      const bannerSection = sections.find(section => section.section_title === 'AboutSection1');
      if (bannerSection) {
        setBannerSection(bannerSection);
      }
      const section_1 = sections.find(section => section.section_title === 'AboutSection2');
      if (section_1) {
        setSection1(section_1);
      }

       const section_2 = sections.find(section => section.section_title === 'AboutSection3');
      if (section_2) {
        setSection2(section_2);
      }

      const section_3 = sections.find(section => section.section_title === 'AboutSection4');
      if (section_3) {
        setSection3(section_3);
      }
      const section_4 = sections.find(section => section.section_title === 'AboutSection4');
      if (section_4) {
        setSection3(section_4);
      }
      */
    }
  }, [sections]);

  const getWebContent = async () => {
    try {
      let contentParams = API_URL + 'items/webcontent';

      let respData = await axios.get(contentParams);
      if (respData.status === 200 && respData.data.data.length > 0) {
        //console.log('contetnrespData >>', respData);
        setSections(respData.data.data);
      }
    } catch (error) {
      console.error("Error ", error);
    }
  }

  return (
    <Layout>
      <Breadcrumb
        // pageList="About"
        title={bannerSection ? bannerSection?.title :"Get To Know About Vinpro"}
        pageName="ABOUT"
        image1={bannerSection && bannerSection?.image1 ? API_URL_IMAGE + bannerSection?.image1 : null}
        image2={bannerSection && bannerSection?.image2 ? API_URL_IMAGE + bannerSection?.image2 : null}
      />
      <About3 data1={Section1} data2={Section2} />
      <Choose6 data={Section3} records={section4} achived={section5}/>
      <Feature4 />
      <div className="home4-trusted-client-area sec-mar">
        <Partnar4 />
      </div>
      <Home3Team />
      <Home3Contact />
      {/* 
      <Testimonial3 />
      <Home3Blog /> */}
    </Layout>
  );
}

export default AboutPage;
