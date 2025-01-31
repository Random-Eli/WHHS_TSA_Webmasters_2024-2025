import React from "react";
import './Sourcing.css'
import { useEffect } from 'react';
import fullpage from 'fullpage.js';
import 'fullpage.js/dist/fullpage.css';


function Sourcing() {

    useEffect(() => {
        new fullpage('#fullpage', {
            autoScrolling: true,
            navigation: true,
        });

        console.log("FullPage.js initialized!");

        return () => {
            fullpage.destroy('all'); 
            console.log("FullPage.js uninitialized!");
        };
    }, []);

    return (

        <div id="fullpage">

            <div class="section" id="section0">
        
                <video class="overlay-video" loop muted="true" playsinline data-autoplay>
                    <source src='../assets/Videos/vid - Sustainability Slide 1.mp4' type="video/mp4"></source>
                </video>

                <div class="layer">
                    <h1>“Sansai (山菜): The Wild, Fresh Heart of Our Vegan Sushi”</h1>
                </div>

            </div>

            <div class="section" id="section1">

                <div class="slide" id="slide1">
            
                    <div class="layer">
                        <h1>The Essence of Japanese Culture</h1>
                    </div>

                </div>

                <div class="slide" id="slide2">
                    
                    <div class="layer">
                        <h1>"Mottainai (もったいない): The Art of Avoiding Waste"</h1>
                    </div>

                </div>

            </div>


            <div class="section" id="section2">

                <div class="layer">
                    <h1>Award Winning</h1>
                </div>

            </div>


        </div>
    );

}

export default Sourcing