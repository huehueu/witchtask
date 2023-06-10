import Socials from './Socials';
const AboutSection = () => {
    return (
        <div className="aboutSection">
            <Socials />
            <h2> ABOUT</h2>
            <br></br>
            <p className=""> Witch-Task is a cozy task manager where you play as a witch who just started a potion shop. By completing your corresponding real-life daily tasks you can create potions that make your customers happy!</p>
            <img className="potionImg" src="./images/potion.png" />
            <img className="bookImg" src="./images/book.png" />
        </div>
    );
}

export default AboutSection