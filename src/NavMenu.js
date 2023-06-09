const NavMenu = () => {
    return (
        <nav className="navMenu">
            <div className="navLinks"> 
            < a href = "/" className="link"> Home </a>
                < a href="/aboutus" className="link"> About Us</a>
                < a href="/" className="link"> FAQ </a>
                < a href="/" className="link"> Contact </a>
                < a href="/" className="link"> Kickstarter </a>
            </div>
        </nav>
    );
}

export default NavMenu