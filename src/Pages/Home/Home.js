import satelysVideo from "../../assets/videos/Satelys_video3.mp4";
import Services from "../../Composants/NosServices/Services";
import CarouselMe from "../../Composants/Carousel/Carousel";
import isoImg from "../../assets/img/iso9001.png";
import Valeur from "../../Composants/Valeurs/Valeur";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import "./Home.css";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div className="block-1">
      <div className="block-video">
        <video src={satelysVideo} autoPlay muted />
      </div>
      <Valeur />
      <div className="container-carousel">
        <div className="container-text">
          <h3 data-aos-anchor-placement="top" data-aos="fade-up" id="test">
            Nos solutions
          </h3>
          <p data-aos-anchor-placement="top" data-aos="fade-up">
            Satelys répond activement à la précarité énergétique en proposant
            des solutions efficace et de qualité pour la réduire la consommation
            d’énergie.
          </p>
        </div>

        <div data-aos-anchor-placement="top" data-aos="fade-up">
          <CarouselMe />
        </div>
      </div>
      <Services />
      {/* ************************************************************************************************* */}
      <div className="container-gage">
        <div>
          <h2>Gage de qualité</h2>
          <br />
          <p>
            La société <strong>Satelys</strong> s’entoure des meilleurs
            installateurs possédant les qualifications requises et nécessaires
            pour les travaux d’économie d’énergie.
          </p>
          <br />
          <p>
            L’état à mis en place une charte de qualité, nommé RGE (Reconnu
            Garant de l’environnement) afin de permettre aux particuliers de
            choisir facilement une entreprise compétente pour réaliser leurs
            travaux d’économies d’énergie.
          </p>
        </div>
        <a
          data-aos-anchor-placement="top"
          data-aos="fade-up"
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
      {/* ***************************************************************** */}
      <div className="container-iso">
        <div
          data-aos-anchor-placement="top"
          data-aos="zoom-in"
          className="container-iso-text"
        >
          <h3>
            Les travaux d’isolation sont la spécialité de{" "}
            <strong>Satelys</strong>
          </h3>
          <br />
          <br />
          <p>
            Nous mettons notre expertise à votre disposition pour optimaliser la
            performance énergétique de votre habitation.
            <br />
            Notre firme est certifiée <strong>ISO 9001</strong> en raison de
            notre attention à la qualité de notre travail et à la satisfaction
            de notre clientèle.
            <br />
            Nous vous accompagnons dans l’identification de vos besoins, la mise
            en place et le suivi de votre projet, et, bien sûr, dans la
            réalisation technique de vos travaux d’isolation.
          </p>
        </div>
        <div
          data-aos-anchor-placement="top"
          data-aos="flip-left"
          className="img-iso"
        >
          <div className="iso-img">
            <img src={isoImg} alt="Logo certification iso9001" />
          </div>
        </div>
      </div>
      {/* ****************************************************************** */}
      <div className="container-partage-all">
        <h2 className="title-partage">
          <span>Satelys</span> partage vos valeurs,
        </h2>
        <div className="container-service">
          <div data-aos-anchor-placement="top-bottom">
            <p
              className="valeurs-content
          "
              data-aos-anchor-placement="top-bottom"
              data-aos="fade-down"
            >
              Comme vous, notre équipe a à cœur de travailler dans le sens d’une
              société plus respectueuse de la nature. Nos projets énergétiques
              contribuent à réduire l’impact polluant des grandes compagnies.
              Ils constituent aussi une belle opportunité, économique et
              écologique, pour tous ceux qui ont envie d’optimiser la
              consommation énergétique de leur habitation.
            </p>
            <br />

            <p
              className="valeurs-content
          "
              data-aos-anchor-placement="top-bottom"
              data-aos="fade-down"
            >
              Vos projets nous tiennent à <span>cœur</span> et nous mettons
              notre expertise au service de leur réalisation. Nous sommes
              pilotés par un désir de qualité, en matière de travail effectué,
              et de satisfaction de la part de nos clients. Nos ingénieurs des
              travaux sont titulaires d’une expérience longue et fructueuse dans
              le domaine de l’isolation. Ce sont leurs compétences techniques et
              les valeurs de professionnalisme de Satelys qui vous garantissent
              un résultat optimal.
            </p>
          </div>
          <div
            className="valeurs-content
          "
          >
            <p data-aos-anchor-placement="top-bottom" data-aos="fade-down">
              Il nous importe de coordonner vos projets dans le respect
              minutieux des procédures et d’apporter le plus grand soin à
              l’aspect administratif de nos démarches. Vous serez, de cette
              façon, déchargé des inquiétudes liées à la gestion de chantier.
              Nos équipes sont formées selon une approche rigoureuse et fiable
              en vue de vous assurer un déroulement des travaux le plus serein
              possible.
            </p>

            <br />

            <p data-aos-anchor-placement="top-bottom" data-aos="fade-down">
              Notre manière de travailler se concrétise dans la notion
              d’accompagnement. Nous souhaitons créer, avec vous, un partenariat
              performant, visant à atteindre vos objectifs en matière
              d’efficacité énergétique. A travers l’écoute, les conseils, et la
              construction d’un projet conjoint, c’est une véritable synergie
              que nous mettons en place ensemble. Tout au long du processus,
              allant de l’audit jusqu’à la remise du chantier, vous bénéficierez
              d’un interlocuteur unique et constant, faisant partie de notre
              équipe.
            </p>

            <br />

            <p data-aos-anchor-placement="top-bottom" data-aos="fade-down">
              Notre flexibilité vis-à-vis de vos souhaits, notre sens du
              service, et notre envie d’allier la performance énergétique et le
              bénéfice des subventions CEE, sont les atouts qui vous permettront
              de nous faire confiance pour la réalisation de vos travaux
              d’isolation.
            </p>
          </div>
        </div>
      </div>
      <div className="2-img"></div>
    </div>
  );
}
