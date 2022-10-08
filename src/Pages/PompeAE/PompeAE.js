import videoPmpae from "../../assets/videos/videoPmpae.mp4";
import { useInView } from "react-intersection-observer";
import { IoNewspaperOutline } from "react-icons/io5";
import React, { useEffect } from "react";
import Aos from "aos";
export default function PompeAE() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div className="photovoltaique">
      <div className="video_title">
        <video src={videoPmpae} autoPlay loop />
      </div>
      <div className="title_photovolatique">
        <h1>Pompe à chaleur</h1>
        <h2>AIR/EAU</h2>
      </div>
      <div className="description_photovolatique">
        <div className="text_photovolta">
          <h3>POMPE À CHALEUR AIR/EAU PAR Satelys</h3>
          <h4>En résumé</h4>
          <p>
            La pompe à chaleur air/eau capte les calories contenues dans l’air
            pour les transformer en chaleur avant de les restituer dans un
            circuit d’eau de chauffage qui va permettre d’alimenter un radiateur
            traditionnel, un plancher chauffant ou la production d’eau chaude
            sanitaire. Les modèles les plus performants peuvent chauffer une
            maison.
          </p>

          <br />
          <p>
            La pompe à chaleur air/eau permet de diviser vos factures de
            chauffage par 3. Cet système efficace permet d’amortir
            l’investissement rapidement.
          </p>
          <br />
          <p>La pompe à chaleur air/eau est le plus répandu en France.</p>
        </div>
        <div className="img_description_photovolta">
          <img src="./images/pmpaa/pmpaa1.webp" alt="Pompe à chaleur" />
          <img src="./images/pmpaa/pmpaa2.webp" alt="Pompe à chaleur" />
        </div>
      </div>
      <div
        data-aos-anchor-placement="top-bottom"
        data-aos="fade-up"
        className="valeur-block"
      >
        <div className="content">
          <i ref={ref} className={inView ? `icone icone-anim` : "icone "}>
            <IoNewspaperOutline />
          </i>
          <h4>Quelque soit votre habitation</h4>
          <p>
            Il existe toutes sortes de pompes à chaleur air/air et de toutes les
            tailles. Certains appareils sont prévus pour rafraîchir et chauffer
            une maison avec plusieurs pièces et d’autres pour des appartements.
          </p>
        </div>
      </div>
      <div>
        <div
          data-aos-anchor-placement="top-bottom"
          data-aos="fade-left"
          className="block-caract"
        >
          <div className="container1-caract">
            <div className="container-text-caract">
              <h2>
                Grâce à la PAC air/eau, divisées par 3 vos factures de chauffage
              </h2>
              <br />
              <p>
                <strong>La pompe à chaleur air/eau </strong> est un système très
                performant et très économe. Elle vous permet de diviser vos
                factures de chauffage par 3. Ces économies permettent d’amortir
                très rapidement le prix de la pompe à chaleur.
              </p>
            </div>
          </div>
          <div className="container-5">
            <h2>Crédit d’impôt à 30%</h2>
            <div className="container-avantage">
              <div className="text-avantage">
                <p>
                  Le <strong>crédit d’impôt</strong> pour une pompe à chaleur
                  air/eau est de <strong>30%</strong> . Couplé aux autres aides
                  telles que les primes énergie, éco-prêt à taux zéro etc,
                  permettent d’amortir de façon importante le prix d’achat de
                  votre pompe à chaleur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
