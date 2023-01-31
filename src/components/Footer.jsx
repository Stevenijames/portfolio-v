import { SlCallOut } from 'react-icons/sl'
import { GrFacebook } from 'react-icons/gr'
import { GoMarkGithub } from 'react-icons/go'
import { BsLinkedin } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
import { FiDownload } from 'react-icons/fi'
import resumeFile from '../assets/paul-ijames-software-engineer.pdf'
import FooterCard from './FooterCard'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <section className="footer-content">
        <h3 className="email">
          <span className="info-first">
            <HiOutlineMail className="icon inline-block" />
            Email:{' '}
          </span>
          <span className="info-second">spijames2021@gmail.com</span>
        </h3>
        <h3 className="phone">
          <span className="info-first">
            <SlCallOut className="icon inline-block" />
            Phone:{' '}
          </span>
          <span className="info-second">(720) 556-8285</span>
        </h3>
        <a href={resumeFile}>
          <button className="resume-button">
            Resume
            <FiDownload className="icon inline-block" />
          </button>
        </a>
        <div className="icon-container">
          <a href="https://www.facebook.com/spijames1" target="_blank" rel="noreferrer">
            <button className="social-btn">
              <GrFacebook />
            </button>
          </a>
          <a href="https://github.com/Stevenijames" target="_blank" rel="noreferrer">
            <button className="social-btn">
              <GoMarkGithub />
            </button>
          </a>
          <a
            href="https://www.linkedin.com/in/paul-ijames/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="social-btn">
              <BsLinkedin />
            </button>
          </a>
        </div>
      </section>

      <section className="media">
        <h5>Media</h5>
        <ul>
          <li>
            <a href="https://youtu.be/mUA9CXEqvZM" target="_blank" rel="noreferrer">
              <FooterCard title="Youtube" />
            </a>
          </li>
          <li>
            <a
              href="https://open.spotify.com/artist/6Tn5Dy7vmNzUYoRHsVZYfI?si=UNPNhBCSRoKAZqk4DUjBew"
              target="_blank"
              rel="noreferrer"
            >
              <FooterCard title="Spotify" />
            </a>
          </li>
          <li>
            <a
              href="https://www.thebash.com/event-dj/dj-paul-ijames-ijames-productions"
              target="_blank"
              rel="noreferrer"
            >
              <FooterCard title="DJ" />
            </a>
          </li>
          <li>
            <a href="https://youtu.be/YdWhO9lK1J8" target="_blank" rel="noreferrer">
              <FooterCard title="More Media" />
            </a>
          </li>
        </ul>
      </section>
      <section className="footer-contributions">
        <h5>Contributions & Affiliations</h5>
        <ul>
          <li>
            <a href="https://globalhope.org/" target="_blank" rel="noreferrer">
              <FooterCard title="Global Hope" />
            </a>
          </li>
          <li>
            <a
              href="https://www.nature.org/en-us/about-us/where-we-work/united-states/colorado/"
              target="_blank"
              rel="noreferrer"
            >
              <FooterCard title="The Nature Conservancy" />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/UnitedHelpUkraine.org"
              target="_blank"
              rel="noreferrer"
            >
              <FooterCard title="United Help Ukraine" />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/groups/Chromosome9pMinusNetwork/"
              target="_blank"
              rel="noreferrer"
            >
              <FooterCard title="Chromosome 9pminus Network" />
            </a>
          </li>
        </ul>
      </section>
    </footer>
  )
}

export default Footer
