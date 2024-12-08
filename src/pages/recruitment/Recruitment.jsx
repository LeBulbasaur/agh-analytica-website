import "./recruitment.css";
import { useContext } from "react";
import { LanguageContext } from "../../context/context";
import recruitmentText from "../../text-content/recruitment.json";

function Recruitment() {
  const { language } = useContext(LanguageContext);
  const text =
    language === "polish" ? recruitmentText.polish : recruitmentText.english;

  return (
    <section id="recruitment__form">
      <h2>{text.title}</h2>
      <p>{text.content}</p>
      <div className="iframe__container">
        <iframe
          title="recuitment from"
          // src="https://www.onet.pl"
          src="https://forms.office.com/Pages/ResponsePage.aspx?id=PwOxgOAhgkq7wPBf3M07yPOzoSbdEtlGrXP-YcZGUXdUNVVJMkMxWTlUUExIVDdVRlU2S080QUlaVi4u&embed=true"
          frameBorder="0"
          marginWidth="0"
          marginHeight="0"
        >
          {" "}
        </iframe>
      </div>
    </section>
  );
}

export default Recruitment;
