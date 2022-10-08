import React, { useState } from "react";
import { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  const [toggle, setToggle] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setToggle(false);
  }, [pathname]);

  const toggleFunc = () => {
    setToggle(!toggle);
  };
  return (
    <header>
      <NavLink to="/home">
        <img className="img-nav" src="./satelys_blue.png" alt="Logo satelys" />
      </NavLink>
      <div onClick={toggleFunc} className="burger-try">
        <label
          className={toggle ? "burgs-open" : "burgs"}
          htmlFor="menu-bar"
        ></label>
      </div>
      <nav className={toggle ? "navbar" : `navbar navbar-close`}>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "Isactive" : "")}
              to="/home"
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "Isactive" : "")}
              to="/solutions"
            >
              Nos solutions
            </NavLink>
            <ul>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "Isactive" : "")}
                  to="/photovoltaique"
                >
                  Photovoltaique
                </NavLink>
                <NavLink
                  className={({ isActive }) => (isActive ? "Isactive" : "")}
                  to="/aerovoltaique"
                >
                  Aérovoltaique
                </NavLink>
                <NavLink
                  className={({ isActive }) => (isActive ? "Isactive" : "")}
                  to="/pmpaa"
                >
                  Pompe à chaleur air/air
                </NavLink>
                <NavLink
                  className={({ isActive }) => (isActive ? "Isactive" : "")}
                  to="/pmpae"
                >
                  Pompes à chaleur air/eau
                </NavLink>
                <NavLink
                  className={({ isActive }) => (isActive ? "Isactive" : "")}
                  to="/isolation"
                >
                  Isolation
                </NavLink>
                <NavLink
                  className={({ isActive }) => (isActive ? "Isactive" : "")}
                  to="/thermo"
                >
                  Thermodynamique
                </NavLink>
                <NavLink
                  className={({ isActive }) => (isActive ? "Isactive" : "")}
                  to="/poele"
                >
                  Poêle à granulés
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "Isactive" : "")}
              to="/qualifications"
            >
              Nos qualifications
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "Isactive" : "")}
              to="/subvention"
            >
              Subvention
            </NavLink>
            <ul>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "Isactive" : "")}
                  to="/credit_impot"
                >
                  Le crédit impot
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "Isactive" : "")}
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
