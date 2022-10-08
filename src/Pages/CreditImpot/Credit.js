import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import "./Credit.css";

export default function Credit() {
  const resume = useRef(0);
  const conditions = useRef(0);
  const materiel = useRef(0);
  const [positionScroll, SetValue] = useState();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      SetValue(window.scrollY);
    });
  }, []);

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - 150,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <div className="box-into-nav">
        <div className="title-box-cred">
          <h1>Le Crédit D'impôt</h1>
          <p>Transition energétique</p>
        </div>
      </div>
      <div className="other-navbar">
        <ul>
          <li
            className={
              (positionScroll > resume.current.offsetTop - 200) &
              (positionScroll < conditions.current.offsetTop - 200)
                ? `link-fixed active`
                : `link-fixed`
            }
            onClick={() => {
              console.log(resume.current.offsetTop);
              scrollToSection(resume);
            }}
          >
            En résumé
          </li>
          <li
            onClick={() => scrollToSection(conditions)}
            className={
              (positionScroll > conditions.current.offsetTop + -200) &
              (positionScroll < materiel.current.offsetTop + -200)
                ? `link-fixed active`
                : `link-fixed`
            }
          >
            Conditions
          </li>
          <li
            onClick={() => scrollToSection(materiel)}
            className={
              (positionScroll > materiel.current.offsetTop - 200) &
              (positionScroll < materiel.current.offsetTop + 2000)
                ? `link-fixed active`
                : `link-fixed`
            }
          >
            Matériel éligible
          </li>
        </ul>
      </div>
      <div ref={resume} className="section-sub-1">
        <h1>
          Qu’est ce que le crédit d’impôt <span>transition énergétique</span> ?
        </h1>
        <p>
          <strong>Le crédit d’impôt</strong> pour la transition énergétique
          (Cite) est un <strong>crédit d’impôt</strong> sur le revenu au titre
          des dépenses effectuées par le contribuable pour la qualité
          environnementale de son logement. Elle est destinée aux locataires,
          propriétaires ou occupants à titre gratuit de leur{" "}
          <strong>habitation principale.</strong>
        </p>
      </div>
      <div ref={conditions} className="section-sub-2">
        <div className="r">
          <a
            target="blank"
            href="https://www.lenergietoutcompris.fr/actualites-conseils/qu-est-ce-qu-un-artisan-certifie-rge-48744"
            className="garantie-rge"
          >
            <p className="violet">Reconnu</p>
            <p className="violet">Garant</p>
            <p className="env-gar">Environnement</p>
            <p className="violet">RGE</p>
          </a>
        </div>
        <div>
          <h1>
            Quelles sont les <span className="red">conditions</span> d’obtention
            du Crédit d’impôt ?
          </h1>
          <br />
          <h2>Logement concerné par le crédit d’impôt</h2>
          <p>
            Pour bénéficier le logement doit remplir les 2 conditions suivantes
            :{" "}
            <strong>
              il constitue votre habitation principale, et est achevé depuis
              plus de 2 ans
            </strong>
          </p>
          <br />
          <h2>Date des travaux</h2>
          <p>
            Le crédit d’impôt s’applique aux dépenses payées jusqu’au 31
            décembre 2017.
          </p>
          <br />
          <h2>Travaux</h2>
          <p>
            - Le crédit d’impôt s’applique aux dépenses payées jusqu’au 31
            décembre 2017.
          </p>
          <br />
          <p>
            - Les travaux doivent être réalisés obligatoirement par une
            entreprise <span>(Satelys)</span> ou par son sous-traitant.
          </p>
          <br />
          <p>
            - Pour certains travaux, l’entreprise doit être certifiée « RGE ».
          </p>
          <div className="block-impot">
            <div className="sep">
              <h2>Montant du Crédit d’impôt</h2>
              <p>
                La somme perçue dépendra de la solution d’économies d’énergie
                installée dans chez vous et de votre état civil.
              </p>
            </div>
            <h2>Taux</h2>
            <p>
              30 % du montant des dépenses éligibles (hors main d’œuvre sauf
              exceptions).
            </p>
            <div className="jauge">
              <div
                ref={ref}
                className={inView ? "jauge_aerovolta" : "jauge_vide"}
              >
                <p className="sizing">70%</p>
              </div>
            </div>
          </div>
          <div className="montant-maxi">
            <div>
              <h2>Montant maximum</h2>
              <p>Le montant des dépenses est plafonné à :</p>
              <br />
              <p>-8 000 € pour une personne célibataire, veuve ou divorcée</p>
              <p>16 000 € pour un couple soumis à imposition commune.</p>
              <br />
              <p>
                Cette somme est majorée de 400 € par personne à charge (200 €
                par enfant en résidence alternée).
              </p>
            </div>
            <div>
              <h2>Plafond</h2>
              <p>
                Ce plafond s’apprécie sur une période de 5 années de suite :
              </p>
              <br />
              <p>
                -Par exemple pour le calcul du crédit d’impôt de 2016, le
                plafond s’applique aux dépenses du 1er janvier 2012 au 31
                décembre 2016.
              </p>
              <p>16 000 € pour un couple soumis à imposition commune.</p>
              <br />
              <p>
                -Par exemple pour le calcul du crédit d’impôt de 2017, le
                plafond s’applique aux dépenses du 1er janvier 2013 au 31
                décembre 2017.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div ref={materiel} className="section-sub-4">
        <h1>Matériel éligible</h1>
        <div className="img-eco">
          <div className="mmmpb">
            <img
              alt="thermodynamique"
              src="./images/solutions/themodynamiques_3-1024x683.jpeg"
            />
          </div>
          <div className="absolute-rfl">
            <div className="text-ab">
              <h1>Économies d’énergie</h1>
              <p>Chaudière à haute performance énergétique (HPE)</p>
              <p>
                Chaudière à condensation sous réserve de devis accepté ou
                d’acompte versé avant 2016
              </p>
              <p>Chaudière à micro-cogénération gaz</p>
              <p>Appareil de régulation de chauffage</p>
            </div>
          </div>
        </div>
        <div className="img-eco">
          <div className="mmmpb">
            <img alt="poele a granule" src="./images/poele/poele1.jpg" />
          </div>
          <div className="absolute-rfl">
            <div className="text-ab">
              <h1>Autres dépenses</h1>
              <p>Équipement de raccordement à un réseau de chaleur</p>
              <p>Diagnostic de performance énergétique</p>
              <p>Borne de recharge de véhicules électriques</p>
              <p>Compteur individuel</p>
            </div>
          </div>
        </div>
        <div className="img-eco">
          <div className="mmmpb">
            <img
              alt="isolation comble"
              src="./images/solutions/isolation_ape.jpeg"
            />
          </div>
          <div className="absolute-rfl">
            <div className="text-ab">
              <h1>Isolation thermique</h1>
              <p>
                Matériel d’isolation thermique des parois opaques (plancher,
                plafond, mur, toiture) et des parois vitrées (fenêtre,
                porte-fenêtre, etc.)
              </p>
              <p>Volet isolant</p>
              <p>Porte d’entrée donnant sur l’extérieur</p>
              <p>Matériel de calorifugeage</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
