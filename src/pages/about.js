import Home3Team from "../components/Team/Home3Team";
import About3 from "../components/about/About3";
import Choose6 from "../components/choose/Choose6";
import Breadcrumb from "../components/common/Breadcrumb";
import Home3Contact from "../components/contact/Home3Contact";
import Feature4 from "../components/features/Feature4";
import Layout from "../components/layout/Layout";
import Partnar4 from "../components/partner/Partnar4";

function AboutPage() {
  return (
    <Layout>
      <Breadcrumb
        // pageList="About"
        title="Get To Know About Vinpro"
        pageName="ABOUT"
      />
      <About3 />
      <Choose6 />
      <Feature4 />
      <Partnar4 />
    
      <Home3Team />
      <Home3Contact />

      {/* 
      <Testimonial3 />
      <Home3Blog /> */}
    </Layout>
  );
}

export default AboutPage;
