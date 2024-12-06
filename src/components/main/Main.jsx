import "./main.css";
import "animate.css";
import { useContext } from "react";
import { LanguageContext } from "../../context/context";
import Card from "../card/Card";
import projectsText from "../../text-content/projects.json";
import mainText from "../../text-content/main.json";
import logo from "../../img/analytica_logo1.png";
import textLogo from "../../img/text-logo.png";

export default function Main() {
  const { language } = useContext(LanguageContext);

  const projects =
    language === "polish" ? projectsText.polish : projectsText.english;

  const main = language === "polish" ? mainText.polish : mainText.english;

  return (
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
        <section id="projects">
          <h2>{main.project}</h2>
          <div className="main__cards__container">
            {projects.items.map((item, index) => (
              <Card
                key={index}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </div>
        </section>
        <section id="contact">
          <div className="contact__form">
            <h2>{main.contact}</h2>
            <p>{main.contactContentNoForm}</p>
            <p id="mail__paragraph">{main.mail}</p>
          </div>
        </section>
      </div>
    </div>
  );
}
