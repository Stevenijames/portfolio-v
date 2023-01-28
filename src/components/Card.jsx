import "./Card.css";

const Card = ({title, img, description}) => {

  return <div className="card">
    <h3>{title}</h3>
    <img src={img} />
    <p>{description}</p>
  </div>;
};

export default Card;
