import "./navbar.css";
import textContent from "../../text-content/navbar.json";
import textProjects from "../../text-content/projects.json";
import {
  LanguageContext,
  NavbarContext,
  ContrastContext,
} from "../../context/context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useWindowSize } from "../../hooks/useWindowSize";

export default function Navbar() {
  const navigate = useNavigate();
  const [width] = useWindowSize();
  const { language, setLanguage } = useContext(LanguageContext);
  const { navbar, setNavbar } = useContext(NavbarContext);
  const { contrast } = useContext(ContrastContext);

  const navigateSite = (e, path) => {
    e.preventDefault();
    if (path !== "/#contact") {
      window.scrollTo(0, 0);
    }
    navigate(path);
    if (width < 900) {
      setNavbar(!navbar);
    }
  };

  const text = language === "polish" ? textContent.polish : textContent.english;

  return (
    <div
      className="navbar__body"
      style={{
        transform: navbar ? "translateX(-100%)" : "none",
      }}
    >
      <div
        className={`navbar__box ${contrast ? "navbar__high__contrast" : ""}`}
      >
        <p>{text.contents}</p>
        <ol className="navbar__contents">
          <li>
            <a
              className={`navbar__link ${
                contrast ? "navbar__high__contrast" : ""
              }`}
              href="/"
              onClick={(e) => navigateSite(e, "/")}
            >
              {text.items[0]}
            </a>
          </li>
          <li>
            <p className="navbar__projects">{text.items[1]}</p>
          </li>
          <li>
            <ul className="navbar__contents__projects">
              {textProjects.english.items.map((item, index) => (
                <li key={index}>
                  -{" "}
                  <a
                    className={`navbar__link ${
                      contrast ? "navbar__high__contrast" : ""
                    }`}
                    href={`project${index + 1}`}
                    onClick={(e) => navigateSite(e, `project${index + 1}`)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </li>
          {/* <li>
            <a
              className={`navbar__link ${
                contrast ? "navbar__high__contrast" : ""
              }`}
              href="/recruitment"
              onClick={(e) => navigateSite(e, "/recruitment")}
            >
              {text.items[2]}
            </a>
          </li> */}
          <li>
            <a
              className={`navbar__link ${
                contrast ? "navbar__high__contrast" : ""
              }`}
              href="/#contact"
              onClick={(e) => navigateSite(e, "/#contact")}
            >
              {text.items[3]}
            </a>
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
