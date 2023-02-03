import './Nav.css'
import img from '../assets/headShotEdit.png'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <header>
      <div className="img-home">
        <img src={img} alt="face of a smiling developer" />
      </div>
      <span className="title-container">
        <h1>Paul Ijames Web Developer</h1>
      </span>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">
              <button>Home</button>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <button>About</button>
            </Link>
          </li>
          <li>
            <Link to="/projects">
              <button>Projects</button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav
