import React from "react";
import "./Caract.css";

export default function Caract() {
  return (
    <div>
      <div
        data-aos-anchor-placement="top-bottom"
        data-aos="fade-left"
        className="block-caract"
      >
        <div className="container1-caract">
          <div className="container-text-caract">
            <h2>Caractéristiques</h2>
            <br />
            <p>
              La pompe à chaleur est très simple d’utilisation et très rapide à
              installer. Un jardin ou d’une cour pour y installer l’unité
              extérieure et d’un autre emplacement pour installer les unités
              intérieures. Les ventilo s’installent très simplement au-dessus
              des portes des pièces à chauffer. De plus, une pompe à chaleur
              utilisant l’aérothermie est de faible prix donc le retour sur
              investissement est plus rapide.
            </p>
          </div>
          <div className="img-cara">
            <img src="./images/pmpaa/pmpaaSchema.webp" alt="Schema à chaleur" />
          </div>
        </div>
        <div className="container-5">
          <h2>Avantages</h2>
          <div className="container-avantage">
            <div className="text-avantage">
              <ul>
                <li>
                  - Sa capacité de chauffage est assez étendue pour toutes les
                  pièces d'un habitat
                </li>
                <li>- Température constante dans toute la pièce.</li>
                <li>- La pompe à chaleur air/air est réversible.</li>
                <li>- Un entretien minime mais régulier.</li>
              </ul>
            </div>
            <div className="text-avantage">
              <ul>
                <li>- Une installation simple</li>
                <li>- Eligible à la prime Economie Energie.</li>
                <li>- Pas besoin de radiateurs.</li>
                <li>- La pompe à chaleur air/air assainit l’atmosphère.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
