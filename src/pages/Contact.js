import NavMenu from "../NavMenu";
import Socials from "../Socials";

const Contact = () => {
    return ( 
        <div className="contactSection">
            <NavMenu/>
            <header> <h1> CONTACT </h1> </header>
            <p> For any inqueries please email us a: xxx@gmail.com</p>
            <Socials/>
        </div>
     );
}
 
export default Contact;