import NavMenu from "./NavMenu";

const TitleSection = () => {
    return (
        <div className="titleSection">
            <div className="navContainer">
                <NavMenu />
            </div>

            <img className ="bgl1" src="images/witchtest.png" />
            <img className="title" src="images/titleimg.png" />
        </div>
    );
}

export default TitleSection