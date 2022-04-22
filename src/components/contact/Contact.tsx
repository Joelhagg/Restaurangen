import React from "react";
import "./Contact.scss";

export function Contact() {
  return (
    <>
      <div className="contactWraper">
        <div className="contactContainer">
          <h1>Kontakt</h1>
          <h3>Adress: Skärsjön, 739 92 Skinnskatteberg</h3>
          <h3>Telefonnummer: 08-740 00 01</h3>
          <h3>Mejl: majojos@majojo.se</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2006.5120977318209!2d15.72654221609162!3d59.80741198182871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465dcf73e592f96d%3A0xec6a670ee2744fb9!2sKolarbyn%20Eco-Lodge!5e0!3m2!1ssv!2sse!4v1650531116406!5m2!1ssv!2sse"
            width="350"
            height="250"
            loading="lazy"
          ></iframe>
          <br />
          <h2> Vill du kontakta oss? Fyll i formuläret</h2>

          <div className="formContainer">
            <form>
              <input type="text" placeholder="Förnamn" />
              <input type="text" placeholder="Efternamn" />
              <br />
              <input type="email" placeholder="Mejl" />
              <input type="tel" placeholder="Mobilnummer" />
              <br />
              <textarea />
              <br />
              <br />
              <button>Skicka fråga!</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
