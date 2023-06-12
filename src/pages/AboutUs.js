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
                {/* <p className="header">ABOUT US</p> */}
                <h1>ABOUT US</h1>
            </header>
            <div className="bio-container"  >
                <div className="bio-element" data-aos="flip-left">
                    <h3>lan</h3>
                    <img src="./images/icon.png"/>
                    <ul>
                        <li>cutie patotie</li>
                        <li>moon taeil lover</li>
                        <li>fruit drinks only</li>
                    </ul>
                </div>
                <div className="bio-element" data-aos="flip-right">
                    <h3>huehueu</h3>
                    <img src="./images/icon.png" />
                    <ul>
                        <li>ricky enthusiast</li>
                        <li>cooking mama</li>
                        <li>gossip enjoyer</li>
                        <li>pilates is good for u</li>
                    </ul>
                </div>
            </div>
            <Socials/>
        </div> 
     );
}
 
export default AboutUs;