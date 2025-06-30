import React, { useMemo, useState, useEffect } from "react";
import SwiperCore, { Autoplay, EffectFade, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import ModalVideo from 'react-modal-video'
import Marquee from "react-fast-marquee";
import axios from "axios";

SwiperCore.use([Pagination, Autoplay, EffectFade]);

function Banner3() {
    const [isOpen, setOpen] = useState(false);
    const [bannerData, setBannerData] = useState([]);
    const API_URL = process.env.NEXT_PUBLIC_API_URL; //"http://localhost:8055/";
    const API_URL_IMAGE = process.env.NEXT_PUBLIC_API_URL_IMAGE; //"http://localhost:8055/uploads/";

    useEffect(() => {
        getBanners();
    }, []);

    const getBanners = async () => {
        try {
            let bannerParams = process.env.NEXT_PUBLIC_API_URL + 'items/home_banners';

            let respData = await axios.get(bannerParams);
            if (respData.status === 200 && respData.data.data.length > 0) {
                console.log('home banners', respData);
                setBannerData(respData.data.data);
            }
        } catch (error) {
            console.error("Error ", error);
        }
    }

    const slider = useMemo(() => {
        return {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 30,
            speed: 1500,
            effect: 'fade',
            autoplay: {
                delay: 4000
            },
            pagination: {
                el: ".swiper-pagination1",
                clickable: true,
            },
            fadeEffect: {
                crossFade: true,
            },
        }
    }, []);

    const banner_Image_1 = (data) => <SwiperSlide className="swiper-slide">
                        <div className="banner-area4 banner-wrapper">
                            <div className="banner-content">
                                <h1>{data?.title}</h1>
                                <p>{data?.description}</p>
                                <div className="banner-btn-group">
                                    <Link legacyBehavior href={data?.button1_link}>
                                        <a className="primary-btn3 primary-btn4">{data?.button1_text}<span>
                                        <svg width={13} height={13} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 1H12M12 1V13M12 1L0.5 12" />
                                        </svg>
                                    </span></a></Link>
                                    <Link legacyBehavior href={data?.button2_text}>
                                        <a className="primary-btn4">
                                            <span>
                                                <svg width={13} height={13} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0 1H12M12 1V13M12 1L0.5 12" />
                                                </svg>
                                            </span>
                                            {data?.button2_text}
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className="banner-img">
                                <div className="banner-big-img">
                                    {data?.image ? <img
                                        className="img-fluid magnetic-item"
                                        src={API_URL_IMAGE + data?.image}
                                        alt="banner-image1"
                                    /> : <img
                                        className="img-fluid magnetic-item"
                                        src="assets/img/home-4/home4-banner-image22.png"
                                        alt="banner-image1"
                                    />}
                                    <div className="banner-sm-img">
                                        <img
                                            className="img-fluid magnetic-item"
                                            src="assets/img/home-4/home4-banner-image11.png"
                                            alt=""
                                        />
                                        <div className="down-arrow">
                                            <img
                                                className="magnetic-item"
                                                src="assets/img/home-4/down-arow.png"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                           {/* <div className="banner-video-area">
                                <div className="video-area">
                                    <div data-fancybox="gallery" className="video-popup" onClick={() => setOpen(true)} style={{ cursor: "pointer" }} ratio='100' allowFullScreen={true}>
                                        <svg width={30} height={34} viewBox="0 0 30 34" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.3" d="M30 17.0012C30 16.0359 29.4735 15.1469 28.5906 14.6218L4.75661 0.46019C3.79257 -0.111681 2.61693 -0.153462 1.60777 0.351093C0.601772 0.855365 0 1.78612 0 2.83996V31.1609C0 32.2148 0.601723 33.1452 1.60931 33.6498C2.079 33.8837 2.5828 34 3.08665 34C3.66595 34 4.24144 33.8456 4.75628 33.5407L28.5903 19.3813C29.4734 18.8559 30 17.9669 30 17.0016V17.0012ZM27.7302 18.1537L3.89624 32.3131C3.42844 32.5905 2.85862 32.6093 2.36997 32.3668C1.88133 32.1225 1.58884 31.6719 1.58884 31.1607V2.83969C1.58884 2.32846 1.88133 1.8761 2.36997 1.63359C2.59834 1.52102 2.84346 1.46385 3.08699 1.46385C3.36811 1.46385 3.64734 1.53842 3.89658 1.68755L27.7306 15.8492C28.1646 16.1074 28.4135 16.5287 28.4135 17.0033C28.4131 17.4763 28.1642 17.8955 27.7302 18.1537Z" />
                                        </svg>
                                    </div>
                                    <img className="video-img" src="assets/img/home-3/home3-banner-video.png" alt="" />
                                </div>
                            </div> */}
                        </div>
                    </SwiperSlide>;

    const banner_Image_2 =(data) => <SwiperSlide className="swiper-slide">
                        <div className="banner-area6">
                            <div className="banner-wrapper staff">
                                <div className="banner-content">
                                    <h1>{data?.title}</h1>
                                    <p>{data?.description}</p>
                                    <div className="banner-btn-group">
                                        <Link legacyBehavior href={data?.button1_link}><a className="primary-btn3 primary-btn4">{data?.button1_text}<span>
                                            <svg width={13} height={13} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 1H12M12 1V13M12 1L0.5 12" />
                                            </svg>
                                        </span></a></Link>
                                        <Link legacyBehavior href={data?.button2_link}>
                                            <a className="primary-btn4">
                                                <span>
                                                    <svg width={13} height={13} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0 1H12M12 1V13M12 1L0.5 12" />
                                                    </svg>
                                                </span>
                                                {data?.button2_text}
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                               <div className="banner-img-wrap">
                                    <div className="banner-img">
                                        <img className="img-fluid" src={data?.image ? API_URL_IMAGE + data?.image : "assets/img/home-6/home6-banner-img.png"} alt="banner2" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>;

    const banner_Image_3 = (data) =>  <SwiperSlide className="swiper-slide">
                        <div className="banner-wrapper">
                            <div className="banner-content">
                                <h1>{data?.title}</h1>
                                <p>{data?.description}</p>
                                <div className="banner-btn-group">
                                    <Link legacyBehavior href={data?.button1_link}><a className="primary-btn3 primary-btn4">{data?.button1_text}<span><svg width={13} height={13} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 1H12M12 1V13M12 1L0.5 12" />
                                    </svg>
                                    </span></a></Link>
                                    <Link legacyBehavior href={data?.button2_link}>
                                        <a className="primary-btn4">
                                            <span>
                                                <svg width={13} height={13} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0 1H12M12 1V13M12 1L0.5 12" />
                                                </svg>
                                            </span>
                                           {data?.button2_text}
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className="banner-image magnetic-item">
                                <img className="img-fluid" src={data?.image ? API_URL_IMAGE + data?.image : "assets/img/home-3/home3-banner-img.png"} alt="Banner 3" />
                            </div>
                            <div className="banner-video-area">
                                <div className="video-area">
                                    <div data-fancybox="gallery" className="video-popup" onClick={() => setOpen(false)} style={{ cursor: "pointer" }}>
                                        <svg width={30} height={34} viewBox="0 0 30 34" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.3" d="M30 17.0012C30 16.0359 29.4735 15.1469 28.5906 14.6218L4.75661 0.46019C3.79257 -0.111681 2.61693 -0.153462 1.60777 0.351093C0.601772 0.855365 0 1.78612 0 2.83996V31.1609C0 32.2148 0.601723 33.1452 1.60931 33.6498C2.079 33.8837 2.5828 34 3.08665 34C3.66595 34 4.24144 33.8456 4.75628 33.5407L28.5903 19.3813C29.4734 18.8559 30 17.9669 30 17.0016V17.0012ZM27.7302 18.1537L3.89624 32.3131C3.42844 32.5905 2.85862 32.6093 2.36997 32.3668C1.88133 32.1225 1.58884 31.6719 1.58884 31.1607V2.83969C1.58884 2.32846 1.88133 1.8761 2.36997 1.63359C2.59834 1.52102 2.84346 1.46385 3.08699 1.46385C3.36811 1.46385 3.64734 1.53842 3.89658 1.68755L27.7306 15.8492C28.1646 16.1074 28.4135 16.5287 28.4135 17.0033C28.4131 17.4763 28.1642 17.8955 27.7302 18.1537Z" />
                                        </svg>
                                    </div>
                                    <img className="video-img" src="assets/img/home-3/home3-banner-video.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>;

    const getImage = (data, index) => {
        switch (index) {
            case 1:
                return banner_Image_1(data);
            case 2:
                return banner_Image_2(data);
            case 3:
                return banner_Image_3(data);
            default:
                return banner_Image_1(data); // Default image if index is not matched
        }
    };

    return (
        <div className="banner-area3">
            <div className="gradiant-img">
                <img className="img-fluid" src="assets/img/Gradient.png" alt="" />
            </div>
            <div className="background-text-slider">
                <Marquee> <h2 className="marquee_text">Our agency make your happyness</h2> </Marquee>
            </div>
            {/*<div className="scroll-down">
                <a href="#home3-partner-area">
                    Scroll Down
                    <span>
                        <svg width={13} height={13} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 1H12M12 1V13M12 1L0.5 12" />
                        </svg>
                    </span>
                </a>
            </div>  */}

            <div className="banner-vector">
                <img className="img-fluid" src="assets/img/home-3/banner-vector.png" alt="" />
            </div>
            <div className="swiper-pagination1" />
            {/* }
            <div className="social-area">
                <ul>
                    <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                    <li><a href="https://twitter.com/"><i className="bx bxl-twitter" /></a></li>
                    <li><a href="https://www.pinterest.com/"><i className="bx bxl-pinterest-alt" /></a></li>
                    <li><a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a></li>
                </ul>
            </div>*/}
            <Swiper {...slider} className="swiper banner3-slider">
                <div className="swiper-wrapper">
                    {bannerData.length > 0 && bannerData?.map((data, index) => getImage(data, index+1))}
                </div>
            </Swiper>
            <React.Fragment>
                <ModalVideo style={{ overlay: { zIndex: 9999 } }} channel='youtube' autoplay isOpen={isOpen} videoId="JSIwZ_tEP9o" onClose={() => setOpen(false)} />
            </React.Fragment>
        </div>
    )
}

export default Banner3
