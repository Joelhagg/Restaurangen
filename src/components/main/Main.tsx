import React from "react";
import { Link } from "react-router-dom";
import "./Main.scss";

export function Main() {
  let bgImg =
    "https://kolarbyn.se/wp-content/uploads/2022/04/fallback-kolarbyn-socialmedia.jpg";

  return (
    <>
      <div className="mainWraper">
        <div className="mainContainer">
          <div className="mainInformationContainer">
            <h1>Välkommen till Majojo</h1>
            <h3>
              Här kan ni avnjuta renskav med dagsfärska primörer för att sedan
              gå till lägerelden med en Gin & Tonic
            </h3>
            <br />
            <Link to="/booking">
              <button className="mainBookingBtn">Boka bord</button>
            </Link>
            
          </div>
        </div>
      </div>
    </>
  );
}
