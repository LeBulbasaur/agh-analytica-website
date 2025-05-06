import "./home.css";
import { useContext } from "react";
import { LanguageContext } from "../../context/context";
import mainText from "../../text-content/main.json";

function Home() {
  const { language } = useContext(LanguageContext);

  const main = language === "polish" ? mainText.polish : mainText.english;

  return (
    <div className="home__container">
      <section id="information">
        <h2>{main.about}</h2>
        {main.information.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
        <div className="img__team__container">
          <img
            src={process.env.PUBLIC_URL + "img/ekipa.jpg"}
            alt="ekipa analytica"
            className="img__analytica__team"
          />
        </div>
      </section>
      <section id="contact">
        <h2>{main.contact}</h2>
        <p>{main.contactContent}</p>
        <form
          id="contact-form"
          action="mailto:analytica@agh.edu.pl"
          method="POST"
          encType="multipart/form-data"
        >
          <input type="text" id="name" placeholder={main.formName} required />
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
      </section>
    </div>
  );
}

export default Home;
