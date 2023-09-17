const NavMenu = () => {
    return (
        <nav className="navMenu">
            <div className="navLinks"> 
            < a href = "/" className="link"> Home </a>
                < a href="/aboutus" className="link"> About Us</a>
                < a href="/faq" className="link"> FAQ </a>
                < a href="/contact" className="link"> Contact </a>
                < a href="https://www.youtube.com/watch?v=DDXr5ihO84U&ab_channel=huehueu" target=" _blank" className="link"> Dev Updates </a>
            </div>
        </nav>
    );
}

export default NavMenu