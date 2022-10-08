import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <hr />
      <p className="choisir">
        Choisissez le meilleur avec <span>Satelys</span> pour vos projets de
        constuction ou rénovation de votre habitat.
      </p>
      <hr />
      <div className="foot">
        <div className="contact">
          <h4>Satelys</h4>
          <ul>
            <li>Tel : 01-00-00-00-00</li>
            <li>43 rue Galilée</li>
            <li>59760 Grande-Synthe</li>
            <li>Email : Direction.satelys@gmail.com</li>
          </ul>
        </div>

        <div className="menu">
          <h4>Menu</h4>
          <ul>
            <li>
              <NavLink to="/home">
                <p className="footLi"> Acceuil</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/solutions">
                <p className="footLi"> Solutions</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/qualifications">
                <p className="footLi"> Nos qualifications</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/credit_impot">
                <p className="footLi"> Le crédit impôt</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact">
                <p className="footLi"> Contact</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/mentions">
                <p className="footLi"> Mentions légales d'utilisation</p>
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="solution">
          <NavLink to="/solutions">
            <h4 className="footLi"> Nos solutions</h4>
          </NavLink>
          <ul>
            <li>
              <NavLink to="/photovoltaique">
                <p className="footLi"> Photovoltaïque</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/aerovoltaique">
                <p className="footLi"> Aerovoltaïque</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/pmpaa">
                <p className="footLi"> Pompe à chaleur air/air</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/pmpae">
                <p className="footLi"> Pompe à chaleur air/eau</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/isolation">
                <p className="footLi"> Isolation</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/thermo">
                <p className="footLi"> Thermodynamique</p>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="certif">
        <img src="./satelys_white.png" alt="Logo satelys" />
        <p>© 2022 Satelys</p>
      </div>
    </div>
  );
};

export default Footer;
