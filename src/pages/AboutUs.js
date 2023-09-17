import NavMenu from "../NavMenu";
import Socials from '../Socials';
import React, { useEffect } from "react";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className="aboutUsSection">
            <NavMenu />
            <header>
                <h1>ABOUT US</h1>
            </header>
            <div className="bio-container"  >
                <div className="bio-element" data-aos="flip-right">
                    <h3>Basil</h3>
                    <img class="por"src="./images/basil.png" />
                    <ul>
                       
                        <li>tomato connoisseur</li>
                        <li>sleep lover</li>
                        <li>fruit drinks only</li>
                    </ul>
                </div>
                <div className="bio-element" data-aos="flip-left">
                    <h3>Lan</h3>
                    <img class="por1" src="./images/lan.png"/>
                    <ul>
                        <li> hyperpop enthusiast</li>
                        <li>cooking mama</li>
                        <li>pilates enjoyer</li>
                    </ul>
                </div>
               
            </div>
            <Socials/>
        </div> 
     );
}
 
export default AboutUs;