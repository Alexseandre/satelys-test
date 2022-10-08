import React from "react";
import "./Qualifications.css";

const Qualifications = () => {
  return (
    <div className="qualifications">
      <div className="high">
        <div className="title">
          <img src="./favicon.png" alt="Logo" />
          Qualifications
        </div>
      </div>
      <div className="rge">
        <div className="text">
          <h2>R.G.E : Reconnu Garant de l’environnement</h2>
          <p>
            Vous avez un projet de construction ou de rénovation de votre
            habitat et vous souhaitez y installer des équipements utilisant des{" "}
            <span>énergies renouvelables</span>.
          </p>
          <br />
          <p>
            Afin d’aider le particulier à choisir une entreprise compétente pour
            réaliser ses travaux d’économie d’énergie, l’ADEME et l’État ont mis
            en place une charte d’engagement regroupant huit signes de qualité
            bénéficiant de la mention<span> RGE</span> « Reconnu Garant de
            l’environnement ».
          </p>
          <br />
          <p>
            <span>SATELYS</span> dispose de tous ces agréments et certifications
            pour vous garantir des conseils pointus en économie d’énergie et une
            installation de qualité par des experts compétents.
          </p>
        </div>
        <img src="./images/qualifications/RGE.jpeg" alt="logo RGE" />
      </div>
      <div className="qualibat">
        <img src="./images/qualifications/qualibat.png" alt="logo qualibat" />
        <div className="text">
          <h2>QUALIBAT</h2>
          <p>
            La certification <span>QUALIBAT</span> représente un label de
            qualification et de certifications qui permet aux entreprises
            exerçant dans le domaine de construction de valoriser leurs
            compétences techniques et professionnelles, leur gestion de la
            qualité et l’importance de leurs moyens financiers et humains auprès
            de leurs parties prenantes (clients, fournisseurs, banquiers, ….).
            Elle atteste en outre de leur respect des normes de construction en
            vigueur
          </p>
        </div>
      </div>
      <div className="assurance">
        <div className="text">
          <h2>ATTESTATION D’ASSURANCE – RESPONSABILITÉ DÉCENNALE</h2>
          <p>
            L’entreprise d’assurance ****** atteste que SATELYS n° SIREN
            435161450, 43 rue Galilée 59760 Grande-Synthe est titulaire d’un
            contrat d’assurance de responsabilité de nature décennale n° ***** /
            *** *****/*.
          </p>
        </div>
        <img src="./images/qualifications/assurance.jpeg" alt="assurance" />
      </div>
    </div>
  );
};

export default Qualifications;
