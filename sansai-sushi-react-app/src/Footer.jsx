import React from "react";
import "./Footer.css";

const Footer=()=>{
    return(
        <div className = "footer">
            <div className="sb__footer section__ padding">
                <div className="sb__footer-links">
                    <div className = "sb__footer-links_div">
                        <h4>Social Media!</h4>
                        <a href="/instagram">
                            <p>Instagram</p>
                        </a>
                        <a href="/facebook">
                            <p>Facebook</p>
                        </a>
                        <a href="/twitter">
                            <p>Twitter</p>
                        </a>
                    </div>
                    <div className = "sb__footer-links_div">
                        <h4>Quick Links!</h4>
                        <a href="/resource">
                            <p>Home</p>
                        </a>
                        <a href="/resource">
                            <p>Menu</p>
                        </a>
                        <a href="/resource">
                            <p>Catering</p>
                        </a>
                        <a href="/resource">
                            <p>Sourcing</p>
                        </a>
                        <a href="/resource">
                            <p>References</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div contact">
                        <h4>Contact Us!</h4>                      
                        <p><strong>Email:</strong> contact@sanshaisushi.jp</p>                   
                        <p><strong>Address:</strong></p>
                        <div className="contact-address">
                            <p>Sanshai Sushi</p>
                            <p>1-23-5 Tsukiji, Chūō City</p>
                            <p>Tokyo 104-0045, Japan</p>
                        </div>
                        <p><strong>Phone:</strong> +81-3-1234-5678</p>                     
                    </div>
                    <div className = "sb__footer-links_div">
                        
                        <div className = "coming-soon-image">
                            <img src="/Sansai Sushi Logo.svg" />
                        </div>

                    </div>

                </div>
            <hr></hr>
            <div className = "sb__footer-below">
                <div className="sb__footer-copyright">
                    <p>
                        @{new Date().getFullYear()} SansaiSushi. All rights reserved.
                    </p>
                </div>
                <div className = "sb__footer-below-links">
                    <a href="/terms"><div><p>Terms & Conditions</p></div></a>
                    <a href="/privacy"><div><p>Privacy</p></div></a>
                    <a href="/security"><div><p>Security</p></div></a>
                    <a href="/cookie"><div><p>Cookie declaration</p></div></a>
                </div>

            </div>
            </div>
        </div>
    )
}
export default Footer;