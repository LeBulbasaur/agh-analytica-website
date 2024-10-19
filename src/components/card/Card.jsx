import "./card.css";

export default function Card({ name, description }) {
  return (
    <div id={name} className="card__body">
      <img src="https://picsum.photos/300" alt="project" />
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
