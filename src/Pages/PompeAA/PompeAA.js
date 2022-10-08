import {
  IoWalkOutline,
  IoHomeOutline,
  IoNewspaperOutline,
} from "react-icons/io5";
import GalleryCarousel from "../../Composants/GalleryCarousel/GalleryCarousel";
import videoPmpaa from "../../assets/videos/videoPmpaa.mp4";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";
import Caract from "../../Composants/Block-cara/Caract";
import Aos from "aos";
export default function PompeAA() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const datas = [
    {
      id: 1,
      image: "./images/pmpaa/pmpaa1.webp",
      alt: "",
    },
    {
      id: 2,
      image: "./images/pmpaa/pmpaa2.webp",
      alt: "",
    },
    {
      id: 3,
      image: "./images/pmpaa/pmpaa3.webp",
      alt: "",
    },
    {
      id: 4,
      image: "./images/pmpaa/pmpaa4.webp",
      alt: "",
    },
    {
      id: 5,
      image: "./images/pmpaa/pmpaa5.webp",
      alt: "",
    },
  ];
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div className="photovoltaique">
      <div className="video_title">
        <video src={videoPmpaa} autoPlay loop />
      </div>
      <div className="title_photovolatique">
        <h1>Pompe à chaleur</h1>
        <h2>AIR/AIR</h2>
      </div>
      <div className="description_photovolatique">
        <div className="text_photovolta">
          <h3>POMPE À CHALEUR PAR SATELYS</h3>
          <h4 data-aos="fade-up">Tout savoir sur la pompe à chaleur</h4>
          <p>
            Le principe de la pompe à chaleur est d’extraire de l’énergie à
            l’extérieur du logement pour l’injecter à l’intérieur à l’aide d’un
            radiateur Une pompe à chaleur est un moyen de chauffage qui peut
            remplacer par exemple à la chaudière gaz ou au poêle à granulés de
            bois.
          </p>

          <br />
          <p>
            La pompe à chaleur air/air (climatisation réversible), car elle
            permet de faire du chaud pour hiver et du froid pour été. En mode
            chauffage elle va récupérer les calories de l’air extérieur pour
            chauffer l’air du logement. En mode froid ce sera l’inverse.
          </p>
          <br />
          <p>
            La pompe à chaleur air/air s’adapte à n’importe quel type
            d’habitation.
          </p>
        </div>
        <div className="img_description_photovolta">
          <img src="./images/pmpaa/pmpaa1.webp" alt="Pompe à chaleur" />
          <img src="./images/pmpaa/pmpaa2.webp" alt="Pompe à chaleur" />
        </div>
      </div>
      <div
        data-aos-anchor-placement="top-bottom"
        data-aos="fade-down"
        className="valeur-block"
      >
        <div className="content">
          <i ref={ref} className={inView ? `icone icone-anim` : "icone"}>
            <IoWalkOutline />
          </i>
          <h4>Diviser par 3 vos factures</h4>
          <p>
            En utilisant l’air (l’énergie gratuite), vous ne payez que
            l’électricité nécessaire à la circulation du fluide caloporteur pour
            faire fonctionner la pompe à chaleur air/air. Vous pouvez ainsi
            diviser vos factures de chauffage par 3.
          </p>
        </div>
        <div className="content">
          <i className={inView ? `icone icone-man` : "icone "}>
            <IoHomeOutline />
          </i>
          <h4>Notre rôle</h4>
          <p>
            Du projet d’étude jusqu’à l’installation, nous sommes à vos côtés
            afin de vous garantir un niveau de service optimal.
          </p>
        </div>
        <div className="content">
          <i className={inView ? `icone icone-anim` : "icone "}>
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
      <Caract></Caract>
      <div className="container-carousel">
        <div data-aos-anchor-placement="top" data-aos="fade-left">
          <GalleryCarousel datas={datas} />
        </div>
      </div>
    </div>
  );
}
