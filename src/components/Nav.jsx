import './Nav.css'
import img from '../assets/headShot.png'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <header>
      <h1 className="title">Paul Ijames Web Developer</h1>
      <div className="img-container">
        <img src={img} alt="face of a smiling developer" />
      </div>
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
