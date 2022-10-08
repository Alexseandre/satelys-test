import React from "react";
import { NavLink } from "react-router-dom";
import "./Solutions.css";

const Solutions = () => {
  return (
    <div className="solutions">
      <div className="high">
        <div className="title">
          <img src="./favicon.png" alt="Logo" />
          <h1>Nos solutions</h1>
        </div>
        <h2>Découvrez toutes nos solutions</h2>
        <p>
          Satelys répond activement à la précarité énergétique en proposant des
          solutions efficace et de qualité pour la réduire la consommation
          d’énergie.
        </p>
      </div>
      <section className="section_solution">
        <div className="fenetre">
          <div className="image_solutions">

            <NavLink
              to="/photovoltaique"
              className="savoir"
            >
              En savoir plus
            </NavLink>

            <img
              className="image_solutions_img"
              src="./images/solutions/panneaux_solaires_photovoltaiques_ape_4.jpeg"
              alt="Panneaux solaires Photovoltaïques"
            />
          </div>
          <h3>Panneaux solaires Photovoltaïques</h3>
          <div className="description_solutions">
            <p>
              L’énergie solaire est disponible gratuitement partout. Grâce aux{" "}
              <span> panneaux solaires photovoltaïques</span> vous utilisez
              cette énergie pour produire de l’électricité et de la revendre à
              EDF pendant 20 ans
            </p>
          </div>
        </div>

        <div className="fenetre">
          <div className="image_solutions">

            <NavLink
              to="/aerovoltaique"
              className="savoir"
            >
              En savoir plus
            </NavLink>

            <img
              className="image_solutions_img"
              src="./images/solutions/aero.jpeg"
              alt="Aerovoltaïque"
            />
          </div>
          <h3>Aerovoltaïque</h3>
          <div className="description_solutions">
            <p>
              En plus de produire de l’électricité, <span>l’aérovoltaïque</span>{" "}
              récupère la chaleur produite par la production d’électricité sous
              les panneaux photovoltaïques pour chauffer votre logement.
            </p>
          </div>
        </div>

        <div className="fenetre">
          <div className="image_solutions">
            <NavLink
              to="/isolation"
              className="savoir"
            >
              En savoir plus
            </NavLink>

            <img
              className="image_solutions_img"
              src="./images/solutions/isolation_ape.jpeg"
              alt="Isolation des combles"
            />
          </div>
          <h3>Isolation des combles</h3>
          <div className="description_solutions">
            <p>
              Grâce à cette solution vous réduisez les pertes de chaleur qui se
              font par la toiture. Cette solution permet de faire le plus{" "}
              <span>d’économies d’énergie</span> pour un faible coût.
            </p>
          </div>
        </div>

        <div className="fenetre">
          <div className="image_solutions">

            <NavLink
              to="pmpaa"
              className="savoir"
            >
              En savoir plus
            </NavLink>

            <img
              className="image_solutions_img"
              src="./images/solutions/daikin_ape_enr_2-1024x683.jpeg"
              alt="Pompe à chaleur air/air"
            />
          </div>
          <h3>Pompe à chaleur air/air</h3>
          <div className="description_solutions">
            <p>
              {" "}
              <span>La pompe à chaleur air/air </span>(climatisation
              réversible), car elle permet de faire du chaud pour hiver et du
              froid pour été. En mode chauffage elle va récupérer les calories
              de l’air extérieur pour chauffer l’air du logement. En mode froid
              ce sera l’inverse.
            </p>
          </div>
        </div>

        <div className="fenetre">
          <div className="image_solutions">
            <NavLink
              to="/pmpae"
              className="savoir"
            >
              En savoir plus
            </NavLink>

            <img
              className="image_solutions_img"
              src="./images/solutions/daikin_ape_enr_7-1024x683.jpeg"
              alt="Pompe à chaleur air/eau"
            />
          </div>
          <h3>Pompe à chaleur air/eau</h3>
          <div className="description_solutions">
            <p>
              <span>La pompe à chaleur air/eau</span> capte les calories
              contenues dans l’air pour les transformer en chaleur avant de les
              restituer dans un circuit d’eau de chauffage qui va permettre
              d’alimenter un radiateur traditionnel, un plancher chauffant ou la
              production d’eau chaude sanitaire. Les modèles les plus
              performants peuvent chauffer une maison.
            </p>
          </div>
        </div>

        <div className="fenetre">
          <div className="image_solutions">
            <NavLink
              to="/thermo"
              className="savoir"
            >
              En savoir plus
            </NavLink>

            <img
              className="image_solutions_img"
              src="./images/solutions/themodynamiques_3-1024x683.jpeg"
              alt="Chauffe-eau thermodynamique"
            />
          </div>
          <h3>Chauffe-eau thermodynamique</h3>
          <div className="description_solutions">
            <p>
              {" "}
              <span>Le chauffe-eau thermodynamique </span> est un appareil se
              servant des énergies renouvelables pour chauffer l’eau sanitaire.
              En effet, au lieu de faire appel à des résistances électriques
              comme le chauffe-eau classique, celui-ci présente un mini-pompe à
              chaleur, en haut de la cuve.
            </p>
          </div>
        </div>

        <div className="fenetre">
          <div className="image_solutions">

            <NavLink
              to="/poele"
              className="savoir"
            >
              En savoir plus
            </NavLink>

            <img
              className="image_solutions_img"
              src="./images/poele/poele1.jpg"
              alt="Poele a granulé"
            />
          </div>
          <h3>Poêle à granulés</h3>
          <div className="description_solutions">
            <p>
              Les <span>poêles à granulés</span> sont des appareils de chauffage
              bois parmi les plus performants en termes de rendement. Le granulé
              de bois étend un aggloméré maîtrisé en termes de matériaux, il
              assure une combustion sèche et complète permettant ainsi
              d'atteindre des rendements supérieurs à 80 % pour les poêles à
              bois, est supérieur à 90 % pour les chaudières bois à granulés.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
