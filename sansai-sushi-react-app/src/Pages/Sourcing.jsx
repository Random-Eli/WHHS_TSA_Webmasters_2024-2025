import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import './Sourcing.css';

// import required modules
import { Parallax, Pagination, Navigation, Autoplay } from 'swiper/modules';

import img1 from '../assets/harvesting1.jpg';



function Sourcing() {
    return (

        <>

            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                speed={1500}
                parallax={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Parallax, Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >


                <div
                    slot="container-start"
                    className="parallax-bg"
                    style={{
                        'backgroundImage': `url(${img1})`
                    }}
                    data-swiper-parallax="-23%"
                ></div>


                <SwiperSlide>
                    <div className="title" data-swiper-parallax="-2000">
                        <h1>“Sansai (山菜): The Wild, Fresh Heart of Our Vegan Sushi”</h1>
                    </div>
                </SwiperSlide>c


                <SwiperSlide>
                    <div className="title" data-swiper-parallax="-2000">
                        <h1>"The Essence of Japanese Culture”</h1>
                    </div>
                    <div className="card">
                        <div className="text" data-swiper-parallax="-800">
                            <div className="card-body">
                                Our deeply connected roots in Japanese culture extend beyond just the authentic flavors of our food. Here at Sansai Sushi, we strive to embody the respectful and friendly spirit of Japan—not just in our kitchen and restaurant, but in every interaction with our guests and partners.
                                Our partnership with local Japanese farmers represents our commitment to quality, sustainability, and community. By sourcing the freshest vegetables and ingredients directly from those who cultivate them with care, we create a dining experience that honors tradition while supporting the people who make it possible. At Sansai Sushi, every meal is a celebration of connection, craftsmanship, and the shared love of authentic Japanese cuisine.
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="title" data-swiper-parallax="-2000">
                        <h1>"Mottainai (もったいない): The Art of Avoiding Waste"</h1>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div className="text" data-swiper-parallax="-800">
                                <p>
                                    Here at Sansai Sushi we believe in the Japanese philosophy known as Mottainai, expressing a deep sense of regret over any type of waste,whether that be food, water, or even energy waste.

                                </p>
                            </div>

                            <div className="text" data-swiper-parallax="-200">
                                <ul>
                                    <li>All takeout packaging is made from plant based fibers which are full bio degradable, allowing us to help reduce landfill waste.</li>
                                    <li>The farmers that we partner with also believe in sustainability and conservation practices.Our farmers utilize techniques in order to get us the freshest ingredients, at the lowest environmental cost</li>
                                    <li>We believe in re-purposing, just as the Japanese did in the Shojin Ryori period when Japan was a nearly zero waster society. Our menu is formulated with sustainability in mind, nearly all food scraps can be reused in either a dish, or even an original sauce.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="title" data-swiper-parallax="-2000">
                        <h1>"Award Winning"</h1>
                    </div>
                    <div className="card">
                        <div className="card-body" id = "lastCard">
                            <div className="subtitle" data-swiper-parallax="-800">
                                <p>Our efforts to provide delectable yet sustainable cuisine has not gone unnoticed either. Here are a couple of our achievements...</p>
                            </div>

                            <div className="text" data-swiper-parallax="-200">
                                <ul>
                                    <li>Three Michelin Star</li>
                                    <li>LEED Certified</li>
                                    <li>Green Restaurant Association Certified</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>


            </Swiper>

        </>
    )
}

export default Sourcing
