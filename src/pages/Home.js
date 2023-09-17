import NavMenu from '../NavMenu';
import TitleSection from '../TitleSection';
import Socials from '../Socials';
import AboutSection from '../AboutSection';
import FeatureSection from '../FeatureSection';

const Home = () => {
    return (
        
        <div className="greenBG">
            {/* <button onClick={ToggleNav} className='navButton'><img src="./images/discord.png" /></button> */}
            {/* <NavMenu /> */}
            <div className="sectionContainer">
                <TitleSection />
                <Socials />
                <AboutSection />
                <FeatureSection />


                <Socials />
            </div>
        </div>
    )
}
 
export default Home;