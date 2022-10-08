import React, { useEffect } from "react";
import { IoAccessibilityOutline } from "react-icons/io5";
import { useInView } from "react-intersection-observer";
import { IoHammerOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import Aos from "aos";
import "./Valeur.css";

export default function Valeur() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <section className="block-valeur">
      <div
        data-aos="fade-right"
        data-aos-anchor-placement="center-bottom"
        className="text-block"
      >
        <h2>Nos valeurs</h2>
        <h3>Satelys</h3>
      </div>
      <div
        data-aos-anchor-placement="top-bottom"
        data-aos="fade-right"
        className="valeur-block"
      >
        <div className="content">
          <i ref={ref} className={inView ? `icone icone-anim` : "icone"}>
            <IoHomeOutline />
          </i>
          <h4>Satelys</h4>
          <p>
            Une société de services mise en place afin d’inciter les
            particuliers à faire des économies d’énergie sur le territoire
            national.
          </p>
        </div>
        <div className="content">
          <i className={inView ? `icone icone-man` : "icone "}>
            <IoAccessibilityOutline />
          </i>
          <h4>Notre rôle</h4>
          <p>
            Du projet d’étude jusqu’à l’installation, nous sommes à vos côtés
            afin de vous garantir un niveau de service optimal.
          </p>
        </div>
        <div className="content">
          <i className={inView ? `icone icone-anim` : "icone "}>
            <IoHammerOutline />
          </i>
          <h4>{`Nos solutions`}</h4>
          <p>
            Nous (Satelys) répondons activement à la précarité énergétique en
            proposant des solutions efficace et de qualité pour la réduire la
            consommation d’énergie.
          </p>
        </div>
      </div>
    </section>
  );
}
