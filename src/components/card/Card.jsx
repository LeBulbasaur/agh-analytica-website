import "./card.css";

export default function Card({ name, description, image }) {
  return (
    <div id={name} className="card__body">
      <img src={image} alt="project" />
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
