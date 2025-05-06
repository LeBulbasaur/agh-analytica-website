import "./layout.css";
import "animate.css";
import { Outlet } from "react-router-dom";
import { useContext, useState } from "react";
import {
  NavbarContext,
  LanguageContext,
  ContrastContext,
} from "../../context/context";

import Navbar from "../../components/navbar/Navbar";

import logo from "../../img/analytica_logo1.png";
import contrastLogo from "../../img/analytica_logo1-white.png";
import textLogo from "../../img/text-logo.png";
import contrastTextLogo from "../../img/text-logo-white.png";
import menuDark from "../../img/menu-dark.png";
import statuteText from "../../text-content/statute.json";

function Layout() {
  const [isAnimating, setIsAnimating] = useState(false);
  const { navbar, setNavbar } = useContext(NavbarContext);
  const { language } = useContext(LanguageContext);
  const { contrast, setContrast } = useContext(ContrastContext);

  const statute =
    language === "polish" ? statuteText.polish : statuteText.english;

  const handleClick = () => {
    setIsAnimating(true);
    setNavbar(!navbar);
    setTimeout(() => setIsAnimating(false), 1000); // Czas trwania animacji w ms
  };

  return (
    <div className={`Layout ${contrast ? "Layout__contrast" : ""}`}>
      <div className="Layout__content">
        <Navbar />
        <div
          className={`navbar__burgir ${
            isAnimating ? "animate__animated animate__swing" : ""
          }`}
          onClick={handleClick}
        >
          <img src={menuDark} alt="menu icon" />
        </div>

        <div className="navbar__imitation" />
        <div
          className={`main__body ${
            contrast ? "main__body__high__contrast" : ""
          } animate__animated animate__slideInRight`}
        >
          <div className="contrast__button__container">
            <button
              className="contrast__button contrast__button__off"
              onClick={() => setContrast(true)}
            >
              A
            </button>
            <button
              className="contrast__button contrast__button__on"
              onClick={() => setContrast(false)}
            >
              A
            </button>
          </div>
          <div className="header__graphic">
            <img
              className="image__logo"
              src={contrast ? contrastLogo : logo}
              alt="club logo"
            />
            <img
              className="text__logo"
              src={contrast ? contrastTextLogo : textLogo}
              alt="club logo"
            />
            <div className="navbar__burgir__imitation"></div>
          </div>
          <div className="main__content"></div>
          <Outlet />
        </div>
      </div>
      <footer className="footer">
        {/* zmiana stopki przy wyborze kontrastu */}
        {/* <footer
        className={`footer
         ${contrast ? "footer__high__contrast" : ""}
         `}
      > */}
        <p>@2024 AGH Analytica</p>
        <a href="/files/Regulamin.pdf">{statute.text}</a>
      </footer>
    </div>
  );
}

export default Layout;
