import "./Nav.css";
import img from "../assets/headShot.png";
import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <header>
      <img src={img} className="headshot" alt="face of a smiling developer" />
      <h1 id="nav-title">Paul Ijames Web Developer</h1>
      <nav className="nav">
        <ul>
        <li>
            <Link to="/"><button>Home</button></Link>
          </li>
          <li>
            <Link to="/about"><button>About</button></Link>
          </li>
          <li>
            <Link to="/projects"><button>Projects</button></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
