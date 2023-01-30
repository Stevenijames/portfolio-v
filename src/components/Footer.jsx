import { SlCallOut } from 'react-icons/sl'
import { GrFacebook } from 'react-icons/gr'
import { GoMarkGithub } from 'react-icons/go'
import { BsLinkedin } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
import { FiDownload } from 'react-icons/fi'
import resumeFile from '../assets/paul-ijames-software-engineer.pdf'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer-contributions">
        <h5>Contributions & Affiliations</h5>
        <ul>
          <li>
            <a href="https://globalhope.org/" target="_blank" rel="noreferrer">
              Global Hope
            </a>
          </li>
          <li>
            <a
              href="https://www.nature.org/en-us/about-us/where-we-work/united-states/colorado/"
              target="_blank"
              rel="noreferrer"
            >
              The Conservancy
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/UnitedHelpUkraine.org"
              target="_blank"
              rel="noreferrer"
            >
              United Help Ukraine
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/groups/Chromosome9pMinusNetwork/"
              target="_blank"
              rel="noreferrer"
            >
              Chromosome 9pminus Network
            </a>
          </li>
        </ul>
      </section>
      <section className="footer-content">
        <h3 className="email">
          <HiOutlineMail className="icon" />
          Email: spijames2021@gmail.com
        </h3>
        <h3 className="phone">
          <SlCallOut className="icon" />
          Phone: (720) 556-8285
        </h3>
        <a className="footer-button" href={resumeFile}>
          <button>
            Resume
            <FiDownload className="icon" />
          </button>
        </a>
      </section>
      <div className="icon-btn">
        <a href="https://www.facebook.com/spijames1" target="_blank" rel="noreferrer">
          <button className="footer-btn">
            <GrFacebook />
          </button>
        </a>
        <a href="https://github.com/Stevenijames" target="_blank" rel="noreferrer">
          <button className="footer-btn">
            <GoMarkGithub />
          </button>
        </a>
        <a
          href="https://www.linkedin.com/in/paul-ijames/"
          target="_blank"
          rel="noreferrer"
        >
          <button className="footer-btn">
            <BsLinkedin />
          </button>
        </a>
      </div>

      <section className="media">
        <h5>Media</h5>
        <ul>
          <li>
            <a href="https://youtu.be/mUA9CXEqvZM" target="_blank" rel="noreferrer">
              YouTube
            </a>
          </li>
          <li>
            <a
              href="https://open.spotify.com/artist/6Tn5Dy7vmNzUYoRHsVZYfI?si=UNPNhBCSRoKAZqk4DUjBew"
              target="_blank"
              rel="noreferrer"
            >
              Spotify
            </a>
          </li>
          <li>
            <a
              href="https://www.thebash.com/event-dj/dj-paul-ijames-ijames-productions"
              target="_blank"
              rel="noreferrer"
            >
              DJ
            </a>
          </li>
          <li>
            <a href="https://youtu.be/YdWhO9lK1J8" target="_blank" rel="noreferrer">
              More Media
            </a>
          </li>
        </ul>
      </section>
    </footer>
  )
}

export default Footer
