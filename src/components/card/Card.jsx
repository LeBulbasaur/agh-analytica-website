import "./card.css";

export default function Card({ name, description, image }) {
  return (
    <div id={name} className="card__body">
      <img src={image} alt="project" />
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
