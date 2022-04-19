import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

export function Nav() {
  return (
    <>
      <header>
        <nav>
          <Link to="/">
            {" "}
            <img src="Majojo.jpg" className="logoImage" />
          </Link>
          <h3>Nav</h3>
          <ul>
            <li>
              <Link to="/">Hem</Link>
            </li>
            <li>
              <Link to="/booking">Booking</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
