import imgChauffe from "../../assets/videos/videoChauffe.mp4";

import React from "react";

export default function Thermo() {
  return (
    <div className="photovoltaique">
      <div className="video_title">
        <video src={imgChauffe} autoPlay />
      </div>
      <div className="title_photovolatique">
        <h1>Chauffe-eau</h1>
        <h2>Thermodynamique</h2>
      </div>
      <div className="description_photovolatique">
        <div className="text_photovolta">
          <h3 className="green">Chauffe eau thermodynamique par Satelys</h3>
          <h4>En résumé</h4>
          <p>
            Le chauffe-eau thermodynamique est un appareil se servant des
            <span> énergies renouvelables</span> pour chauffer l’eau sanitaire.
            En effet, au lieu de faire appel à des résistances électriques comme
            le chauffe-eau classique, celui-ci présente un mini-pompe à chaleur,
            en haut de la cuve.
          </p>

          <br />
          <p>
            Un appoint électrique prend le relais en cas de températures
            extérieures extrêmes ou d’un besoin d’eau chaude exceptionnel.
          </p>
          <br />
          <p>
            Le chauffe-eau thermodynamique permet de consommer{" "}
            <strong> jusqu’à 3 fois moins d’énergie</strong>. Il s’agit donc
            d’une solution performante et économique pour subvenir aux besoins
            en eau chaude sanitaire de toute la maison.
          </p>
        </div>
        <div className="img_description_photovolta">
          <img src="./images/thermo/chauff.png" alt="Dessins de chauffe eau" />
        </div>
      </div>
      <div className="description_photovolatique">
        <div className="img_description_photovolta">
          <img src="./images/thermo/earth.png" alt="Earth planet" />
        </div>
        <div className="text_photovolta">
          <h3 className="green">
            Les avantages d’un chauffe-eau thermodynamique
          </h3>
          <p>
            Un chauffe-eau thermodynamique permet de réaliser jusqu’à{" "}
            <strong>70% d’économie</strong> sur votre facture de consommation
            énergétique.
          </p>

          <br />
          <p>
            Vous pouvez bénéficier d’aides financières de la part de l’Etat tel
            que le crédit d’impôt de 30 % en 2017, le taux réduit de la TVA et
            les primes énergie.
          </p>
          <br />
          <p>
            Un chauffe-eau thermodynamique fait <strong> économiser</strong> 600
            Litres d’eau par jour. Le chauffe-eau thermodynamique est réglable
            manuellement et programmable.
          </p>
        </div>
      </div>
    </div>
  );
}
