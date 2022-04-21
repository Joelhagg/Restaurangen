import React from "react";
import "./Menu.scss";

export function Menu() {
  return (
    <>
      <div className="menuContainer">
        <h1>Meny</h1>
        <div className="menuWraper">
          <div className="menuOne">
            <h3>Förrätt</h3>
            <table>
              <tbody>
                <tr>
                  <td>Gåslever fylld med tryffel </td>
                  <td className="tdPrice">150kr</td>
                </tr>
                <tr>
                  <td>Granbarrsoppa</td>
                  <td className="tdPrice">200kr</td>
                </tr>
                <tr>
                  <td>Löjrom på barkbåt</td>
                  <td className="tdPrice">100kr</td>
                </tr>
              </tbody>
            </table>
            <h3>Huvudrätt</h3>
            <table>
              <tbody>
                <tr>
                  <td>
                    Lokalproducerad korv med 99% viltkött, vedeldsbakat surdegs
                    korvbröd, krav-surkål med kökets senap och ketchup!
                  </td>
                  <td className="tdPrice">395kr</td>
                </tr>
                <tr>
                  <td>
                    Vedeldgrillad renskav, dagsfärska smörstekta primörer och
                    schalottenlöksås
                  </td>
                  <td className="tdPrice">295kr</td>
                </tr>
                <tr>
                  <td>
                    Hemmagjorda hamburgare på vildsvin, serveras med nybakat
                    potatisbrioche, picklad vildrödlök och kökets senap och
                    ketchup
                  </td>
                  <td className="tdPrice">495kr</td>
                </tr>
              </tbody>
            </table>
            <h3>Dessert</h3>
            <table>
              <tbody>
                <tr>
                  <td>Vaniljglass med handskalade hjortron</td>
                  <td className="tdPrice">119kr</td>
                </tr>
                <tr>
                  <td>Getost med barrsås</td>
                  <td className="tdPrice">199kr</td>
                </tr>
                <tr>
                  <td>Chokladtryffel med tryffelsås </td>
                  <td className="tdPrice">249kr</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="menuTwo">
            <h3>Röda viner</h3>
            <table>
              <tbody>
                <tr>
                  <td>Bread & Butter 2019 pinot noir</td>
                  <td className="tdPrice">79/259 kr</td>
                </tr>
                <tr>
                  <td>Tommasi 2017 Amarone</td>
                  <td className="tdPrice"> 99/399 kr</td>
                </tr>
                <tr>
                  <td>Zolo Black 2017 Malbec</td>
                  <td className="tdPrice">89/379 kr</td>
                </tr>
              </tbody>
            </table>
            <h3>Vita viner</h3>
            <table>
              <tbody>
                <tr>
                  <td>Leitz Eins Zwei Dry 2020 Riesling</td>
                  <td className="tdPrice"> 99/399 kr</td>
                </tr>
                <tr>
                  <td>Chablis 2020 Clotile Davenne</td>
                  <td className="tdPrice"> 79/259 kr</td>
                </tr>
              </tbody>
            </table>
            <h3>Öl</h3>
            <table>
              <tbody>
                <tr>
                  <td>Gotlands Bryggeri Wisby Lager</td>
                  <td className="tdPrice">79 kr</td>
                </tr>
                <tr>
                  <td>Varför så sur, Herr Mango?</td>
                  <td className="tdPrice"> 99 kr</td>
                </tr>
                <tr>
                  <td>Oppigårds Amaraillo </td>
                  <td className="tdPrice"> 89 kr</td>
                </tr>
                <tr>
                  <td>Jämtlands India Pale Ale</td>
                  <td className="tdPrice">89 kr</td>
                </tr>
                <tr>
                  <td>Fenix Premium Pilsner </td>
                  <td className="tdPrice">80 kr</td>
                </tr>
              </tbody>
            </table>
            <h3>Avec</h3>
            <table>
              <tbody>
                <tr>
                  <td>Ron Zacapa Gran Reserva</td>
                  <td className="tdPrice">29 kr / cl</td>
                </tr>
                <tr>
                  <td>Buffalo Trace</td>
                  <td className="tdPrice"> 19 kr / cl</td>
                </tr>
              </tbody>
            </table>
            <h3>Alkoholfritt</h3>
            <table>
              <tbody>
                <tr>
                  <td>Varm Choklad</td>
                  <td className="tdPrice">39 kr</td>
                </tr>
                <tr>
                  <td>Läsk</td>
                  <td className="tdPrice">19 kr</td>
                </tr>
                <tr>
                  <td>Kaffe/ Te</td>
                  <td className="tdPrice">19 kr</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
