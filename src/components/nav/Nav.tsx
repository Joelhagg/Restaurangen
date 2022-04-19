import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";
import Logo from "../../image/Majojo.jpg"

export function Nav() {
  return (
    <>
      <header>
        <nav>
          <Link to="/"> <img src= {Logo} className="logo" />
          </Link>
          <h3>Nav</h3>
          <ul>
            <li>
              <Link to="/">Hem</Link>
            </li>
            <li>
              <Link to="/menu">Meny</Link>
            </li>
            <li>
              <Link to="/booking">Booking</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          <button id="menu-button">
          <span></span>
          <span></span>
          <span></span>
        </button>
        </nav>
      </header>
    </>
  );
}
