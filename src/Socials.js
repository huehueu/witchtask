const Socials = () => {
    return (
        <div className="socialsSection">

            <p className="scTxt"> STAY UPDATED!</p>
            <div className="socials">
                < a href="https://discord.gg/8KVxHphyV8" target="_blank">
                    <img className="icon_img" src="images/discord.png" />
                </a>
                < a href="https://www.youtube.com/@huehueu.studios" target="_blank">
                    <img className="icon_img" src="images/youtube.png" />
                </a>
                {/* < a href="/">
                    <img className="icon_img" src="images/instagram.png" />
                </a>
                < a href="/">
                    <img className="icon_img" src="images/tiktok.png" />
                </a> */}
            </div>
        </div>
       
    );
}

export default Socials