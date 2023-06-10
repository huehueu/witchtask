import NavMenu from "../NavMenu";
import Socials from '../Socials';

const AboutUs = () => {
    return (
        <div className="aboutUsSection">
            <NavMenu />
            <header>
                <h1>ABOUT US</h1>
            </header>
            <div className="bio-container">
                <div className="bio-element">
                    <h3>akijae</h3>
                    <img src="./images/icon.png"/>
                    <ul>
                        <li>cutie patotie</li>
                        <li>moon taeil lover</li>
                        <li>fruit drinks only</li>
                    </ul>
                </div>
                <div className="bio-element">
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