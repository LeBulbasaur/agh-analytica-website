import "./main.css";
import Card from "../card/Card";
import projectsText from "../../text-content/projects.json";
import mainText from "../../text-content/main.json";
import "animate.css";

export default function Main({ language }) {
  const projects =
    language === "polish" ? projectsText.polish : projectsText.english;

  const main = language === "polish" ? mainText.polish : mainText.english;

  return (
    <div className="main__body animate__animated animate__slideInRight">
      <div className="header-graphic">
        <svg viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg">
          <rect width="100%" height="100%" fill="#fff" />
          <circle cx="400" cy="100" r="80" fill="#1E1E1E" />
          <path
            d="M340 100 Q400 40 460 100 T580 100"
            stroke="#00693C"
            strokeWidth="4"
            fill="none"
          />
          <path
            d="M220 100 Q400 180 580 100"
            stroke="#A71930"
            strokeWidth="4"
            fill="none"
          />
          <circle cx="220" cy="100" r="20" fill="#1E1E1E" />
          <circle cx="580" cy="100" r="20" fill="#1E1E1E" />
        </svg>
      </div>
      <div className="main__content">
        <section id="information">
          <h1>AGH Analytica</h1>
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
