import { Link } from "react-router-dom";
import brand_logo from "./images/brand_logo.gif";
import "./styles/navbar.css";

const NavBar = () => {
  const test = () => {
    var nav_links = document.getElementById("main-nav-links");

    var curr_display = nav_links.style.display;
    if (curr_display === "flex") {
      nav_links.style.display = "none";
    } else {
      nav_links.style.display = "flex";
    }
  };
  return (
    <div>
      <header>
        <nav className="main-nav">
          <div className="brand-logos">
            <Link to="/">
              <div className="logo">
                <img width="80" height="80" src={brand_logo} alt="brand_logo" />
              </div>
            </Link>
            <Link to="/" className="brand-name">
              Tech&nbsp;Creed
            </Link>
          </div>

          <div className="main-links" id="main-nav-links">
            <ul className="links">
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/about">ABOUT</Link>
              </li>
              <li>
                <Link to="/portfolio">PORTFOLIO</Link>
              </li>
              <li>
                <Link to="/contact">CONTACT</Link>
              </li>
            </ul>
            <Link to="/contact" className="contact-link">
              Message Us
            </Link>
          </div>

          <button className="toggle" onClick={test}>
            <svg viewBox="0 0 100 80" width="40" height="40">
              <rect y="10" width="100" height="10"></rect>
              <rect y="40" width="100" height="10"></rect>
              <rect y="70" width="100" height="10"></rect>
            </svg>
          </button>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
