import './Card.css'

const Card = ({ title, img, description }) => {
  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <div className="card-img">
        <img src={img} />
      </div>

      <p className="card-description">{description}</p>
    </div>
  )
}

export default Card
