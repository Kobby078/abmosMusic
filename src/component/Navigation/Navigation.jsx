import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navigation paddings">
        <div className="c-name">
          <NavLink to="/">abmosmusic</NavLink>
        </div>
        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className= "flexCenter nav-links">
          <ul className={menuOpen ? "open" : ""}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/About">About Us</NavLink>
            <NavLink to="/Services">Our Services</NavLink>
            <NavLink to="/Artists">Artists</NavLink>
            <NavLink to="/Contact">
                <button className="n-button">
                  Contact
                </button>
            </NavLink>
          </ul>
        </div>
    </nav>
  )
}

export default Navigation