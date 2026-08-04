import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar"> 
            <div className="nav-name">
                <a href="/">
                Jeremy
                </a>
            </div>

            <div className="nav-links">
                <a href="#">About</a>
                <a href="#">Projects</a>
                <a href="#">Contact</a>
            </div>
        </nav>
    );
}

export default Navbar;