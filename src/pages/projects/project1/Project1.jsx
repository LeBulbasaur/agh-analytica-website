import "./project1.css";
import { useContext } from "react";
import { LanguageContext } from "../../../context/context";
import projectsText from "../../../text-content/projects.json";
import Card from "../../../components/card/Card";

function Project1() {
  const { language } = useContext(LanguageContext);
  const projects =
    language === "polish" ? projectsText.polish : projectsText.english;

  const content = projects.items[0];

  return (
    <Card
      name={content.name}
      description={content.description}
      image={content.image}
    />
  );
}

export default Project1;
