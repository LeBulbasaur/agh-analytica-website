import "./navbar.css";
import "animate.css";
import textContent from "../../text-content/navbar.json";
import textProjects from "../../text-content/projects.json";
import { LanguageContext } from "../../context/context";
import { useContext } from "react";

export default function Navbar() {
  const { language, setLanguage } = useContext(LanguageContext);
  const text = language === "polish" ? textContent.polish : textContent.english;

  return (
    <div className="navbar__body">
      <div className="navbar__box animate__animated animate__slideInDown">
        <p>{text.contents}</p>
        <ol className="navbar__contents">
          <li>
            <a href="#information">{text.items[0]}</a>
          </li>
          <li>
            <a href="#projects">{text.items[1]}</a>
          </li>
          <li>
            <ul className="navbar__contents__projects">
              {textProjects.english.items.map((item, index) => (
                <li key={index}>
                  - <a href={"#" + item.name}>{item.name}</a>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <a href="#contact">{text.items[2]}</a>
          </li>
        </ol>
        <div className="navbar__language">
          <p>
            <span
              className="flag lang_polish"
              onClick={() => {
                setLanguage("polish");
                window.localStorage.setItem("language", "polish");
              }}
            >
              🇵🇱
            </span>{" "}
            <span
              className="flag lang_english"
              onClick={() => {
                setLanguage("english");
                window.localStorage.setItem("language", "english");
              }}
            >
              🇬🇧
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
