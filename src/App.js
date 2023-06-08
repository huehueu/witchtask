import NavMenu from './NavMenu';
import TitleSection from './TitleSection';
import Socials from './Socials';
import AboutSection from './AboutSection';
import FeatureSection from './FeatureSection';

function App() {
  return (
    <div>
      <NavMenu />
      <div className="sectionContainer">
        <TitleSection />
        <Socials />
        <AboutSection />
        <FeatureSection />

  
        <Socials />
      </div>
      


    </div>
  );
}

export default App;
