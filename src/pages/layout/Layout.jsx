import "./layout.css";
import "animate.css";
import { useContext } from "react";
import { LanguageContext } from "../../context/context";

import Navbar from "../../components/navbar/Navbar";

import mainText from "../../text-content/main.json";
import logo from "../../img/analytica_logo1.png";
import textLogo from "../../img/text-logo.png";

function Layout() {
  const { language } = useContext(LanguageContext);

  const main = language === "polish" ? mainText.polish : mainText.english;

  return (
    <div className="Layout">
      <div className="Layout__content">
        <Navbar />
        <div className="navbar__imitation" />
        <div className="main__body animate__animated animate__slideInRight">
          <div className="header__graphic">
            <img className="image__logo" src={logo} alt="club logo" />
            <img className="text__logo" src={textLogo} alt="club logo" />
          </div>
          <div className="main__content">
            <section id="information">
              <h2>{main.about}</h2>
              {main.information.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </section>
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
