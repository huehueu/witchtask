import NavMenu from "./NavMenu";
import React, { useEffect } from "react";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import Socials from "./Socials";


const TitleSection = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className="titleSection">
            <div className="navContainer">
                <NavMenu />
            </div>
                    <img className="bgl1" src="images/witchtest.png" />
                    <div className="titleDiv" data-aos="zoom-in" >
                        <img className="title" src="images/titleimg.png" />
                    </div>
                    <Socials/>
                   
        </div>
    );
}

export default TitleSection