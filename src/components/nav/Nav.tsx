import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";
import Logo from "../../image/Majojo.jpg";
import { useState } from "react";

export function Nav()  {
  const [isActive, setActive] = useState(false);

  const openBurgerMenu = () => {
    const toggleClass = () => {
      setActive(!isActive);
    };

    toggleClass();
  };

  const closeMenu = () => {
    setActive(false);
  };

  return (
    <>
    <header>
        <nav>
          <Link to="/">
            {" "}
            <img src={Logo} className="logo" alt="Logo of Majojo" />
          </Link>
          </nav>
          

      <nav
        className={`hamburger ${isActive ? "hamburger-active" : ""}`}
        onClick={openBurgerMenu}
      >
        <span className="hamburger__icon"></span>
      </nav>
      <nav className={`header-links-container ${isActive ? "change" : ""}`}>
        <nav className="header-links">
        <Link to ="/" onClick={closeMenu} >Hem</Link>
          <Link to ="/menu" onClick={closeMenu} >Meny</Link>
          <Link to ="/booking" onClick={closeMenu} >Bokning</Link>
          <Link to ="/contact" onClick={closeMenu} >Kontakta oss</Link>
          
        </nav>
      </nav>
    </header>
    </>
  );
};

export default Nav;



 
