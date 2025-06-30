import Link from 'next/link'
import React, {useEffect, useState} from 'react'

const About4 = (props) => {
  const API_URL_IMAGE = process.env.NEXT_PUBLIC_API_URL_IMAGE;
  const { data } = props;
  const [section2, setSection2]=useState([null]);
  const [section3, setSection3]=useState(null);
  
  useEffect(() => {
    if(data.length > 0 )
        data.map((item, i) => {
          if(item?.section_title == 'HomeSection2'){setSection2(item)}
           if(item?.section_title == 'HomeSection3'){setSection3(item)}
        }) 
  }, [data]);

  const Section2 = () => <div className="row g-lg-4 gy-5">
    <div className="col-lg-6 wow animate fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
      <div className="about-left-img-wrap">
        <div className="big-img magnetic-item">
          <img className="img-fluid" src="assets/img/home-4/about-image-01.png" alt="" />
        </div>
        <div className="sm-img  magnetic-item">
          <img className="img-fluid" src="assets/img/home-4/about-image-02.png" alt="" />
        </div>
      </div>
    </div>
    <div className="col-lg-6 wow animate fadeInRight" data-wow-delay="500ms" data-wow-duration="1500ms">
      <div className="banner-right-content">

        <div className="section-title-4 home">
          <span>VINPRO CONNECT</span>
          <h2>Empowering Success Through Strategic <span>Consulting</span> Since 2014</h2>
          <p>Our Consulting Services Are Customized To Suit The Unique Needs And Goals Of Each Client, Ensuring Precise Alignment With Their Business Objectives.</p>
          <p>We Believe In Fostering Strong Partnerships With Our Clients, Working Closely With Them To Understand Their Challenges, Identify Opportunities.</p>
          <div className="about-btn">
            <Link legacyBehavior href="/about">
              <a className="primary-btn5">
                <svg width={60} height={60} viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.51038 32.6729C-0.990382 34.1837 -0.232333 37.9945 2.65612 38.4335C4.97848 38.7866 6.09439 41.4804 4.70164 43.3722C2.96938 45.7248 5.12803 48.9555 7.9646 48.2555C10.245 47.6925 12.3074 49.7548 11.7445 52.0354C11.0445 54.8721 14.2752 57.0306 16.6278 55.2984C18.5196 53.9057 21.2139 55.0216 21.5665 57.3439C22.0054 60.2322 25.8161 60.9904 27.3271 58.4896C28.5419 56.479 31.4581 56.479 32.6729 58.4896C34.1837 60.9904 37.9945 60.2323 38.4335 57.3439C38.7866 55.0215 41.4804 53.9056 43.3722 55.2984C45.7248 57.0306 48.9555 54.872 48.2555 52.0354C47.6925 49.755 49.7548 47.6925 52.0354 48.2555C54.872 48.9555 57.0306 45.7248 55.2984 43.3722C53.9057 41.4804 55.0216 38.7861 57.3439 38.4335C60.2322 37.9946 60.9904 34.1839 58.4896 32.6729C56.479 31.4581 56.479 28.5419 58.4896 27.3271C60.9904 25.8163 60.2323 22.0055 57.3439 21.5665C55.0215 21.2134 53.9056 18.5196 55.2984 16.6278C57.0306 14.2752 54.872 11.0445 52.0354 11.7445C49.7549 12.3075 47.6925 10.2452 48.2555 7.9646C48.9555 5.12795 45.7248 2.96938 43.3722 4.70164C41.4804 6.09426 38.7861 4.9784 38.4335 2.65612C37.9946 -0.23224 34.1839 -0.990422 32.6729 1.51038C31.4581 3.52095 28.5419 3.52095 27.3271 1.51038C25.8163 -0.990382 22.0055 -0.232333 21.5665 2.65612C21.2134 4.97848 18.5196 6.09439 16.6278 4.70164C14.2752 2.96938 11.0445 5.12803 11.7445 7.9646C12.3075 10.245 10.2452 12.3074 7.9646 11.7445C5.12795 11.0445 2.96938 14.2752 4.70164 16.6278C6.09426 18.5196 4.9784 21.2139 2.65612 21.5665C-0.232239 22.0054 -0.990423 25.8161 1.51038 27.3271C3.52095 28.5419 3.52095 31.4581 1.51038 32.6729Z" />
                </svg>
                <div className="content">
                  About us More
                  <span>
                    <svg width={12} height={12} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 1H12M12 1V13M12 1L0.5 12" />
                    </svg>
                  </span>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>;

  const Section3 = () => <div className="row g-lg-4 gy-5">
    <div className="col-lg-6 wow animate fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
      <div className="about-left-content">
        <div className="section-title-4 home">
          <h2>The Global <span>HR Platform </span> You Deserve!.</h2>
          <p>Complete Your To-Do List Without Opening A Second Tab. The Only All-In-One Platform You Need To Manage Your Entire Team From Marseille To Manilla. Enjoy The Ultimate Flexibility By Managing All Your Global HR With Remote. EOR Employees In Estonia? Payroll In Peru? Contractors In Costa Rica? It’s All In One Place, So You Can Spend Less ¯Time Tracking Down Documents And More Time Giving Your Global Team The Experience They Deserve.</p>
        </div>
        <div className="about-feature">
          <ul>
            <li><img src="assets/img/home-4/about-feature-vec.svg" alt="" />Creative Strategy</li>
            <li><img src="assets/img/home-4/about-feature-vec.svg" alt="" />Unique Production</li>
            <li><img src="assets/img/home-4/about-feature-vec.svg" alt="" />Rebranding Design</li>
            <li><img src="assets/img/home-4/about-feature-vec.svg" alt="" />Corporate Identity</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="col-lg-6 wow animate fadeInRight" data-wow-delay="500ms" data-wow-duration="1500ms">
      <div className="about-right-img d-flex justify-content-center  magnetic-item">
        <img className="img-fluid" src="assets/img/home-4/about-image-03.png" alt="" />
      </div>
    </div>
  </div>

  return (
    <div className="home4-about-section sec-mar" id="home4-about-section">
      <div className="container">
        {section2 ?
              <div className="row g-lg-4 gy-5">
                <div className="col-lg-6 wow animate fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
                  <div className="about-left-img-wrap">
                    <div className="big-img magnetic-item">
                      <img className="img-fluid" src="assets/img/home-4/about-image-01.png" alt="" />
                    </div>
                    <div className="sm-img  magnetic-item">
                      {section2?.image1 ? <img
                        className="img-fluid"
                        src={API_URL_IMAGE + section2?.image1}
                        alt="section1Image"
                      /> :
                        <img className="img-fluid" src="assets/img/home-4/about-image-02.png" alt="" />
                      }
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 wow animate fadeInRight" data-wow-delay="500ms" data-wow-duration="1500ms">
                  <div className="banner-right-content">

                    <div className="section-title-4 home">
                      <span>{section2?.subtitle}</span>
                      <h2>{section2?.title}</h2>
                      <p dangerouslySetInnerHTML={{ __html: (section2?.description) }} />
                      <div className="about-btn">
                        <Link legacyBehavior href="/about">
                          <a className="primary-btn5">
                            <svg width={60} height={60} viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1.51038 32.6729C-0.990382 34.1837 -0.232333 37.9945 2.65612 38.4335C4.97848 38.7866 6.09439 41.4804 4.70164 43.3722C2.96938 45.7248 5.12803 48.9555 7.9646 48.2555C10.245 47.6925 12.3074 49.7548 11.7445 52.0354C11.0445 54.8721 14.2752 57.0306 16.6278 55.2984C18.5196 53.9057 21.2139 55.0216 21.5665 57.3439C22.0054 60.2322 25.8161 60.9904 27.3271 58.4896C28.5419 56.479 31.4581 56.479 32.6729 58.4896C34.1837 60.9904 37.9945 60.2323 38.4335 57.3439C38.7866 55.0215 41.4804 53.9056 43.3722 55.2984C45.7248 57.0306 48.9555 54.872 48.2555 52.0354C47.6925 49.755 49.7548 47.6925 52.0354 48.2555C54.872 48.9555 57.0306 45.7248 55.2984 43.3722C53.9057 41.4804 55.0216 38.7861 57.3439 38.4335C60.2322 37.9946 60.9904 34.1839 58.4896 32.6729C56.479 31.4581 56.479 28.5419 58.4896 27.3271C60.9904 25.8163 60.2323 22.0055 57.3439 21.5665C55.0215 21.2134 53.9056 18.5196 55.2984 16.6278C57.0306 14.2752 54.872 11.0445 52.0354 11.7445C49.7549 12.3075 47.6925 10.2452 48.2555 7.9646C48.9555 5.12795 45.7248 2.96938 43.3722 4.70164C41.4804 6.09426 38.7861 4.9784 38.4335 2.65612C37.9946 -0.23224 34.1839 -0.990422 32.6729 1.51038C31.4581 3.52095 28.5419 3.52095 27.3271 1.51038C25.8163 -0.990382 22.0055 -0.232333 21.5665 2.65612C21.2134 4.97848 18.5196 6.09439 16.6278 4.70164C14.2752 2.96938 11.0445 5.12803 11.7445 7.9646C12.3075 10.245 10.2452 12.3074 7.9646 11.7445C5.12795 11.0445 2.96938 14.2752 4.70164 16.6278C6.09426 18.5196 4.9784 21.2139 2.65612 21.5665C-0.232239 22.0054 -0.990423 25.8161 1.51038 27.3271C3.52095 28.5419 3.52095 31.4581 1.51038 32.6729Z" />
                            </svg>
                            <div className="content">
                              About us More
                              <span>
                                <svg width={12} height={12} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M0 1H12M12 1V13M12 1L0.5 12" />
                                </svg>
                              </span>
                            </div>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          :
          Section2()
        }
        <div className="about-bottom">
          {section3 ?
            <div className="row g-lg-4 gy-5">
                  <div className="col-lg-6 wow animate fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
                    <div className="about-left-content">
                      <div className="section-title-4 home">
                        <h2>{section3?.title}</h2>
                        <div dangerouslySetInnerHTML={{ __html: (section3?.description) }} />
                      </div>
                       <div className="about-feature">
                        <ul>
                          {section3?.list_details &&
                            JSON.parse(section3?.list_details).map((item,i) =><li><img src="assets/img/home-4/about-feature-vec.svg" alt="" />{item}</li>)}
                         </ul>
                      </div> 
                    </div>
                  </div>
                  <div className="col-lg-6 wow animate fadeInRight" data-wow-delay="500ms" data-wow-duration="1500ms">
                    <div className="about-right-img d-flex justify-content-center  magnetic-item">
                       {section2?.image1 ? <img
                        className="img-fluid"
                        src={API_URL_IMAGE + section3?.image1}
                        alt="section1Image"
                      /> :
                      <img className="img-fluid" src="assets/img/home-4/about-image-03.png" alt="" />}
                    </div>
                  </div>
            </div>
            :
            Section3()
          }
        </div>

      </div>
    </div>
  )
}

export default About4
