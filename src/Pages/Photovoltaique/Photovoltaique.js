import videoPhotovolta from "../../assets/videos/videoPhotovolta.mp4";
import { IoAccessibilityOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { IoHammerOutline } from "react-icons/io5";
import "./Photovoltaique.css";

export default function Photovoltaique() {
  return (
    <div className="photovoltaique">
      <div className="video_title">
        <video
          src={videoPhotovolta}
          autoPlay={true}
          disablePictureInPicture={true}
          loop
        />
      </div>
      <div className="title_photovolatique">
        <h1>Photovoltaïques</h1>
        <h2>PANNEAUX SOLAIRES PHOTOVOLTAÏQUES</h2>
      </div>
      <div className="description_photovolatique">
        <div className="text_photovolta">
          <h3>PANNEAUX SOLAIRES PHOTOVOLTAÏQUES PAR SATELYS</h3>
          <h4>Comment fonctionne les panneaux solaires photovoltaïques</h4>
          <p>
            Tout d’abord les panneaux solaires photovoltaïques transforment
            l’énergie solaire, disponible gratuitement, en électricité puis un
            onduleur transforme ce courant continu en courant alternatif, pour
            l’injecter sur le réseau EDF ou le consommer.
          </p>

          <br />
          <h4>Capter l’énergie solaire</h4>
          <p>
            L’énergie solaire est disponible gratuitement partout. En France
            reçoit à chaque instant jusqu’à 200W d’énergie solaire par m². Le
            plus souvent, cette énergie n’est pas utilisée. Grâce aux{" "}
            <span>panneaux solaires photovoltaïques</span>, Il est maintenant
            possible de profiter de l’énergie solaire.
          </p>
        </div>
        <div className="img_description_photovolta">
          <img src="./images/photovolta/panneaux1.jpeg" alt="" />
          <img src="./images/photovolta/panneaux.jpeg" alt="" />
        </div>
      </div>
      <div className="icon-block">
        <div className="icon-content">
          <i className="icon1">
            <IoHomeOutline />
          </i>
          <h4>Des revenus garantis</h4>
          <p>
            Une fois les <span>panneaux solaires photovoltaïques</span>{" "}
            installés sur le toit de votre maison, vous pouvez revendre votre
            électricité à EDF et bénéficiez de revenus solaires pendant 20 ans.
          </p>
        </div>
        <div className="icon-content">
          <i className="icon2">
            <IoAccessibilityOutline />
          </i>
          <h4>Aides et subventions</h4>
          <p>
            Grâce à des aides locales de votre région (département ou commune),
            vous pouvez réduire le coût installation de{" "}
            <span>panneaux solaires photovoltaïques</span>.
          </p>
        </div>
        <div className="icon-content">
          <i className="icon3">
            <IoHammerOutline />
          </i>
          <h4>NORD comme dans le SUD</h4>
          <p>
            Le solaire n’est pas réservé que pour le SUD. Les maisons dans le
            Nord de la France peuvent être adaptées à l’installation de{" "}
            <span>panneaux solaires photovoltaïques</span>.
          </p>
        </div>
      </div>
      <div className="caract-block">
        <div className="caract-content">
          <img src="./images/photovolta/edf.webp" alt="EDF" />
          <h4>Rachat par EDF</h4>
          <p>
            Lorsque vous produisez de l’énergie à partir de{" "}
            <span>panneaux solaires photovoltaïques</span>, vous disposez d’une
            ressource que vous pouvez vendre. Les tarifs de rachat sont fixés à
            la signature du contrat et ils restent valables pendant 20 ans, soit
            l’intégralité de la durée de l’accord.
          </p>
        </div>
        <div className="caract-content">
          <img src="./images/photovolta/france.png" alt="France" />
          <h4>Rentable sur tout le territoire national</h4>
          <p>
            Les <span>panneaux solaires photovoltaïques</span> nécessitent non
            pas de la chaleur mais de la lumière pour fonctionner. La
            température n’a donc aucune influence sur la production donc le NORD
            et l’EST sont aussi des régions rentables pour le photovoltaïque.
          </p>
        </div>
        <div className="caract-content">
          <img src="./images/photovolta/35ans.png" alt="35 ans" />
          <h4>Durée de vie jusqu’à 35 ans</h4>
          <p>
            Grâce aux avancées technologique, la durée de vie des panneaux
            solaires photovoltaïques peuvent atteindre les 35 ans selon les
            modèles. Il existe différents types de{" "}
            <span>panneaux solaires photovoltaïques</span>. Chaqu’un possède un
            rendement different : 19 % de rendement pour les monocristallins, 16
            % de rendement pour les polycristallins et jusqu’à 10 % pour le
            silice amorphe.
          </p>
        </div>
      </div>
    </div>
  );
}
