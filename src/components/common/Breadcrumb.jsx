import Link from "next/link";
import React from "react";

function Breadcrumb({ title, pageName, pageList, image1, image2 }) {
    const API_URL_IMAGE = process.env.NEXT_PUBLIC_API_URL_IMAGE;
    
  return (
    <section className="breadcrumbs">
      <div className="breadcrumb-sm-images">
        <div className="inner-banner-1 magnetic-item">
          
          <img src={image1 ? image1 : "assets/img/inner-pages/inner-banner-1.jpg"} width={160} alt="image1" />
        </div>
        <div className="inner-banner-2 magnetic-item">
          <img src={image2 ? image2 : "assets/img/inner-pages/inner-banner-2.jpg"} width={250} alt="" />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="breadcrumb-wrapper">
              <div className="breadcrumb-cnt">
                {/* <span>{pageName}</span> */}
                <h1>"{title}"</h1>
                <div className="breadcrumb-list">
                  {/* <Link legacyBehavior href="/"><a>Home</a></Link> */}
                  <img
                    src="assets/img/inner-pages/breadcrumb-arrow.svg"
                    alt=""
                  />
                  {pageList}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Breadcrumb;
