import Carousel from 'react-bootstrap/Carousel';

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination , Autoplay} from "swiper";

function AboutUs(){


    return(
        <div>
            <div className="topBanner">
                <div className="topBannerVideo">
                    <video muted autoPlay controls loop="loops">
                        <source src={process.env.PUBLIC_URL+'/videos/corn.mp4'} type="video/mp4" />
                        브라우저가 동영상 재생을 지원하지 않습니다.
                    </video>
                </div>
                <div className="topBannerText">
                <p>'못난이 농산물'을 아시나요?</p>
                </div>
            </div>

            <div className='aboutUs_firstBanner'>
                <div className='aboutUs_firstBannerSlider'>
                    <Swiper 
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                    }}
                    pagination={{
                    clickable: true,
                    }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper">
                        <SwiperSlide>
                            <img className="d-block w-100"
                            src="https://images.unsplash.com/photo-1627740281282-b8aad2a5c290?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                            alt="Third slide"/></SwiperSlide>
                        <SwiperSlide>
                            <img className="d-block w-100"
                            src="https://images.unsplash.com/photo-1465362342881-f183990e82b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                            alt="Third slide"/></SwiperSlide>
                        <SwiperSlide>
                            <img className="d-block w-100"
                            src="https://images.unsplash.com/photo-1478234082019-73726348a75b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                            alt="Third slide"/></SwiperSlide>
                    </Swiper>
                </div>

                <div className='aboutUs_firstBannerText'>
                    <span style={{fontWeight:'lighter', fontSize:'16px', color:'gray'}}>크기가 커서, 너무 작아서, 상처가 나서...</span>
                    <p className='bannerHeader'><span style={{color:'#FF6741', fontWeight:'bold',  fontSize:'24px'}}>'예쁘지 않다'</span>는 이유로 버려지는 농산물들</p>
                    <br />
                    <p>
                        모양과 크기 등 겉모습 때문에 폐기되는 농산물은 <br/>
                        <span>연간 생산액의 1/3</span> 
                    </p>
                </div>
            </div>

            {/* 여기에 스크롤 애니메이션 넣을 거임 */}
            <div className='aboutUs_secondBanner'>
                <div className='aboutUs_secondBannerText'>
        
                </div>


            </div>
        </div>
    )
}



export default AboutUs;