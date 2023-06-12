import NavMenu from '../NavMenu';
import TitleSection from '../TitleSection';
import Socials from '../Socials';
import AboutSection from '../AboutSection';
import FeatureSection from '../FeatureSection';

const Home = () => {
    return (
        <div>
            <div className="sectionContainer">
                <TitleSection />
                <AboutSection />
                <FeatureSection />


                <Socials />
            </div>
        </div>
    )
}
 
export default Home;