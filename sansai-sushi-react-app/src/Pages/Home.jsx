import React, { useEffect, useRef, useState } from "react";
import fullpage from 'fullpage.js';
import 'fullpage.js/dist/fullpage.css';
import Photo1 from '../assets/SansaiOutside.jpg';
import Photo2 from '../assets/SansaiInterior.jpg';
import Photo3 from '../assets/GuyWithSushi.jpg';
import Photo4 from '../assets/SushiPic.jpg';
import Photo5 from '../assets/Sushi2.jpg';
import Photo6 from '../assets/Sushi3.jpg';
import Photo7 from '../assets/Sushi4.jpg';
import Photo8 from '../assets/sushiwiththesause.jpg';




import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './Home.css';
import { FreeMode, Pagination } from 'swiper/modules';

function Home() {
    return (
        <>
            <div className="backgroundImage">
                <div className="paddingtop1"></div>
                <h2 className="headerMain"> Sansai Sushi</h2>
                <div className="container">
                  
                    <div className="paddingtop"></div>
                    <h2 className="header text-center"> Where Vegan Meets the Timeless Elegance of Japan...</h2>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        freeMode={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[FreeMode, Pagination]}
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
                <div className="paddingbottom"></div>
                <div class="container text-center">
                    <div class="row">
                        <div className="col-sm-6 col-md-5 col-lg-6">
                        <h2 className="header text-center"> About Us:</h2>
                        </div>

                        <div className="col-sm-6 col-md-5 col-lg-6">Blah Blah Blah Give Us</div>
                    </div>
                </div>
                <div className="paddingbottom"></div>
            </div>
        </>

    );
}

export default Home;
