import './ProjectCard.css'

const ProjectCard = ({ title, img, description, link1, link2 }) => {
  return (
    <div className="project-card">
      <h3 className="title">{title}</h3>
      <div className="img-container">
        <img src={img} />
      </div>

      <p className="description">{description}</p>
      <div className="btn-container">
        <a href={link1} target="_blank" rel="noreferrer">
          <button>GitHub</button>
        </a>
        <a href={link2} target="_blank" rel="noreferrer">
          <button>Website</button>
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
