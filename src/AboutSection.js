import Socials from './Socials';
import React, { useEffect } from "react";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutSection = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className="aboutSection">
            <div data-aos="zoom-in">
                <h2> ABOUT</h2>
            </div>
            <br></br>
            <div className="aboutDesc">
                <p className="aboutText"> Witch-Task is a cozy task manager where you play as a witch who just started a potion shop. By completing your corresponding real-life daily tasks you can create potions that make your customers happy!</p>
                <img className="positImg" src="./images/posit.png" />

            </div>

            <img className="potionImg" src="./images/potion.png" />
            <img className="bookImg" src="./images/book.png" />
        </div>
    );
}

export default AboutSection