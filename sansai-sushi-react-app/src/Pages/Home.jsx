import React, { useEffect, useRef, useState } from "react";
import Photo1 from '../assets/SansaiOutside.jpg';
import Photo2 from '../assets/SansaiInterior.jpg';
import Photo3 from '../assets/GuyWithSushi.jpg';
import Photo4 from '../assets/SushiPic.jpg';
import Photo5 from '../assets/Sushi2.jpg';
import Photo6 from '../assets/Sushi3.jpg';
import Photo7 from '../assets/Sushi4.jpg';
import Photo8 from '../assets/sushiwiththesause.jpg';
import Photo9 from '../assets/Mountains.jpg';



import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import './Home.css';
import { FreeMode, Pagination, Autoplay  } from 'swiper/modules';

function Home() {
    return (
        <>
            <div className="backgroundImage">
                <div className="paddingtop1"></div>
                <h2 className="headerMain"> Sansai Sushi</h2>
                <div className="container w-100">

                <img src={Photo9} className="img-fluid rounded" alt="Responsive image"></img>
                </div>
                <div className="container">
                  
                <div className="paddingtop2"></div>
                    <h2 className="header text-center"> Where Vegan Meets the Timeless Elegance of Japan...</h2>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        freeMode={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                          }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[FreeMode, Pagination, Autoplay]}
                        className="mySwiper"
                    >

                        <SwiperSlide><img src={Photo1} alt="Photo" width="200" /></SwiperSlide>
                        <SwiperSlide><img src={Photo2} alt="Photo" width="200" /></SwiperSlide>
                        <SwiperSlide><img src={Photo3} alt="Photo" width="200" /></SwiperSlide>
                        <SwiperSlide><img src={Photo4} alt="Photo" width="200" /></SwiperSlide>
                        <SwiperSlide><img src={Photo5} alt="Photo" width="200" /></SwiperSlide>
                        <SwiperSlide><img src={Photo6} alt="Photo" width="200" /></SwiperSlide>
                        <SwiperSlide><img src={Photo7} alt="Photo" width="200" /></SwiperSlide>
                        <SwiperSlide><img src={Photo8} alt="Photo" width="200" /></SwiperSlide>
                    </Swiper>

                </div>
                <div className="paddingtop"></div>
                <div className="container text-center ">
                    <div className="row">
                        <div className="col-sm-6 col-md-5 col-lg-6">
                        <div className="paddingbottom"></div>
                        <h2 className="header text-center"> 
                            About Us:</h2>
                        </div>

                        <div className="col-sm-6 col-md-5 col-lg-6">
                        <h2 className="aboutText"> 
                            In operation for over 30 years, Sansai Sushi serves authentic vegetarian sushi with a modern twist. Founded by the Lee family, we here at Sansai Sushi strive to share plant-based, cruelty-free sushi with the world. For three decades, our commitment to sourcing from local farmers and artisans has allowed us to provide a not only sustainable, but also delicious dining experience. From vegetarians, to sushi lovers, to anyone open to amazing cuisine, join us and experience the taste of Sansai!
                            </h2>
                            </div>
                    </div>
                </div>
                <div className="paddingbottom"></div>
            </div>
        </>

    );
}

export default Home;
