import "./main.css";
import Card from "../card/Card";
import projectsText from "../../text-content/projects.json";
import mainText from "../../text-content/main.json";
import logo from "../../img/analytica_logo1.png";
import textLogo from "../../img/text-logo.png";
import "animate.css";

export default function Main({ language }) {
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
            <p>{main.contactContent}</p>
            <form
              id="contact-form"
              action="mailto:samociw626@digopm.com"
              method="POST"
              encType="multipart/form-data"
            >
              <input
                type="text"
                id="name"
                placeholder={main.formName}
                required
              />
              <input
                type="email"
                id="email"
                placeholder={main.formEmail}
                required
              />
              <textarea
                id="message"
                placeholder={main.formMessage}
                rows="5"
                resize="none"
                required
              ></textarea>
              <button type="submit" value="Submit">
                {main.formButton}
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
