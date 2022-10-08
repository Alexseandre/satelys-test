import imgTitle from "../../assets/img/en-savoir-plus-sur-linstallation-dun-systeme-aerovoltaique.jpeg";
import { useInView } from "react-intersection-observer";
import { IoSunnyOutline } from "react-icons/io5";
import { IoEarthOutline } from "react-icons/io5";
import { IoServerOutline } from "react-icons/io5";
import "./Aerovoltaique.css";
import React from "react";

export default function Aerovoltaique() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <div className="aerovoltaique">
      <div className="img_title">
        <img src={imgTitle} alt="" />
      </div>
      <div className="title_photovolatique">
        <h1>AÉROVOLTAÏQUE</h1>
        <h2>SATELYS</h2>
      </div>
      <div className="description_photovolatique">
        <div className="text_photovolta">
          <h3>AÉROVOLTAÏQUE PAR SATELYS</h3>
          <h4>En résumé</h4>
          <p>
            <span>L’aérovoltaïque</span> est un mélange de panneaux solaires
            photovoltaïque qui produisent de l’électricité et de panneaux
            solaires thermique pour chauffer votre logement. comme les panneaux
            photovoltaïques classiques, la face du panneau exposée au soleil
            produit donc de l’électricité et l’autre face récupère l’air chauffé
            pour chauffer votre logement.
          </p>

          <br />
          <br />
          <br />
          <h4>Un système multi-fonctions</h4>
          <p>
            En plus de produire d’électricité de la même façon que le
            photovoltaïque, <span>l’aérovoltaïque</span> permet de chauffer
            votre logement via la récupération de la chaleur produite par la
            production d’électricité. Cet air chaud est filtré au préalable afin
            de vous garantir un air neuf et sain. Enfin, le système{" "}
            <span>aérovoltaïque</span> est aussi capable de ventiler l’air frais
            durant les nuits chaudes d’été.
          </p>
          <br />
          <br />
          <br />
          <p>Aérovoltaïque est d'exploiter 80% du potentiel solaire</p>
          <div className="jauge">
            <div className={inView ? "jauge_aerovolta" : "jauge_vide"}>80%</div>
          </div>

          <br />

          <p ref={ref}>Au lieu de 20% pour le photovoltaïque</p>
          <div className="jauge">
            <div className={inView ? "jauge_photovol" : "jauge_vide"}>20%</div>
          </div>
        </div>

        <div className="img_description_photovolta">
          <img src="./images/aerovolta/panneaux1.jpeg" alt="" />
          <br />
          <br />
          <br />
          <img src="./images/aerovolta/panneaux.jpeg" alt="" />
        </div>
      </div>

      <div className="schema">
        <div className="img_schema">
          <img src="./images/aerovolta/aerovol.png" alt="" />
          <p className="pastille n1">1</p>
          <p className="cache cachen1">
            <span>Panneaux aérovoltaïques</span>
            Captent jusqu’à 98% des rayons du soleil
          </p>
          <p className="pastille n2">2</p>
          <p className="cache cachen2">
            <span>Module de ventilation</span>
            Fonction ventilateur air purifié jusqu’à 95%
          </p>
          <p className="pastille n3">3</p>
          <p className="cache cachen3">
            <span>Bouche d'insufflation haut débit</span>
            Confort thermique, la maison est ventillé en 30 minutes
          </p>
        </div>
      </div>

      <div className="icon-block">
        <div className="icon-content">
          <i className="icon1">
            <IoEarthOutline />
          </i>
          <h4>Jusqu’à 50 % d’économie de chauffage</h4>
          <p>

            Grâce l’<span>aérovoltaïque</span> vous économisez jusqu’à 50 % d’économie de
            chauffage en récupérant de la chaleur normalement perdue sous les
            panneaux solaires photovoltaïques.
          </p>
        </div>
        <div className="icon-content">
          <i className="icon2">
            <IoSunnyOutline />
          </i>
          <h4>Des revenus garantis</h4>
          <p>

            Une fois l’<span>aérovoltaïque</span>  installés sur le toit de votre maison, vous
            pouvez revendre votre électricité à EDF et bénéficiez de revenus
            solaires pendant 20 ans.
          </p>
        </div>
        <div className="icon-content">
          <i className="icon3">
            <IoServerOutline />
          </i>
          <h4>Aides et subventions</h4>
          <p>
            Différentes aides permettent d’amortir le coût d’acquisition
            rapidement : <span> Crédit d’impôt, PTZ et TVA à 5,5%.</span>


          </p>
        </div>
      </div>
    </div>
  );
}
