import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousel.css";

export default function CarouselMe() {
  const datas = [
    {
      id: 1,
      alt: "Panneaux solaires Photovoltaïques",
      image: "./images/solutions/panneaux_solaires_photovoltaiques_ape_4.jpeg",
      title: "Panneaux solaires Photovoltaïques",
      text: "L’énergie solaire est disponible gratuitement partout. Grâce aux panneaux solaires photovoltaïques vous utilisez cette énergie pour produire de l’électricité et de la revendre à EDF pendant 20 ans",
    },
    {
      id: 2,
      alt: "Aerovoltaïque",
      image: "./images/solutions/aero.jpeg",
      title: "Aerovoltaïque",
      text: "En plus de produire de l’électricité, l’aérovoltaïque récupère la chaleur produite par la production d’électricité sous les panneaux photovoltaïques pour chauffer votre logement.",
    },
    {
      id: 3,
      alt: "Isolations des combles",
      image: "./images/solutions/isolation_ape.jpeg",
      title: "Isolation des combles",
      text: "Grâce à cette solution vous réduisez les pertes de chaleur qui se font par la toiture. Cette solution permet de faire le plus d’économies d’énergie pour un faible coût.",
    },
    {
      id: 4,
      alt: "Pompe à chaleur air air ",
      image: "./images/solutions/daikin_ape_enr_2-1024x683.jpeg",
      title: "Pompe à chaleur air/air",
      text: "La pompe à chaleur air/air (climatisation réversible), car elle permet de faire du chaud pour hiver et du froid pour été. En mode chauffage elle va récupérer les calories de l’air extérieur pour chauffer l’air du logement. En mode froid ce sera l’inverse.",
    },
    {
      id: 5,
      alt: "Buanderie",
      image: "./images/solutions/daikin_ape_enr_7-1024x683.jpeg",
      title: "Pompe à chaleur air/eau",
      text: "Capte les calories contenues dans l’air pour les transformer en chaleur avant de les restituer dans un circuit d’eau de chauffage qui va permettre d’alimenter un radiateur traditionnel, un plancher chauffant ou la production d’eau chaude sanitaire. Les modèles les plus performants peuvent chauffer une maison.",
    },
    {
      id: 6,
      alt: "Chauffe eau blanc thermodynamique",
      image: "./images/solutions/themodynamiques_3-1024x683.jpeg",
      title: "Chauffe-eau thermodynamique",
      text: "Le chauffe-eau thermodynamique est un appareil se servant des énergies renouvelables pour chauffer l’eau sanitaire. En effet, au lieu de faire appel à des résistances électriques comme le chauffe-eau classique, celui-ci présente un mini-pompe à chaleur, en haut de la cuve",
    },
    {
      id: 7,
      alt: "Poele a granulé",
      image: "./images/poele/poele1.jpg",
      title: "Poele a granulé",
      text: "Les poêles à granulés sont des appareils de chauffage bois parmi les plus performants en termes de rendement. Le granulé de bois étend un aggloméré maîtrisé en termes de matériaux, il assure une combustion sèche et complète permettant ainsi d'atteindre des rendements supérieurs à 80 % pour les poêles à bois, est supérieur à 90 % pour les chaudières bois à granulés",
    },
  ];
  return (
    <Carousel
      autoPlay={true}
      interval={3000}
      infiniteLoop
      thumbWidth={120}
      showIndicators={false}
      showStatus={false}
      useKeyboardArrows={true}
    >
      {datas.map((slide) => (
        <div key={slide.id}>
          <img src={slide.image} alt={slide.alt} />
          <div className="overlay">
            <h2 className="overlay-title">{slide.title}</h2>
            <p className="overlay-text">{slide.text}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
