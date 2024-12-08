import "./layout.css";
import "animate.css";
import { Outlet } from "react-router-dom";
import { useContext, useState } from "react";
import { NavbarContext } from "../../context/context";

import Navbar from "../../components/navbar/Navbar";

import logo from "../../img/analytica_logo1.png";
import textLogo from "../../img/text-logo.png";
import menuDark from "../../img/menu-dark.png";

function Layout() {
  const [isAnimating, setIsAnimating] = useState(false);
  const { navbar, setNavbar } = useContext(NavbarContext);

  const handleClick = () => {
    setIsAnimating(true);
    setNavbar(!navbar);
    setTimeout(() => setIsAnimating(false), 1000); // Czas trwania animacji w ms
  };

  return (
    <div className="Layout">
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
        <div className="main__body animate__animated animate__slideInRight">
          <div className="header__graphic">
            <img className="image__logo" src={logo} alt="club logo" />
            <img className="text__logo" src={textLogo} alt="club logo" />
            <div className="navbar__burgir__imitation"></div>
          </div>
          <div className="main__content">
            <Outlet />
          </div>
        </div>
      </div>
      <footer>
        <p>@2024 AGH Analytica</p>
      </footer>
    </div>
  );
}

export default Layout;
