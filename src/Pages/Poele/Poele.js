import React from 'react';
import './Poele.css'
import { IoFlameOutline } from "react-icons/io5";
import { IoEarthOutline } from "react-icons/io5";
import { IoServerOutline } from "react-icons/io5";
import videoPoele from "../../assets/videos/Poele.mp4";

const Poele = () => {
    return (
        <div className="photovoltaique">
            <div className="video_titlePoele">
                <video src={videoPoele} autoPlay loop />
            </div>
            <div className="titlePoele">
                <h1>Poêle à granulés</h1>
                <h2>SATELYS</h2>
            </div>
            <div className="descriptionPoele">
                <div className="textPoele">
                    <h3>POÊLE À GRANULÉS PAR SATELYS</h3>
                    <h4>Comment fonctionne les poêle à granulés</h4>
                    <p>
                        Le fonctionnement du <span>poêle à granulés</span> repose sur son système de vis sans fin. Elle achemine les granulés du réservoir jusqu'à la chambre de combustion. Le feu est alors activé grâce à une résistance électrique. Un ventilateur permet d'apporter l'oxygène nécessaire à la flamme dans la chambre de combustion.
                    </p>

                    <br />
                    <h4>Moins polluer</h4>
                    <p>
                        La combustion du bois est moins polluante que celle des énergies fossiles, c’est pourquoi ce système de chauffage est considéré comme une solution prometteuse capable de prendre plusieurs formes comme la chaudière à bois, le poêle à bois, <span> le poêle à granulés</span> ou poêle à pellets de bois.
                    </p>
                </div>
                <div className="img_description_photovolta">
                    <img src="./images/poele/poele2.jpeg" alt="Poêle a granulés" />
                    <img src="./images/poele/poele3.jpeg" alt="Poêle a granulés" />
                </div>
            </div>
            <div className="icon-block">
                <div className="icon-content iconPoele">
                    <i className="icon1" id='iconPoele'>
                        <IoEarthOutline />
                    </i>
                    <h4>Un geste pour la planète</h4>
                    <p>
                        En installant <span> le poêle à granulés</span> chez vous, vous contribuez à reduire votre empreinte carbone. Et la planête vous en remercie!
                    </p>
                </div>
                <div className="icon-content iconPoele">
                    <i className="icon2" id='iconPoele'>
                        <IoServerOutline />
                    </i>
                    <h4>Aides et subventions</h4>
                    <p>
                        Grâce à des aides locales de votre région (département ou commune),
                        vous pouvez réduire le coût installation de{" "}
                        <span> le poêle à granulés</span>.
                    </p>
                </div>
                <div className="icon-content iconPoele">
                    <i className="icon3" id='iconPoele'>
                        <IoFlameOutline />
                    </i>
                    <h4>Des économies d'énergies</h4>
                    <p>
                        <span>Le poêle à granulés</span> vous permettra de faire des économies sur vos factures d'électricité / chauffage.
                    </p>
                </div>
            </div>
            <div className='PoeleSchema'>
                <h2>Schéma explicatif</h2>
                <img src="./images/poele/poeleSchema.jpeg" alt="" />
            </div>
            <div className='PoelePuissance'>
                <h2>Photo complémentaire</h2>
                <img src="./images/poele/poelePuissance.png" alt="" />
            </div>
        </div>
    );
};

export default Poele;