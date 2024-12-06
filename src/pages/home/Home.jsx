import "./home.css";
import { useContext } from "react";
import { LanguageContext } from "../../context/context";
import mainText from "../../text-content/main.json";

function Home() {
  const { language } = useContext(LanguageContext);

  const main = language === "polish" ? mainText.polish : mainText.english;

  return (
    <>
      <section id="information">
        <h2>{main.about}</h2>
        {main.information.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </section>
      <section id="contact">
        <h2>{main.contact}</h2>
        <p>{main.contactContent}</p>
        <form
          id="contact-form"
          action="mailto:samociw626@digopm.com"
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
    </>
  );
}

export default Home;
