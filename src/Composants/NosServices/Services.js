import { useEffect } from "react";
import React from "react";
import Aos from "aos";
import "./Services.css";

export default function Services() {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  const datas = [
    {
      id: 1,

      title1:
        "Un accompagnement par des professionnels du développement durable :",
      text1:
        "Les démarches administratives et techniques sont encadrées par une équipe de conseillers et de techniciens spécialisés.",
      title2: " Une étude sur mesure :",
      text2:
        "Nos équipes de techniciens vous établiront un diagnostic personnalisé adapté à vos besoins et à votre budget.",
      title3: "Un suivi pas à pas:",
      text3:
        "Dans le cadre du suivi de votre dossier, vous avez à tout moment la possibilité de contacter “votre conseiller”. Dans un souci de faciliter vos démarches, vous bénéficiez d’un interlocuteur dédié tout au long de votre projet.",
    },
    {
      id: 2,
      title1: "Financement sur mesure",
      text1:
        "Satelys vous accompagne dans le financement de votre projet afin de réaliser vos travaux de rénovation. Grâce à nos partenaires financiers spécialisés en éco-financement.",
      title2: "Notre gage de qualité",
      text2:
        "Les produits référencés au sein de Satelys respectent tous l’ensemble des critères d’exigence du groupe. Les marques sélectionnées sont sans conteste les leaders sur le marché des économies d’énergie.",
      title3: "Démarches subventions",
      text3:
        "Nous vous accompagnons également pour l’ensemble des démarches administratives afin que vous puissiez obtenir les subventions allouées dans le cadre de votre projet.",
    },
    {
      id: 3,
      title1: "Satelys, vous garantit la tranquillité :",
      text1:
        "Tous nos produits présentent une garantie fabricant de 2 à 20 ans, variable selon la catégorie des produits sélectionnés. La qualité de nos produits est notre préoccupation première, c’est une valeur primordiale dans la conception et réalisation de votre projet.",
      title2: "S.A.V maintenance",
      text2:
        "Sur simple appel au **.**.**.**.**, un conseiller répond à toutes vos questions relatives à l’installation, l’utilisation ou à l’entretien de votre matériel.",
      title3: "Un réseau de S.A.V sur toute la France :",
      text3:
        "À travers un large réseau d’artisans partenaires, Satelys s’étend sur toute la France, afin de vous offrir les meilleurs services de dépannage et de maintenance de votre installation.",
    },
  ];
  return (
    <div className="container-serv-all">
      <div className="wave wave5"></div>
      <div className="wave wave6"></div>
      <div className="wave wave7"></div>
      <div className="wave wave8"></div>
      <div className="title-services">
        <h2>Nos services</h2>
      </div>
      <div className="container-service">
        {datas.map((data) => (
          <div
            data-aos-anchor-placement="top-bottom"
            data-aos="fade-right"
            key={data.id}
            className="services-div"
          >
            <h3>{data.title1}</h3>
            <br />
            <p>{data.text1}</p>
            <br />
            <h3>{data.title2}</h3>
            <br />
            <p>{data.text2}</p>
            <br />
            <h3>{data.title3}</h3>
            <br />
            <p>{data.text3}</p>
          </div>
        ))}
      </div>
      <div className="wave wave1"></div>
      <div className="wave wave2"></div>
      <div className="wave wave3"></div>
    </div>
  );
}
