import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

export function Footer() {
  return (
    <>
      <div className="footerContainer">
        <div className="spaceContainer"></div>
        <div className="cordinatesContainer">
          <a
            target="_blank"
            href="https://www.google.com/maps/place/Kolarbyn+Eco-Lodge/@59.8072818,15.7204379,16z/data=!4m16!1m7!3m6!1s0x0:0xd736f156aa2d8b7c!2zNTnCsDQ4JzM3LjIiTiAxNcKwNDAnNTkuOSJF!3b1!8m2!3d59.8103333!4d15.6833056!3m7!1s0x465dcf73e592f96d:0xec6a670ee2744fb9!5m2!4m1!1i2!8m2!3d59.8074118!4d15.7287312"
          >
            <h3>59°48'37.2"N 15°40'59.9"E</h3>
          </a>{" "}
        </div>
        <Link to="/admin">
          {" "}
          <button className="adminBtn">Admin</button>{" "}
        </Link>
      </div>
    </>
  );
}
