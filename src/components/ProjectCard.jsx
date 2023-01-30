import './ProjectCard.css'

const ProjectCard = ({ title, img, description }) => {
  return (
    <div className="project-card">
      <h3 className="title">{title}</h3>
      <div className="img-container">
        <img src={img} />
      </div>

      <p className="description">{description}</p>
      <div className="btn-container">
        <a>
          <button>Btn1</button>
        </a>
        <a>
          <button>Btn2</button>
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
