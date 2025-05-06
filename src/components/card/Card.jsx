import "./card.css";
import { ContrastContext } from "../../context/context";
import { useContext } from "react";

export default function Card({ name, description, image }) {
  const { contrast } = useContext(ContrastContext);

  return (
    <div
      id={name}
      className={`card__body ${contrast ? "card__body__high__contrast" : ""}`}
    >
      <img src={process.env.PUBLIC_URL + image} alt="project" />
      {/* <img src={require(`${image}`)} alt="project" /> */}
      <div>
        <h2>{name}</h2>
        {description.map((item, index) => (
          <div key={index}>
            <h4>{item.header}</h4>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
