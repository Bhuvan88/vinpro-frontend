import React, { use, useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import axios from "axios";
function Partnar4() 
{
  const [banners, setBanners] = useState(null);
  
  useEffect(() => {
    getBannerlist();
  }, []);

  const API_URL = process.env.NEXT_PUBLIC_API_URL; //"http://localhost:8055/";

  const getBannerlist = async() => {
      try {
        let respData = await axios.get(`${API_URL}items/banners`);
        
        if (respData.status === 200 && respData.data.data.length > 0) {
          setBanners(respData.data.data);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
  }
  
  return (
    <div>
      <p>We take care of more than 1.5k Trusted Allies</p>
      <div className="marque-wrap">
        <div className="marquee_text">
          <Marquee>

          {banners && banners.map((item,i) => { 
            return <div className="single-client">
            <img className="img-fluid" src={API_URL+'assets/'+item?.image} alt={item?.client_name} />
          </div>
          })}

          {/*
          <div className="single-client">
            <img className="img-fluid" src="assets/img/home-4/client-01.svg" alt="" />
          </div>
          <div className="single-client">
            <img className="img-fluid" src="assets/img/home-4/client-02.svg" alt="" />
          </div>
          <div className="single-client">
            <img className="img-fluid" src="assets/img/home-4/client-03.svg" alt="" />
          </div>
          <div className="single-client">
            <img className="img-fluid" src="assets/img/home-4/client-04.svg" alt="" />
          </div>
          <div className="single-client">
            <img className="img-fluid" src="assets/img/home-4/client-05.svg" alt="" />
          </div>
          <div className="single-client">
            <img className="img-fluid" src="assets/img/home-4/client-01.svg" alt="" />
          </div>
          <div className="single-client">
            <img className="img-fluid" src="assets/img/home-4/client-02.svg" alt="" />
          </div>
          <div className="single-client">
            <img className="img-fluid" src="assets/img/home-4/client-03.svg" alt="" />
          </div>
          <div className="single-client">
            <img className="img-fluid" src="assets/img/home-4/client-04.svg" alt="" />
          </div>
          <div className="single-client">
            <img className="img-fluid" src="assets/img/home-4/client-05.svg" alt="" />
          </div>
          <div className="single-client">
            <img className="img-fluid" src="assets/img/home-4/client-01.svg" alt="" />
          </div>
          <div className="single-client">
            <img className="img-fluid" src="assets/img/home-4/client-02.svg" alt="" />
          </div>
          <div className="single-client">
            <img className="img-fluid" src="assets/img/home-4/client-03.svg" alt="" />
          </div>
          <div className="single-client">
            <img className="img-fluid" src="assets/img/home-4/client-04.svg" alt="" />
          </div>
          <div className="single-client">
            <img className="img-fluid" src="assets/img/home-4/client-05.svg" alt="" />
          </div>
          */}
          
          </Marquee>
        </div>
      </div>
    </div>
  )
}

export default Partnar4
