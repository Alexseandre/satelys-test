import GalleryCarousel from "../../Composants/GalleryCarousel/GalleryCarousel";
import videoIsolation from "../../assets/videos/videoIsolation.mp4";
import React, { useEffect } from "react";
import "./Isolation.css";
import Aos from "aos";
export default function Isolation() {
  const datas = [
    {
      id: 1,
      image: "./images/isolation/iso1.jpg",
      alt: "",
    },
    {
      id: 2,
      image: "./images/isolation/iso2.jpg",
      alt: "",
    },
  ];
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div className="photovoltaique">
      <div className="video_title">
        <video src={videoIsolation} autoPlay loop />
      </div>
      <div className="title_photovolatique">
        <h1>Isolation</h1>
        <h2>Des combles</h2>
      </div>
      <div className="otro ">
        <div className="text_photovolta">
          <h3>ISOLATION PAR Satelys</h3>
          <h4 data-aos="fade-up">Comment bien isoler son habitation</h4>
          <p>
            <span>L'isolation</span> est un élément clé de votre maison. Il faut
            y porter une attention particulière, c’est contribuer à la baisse
            des factures énergétiques pour un confort assuré en hiver comme en
            été.
          </p>

          <p>
            Une bonne isolation vous assurez un confort appréciable, en vous
            prémunissant contre les variations de température extérieure.
          </p>
          <br />
          <p>
            En <span>éviter les déperditions</span> d’énergie et en limitant les
            variations de température extérieure qui vous obligent à chauffer
            plus.
          </p>

          <p>
            Une maison bien isolée permet d’éviter les problèmes d’humidité, le
            développement de moisissures et de tâches diverses…
          </p>
          <br />
          <p>
            Une bonne isolation permet de <span>présever</span> les équipements
            de la maison et les revêtements…
          </p>
        </div>
      </div>
      <div className="container-carousel">
        <div data-aos-anchor-placement="top" data-aos="fade-left">
          <GalleryCarousel datas={datas} />
        </div>
      </div>
    </div>
  );
}
