import { SlCallOut } from 'react-icons/sl'
import { GrFacebook } from 'react-icons/gr'
import { GoMarkGithub } from 'react-icons/go'
import { BsLinkedin } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
import { FiDownload } from 'react-icons/fi'
import resumeFile from '../assets/ijames-software-engineer.pdf'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer-contributions">
        <h5>Contributions & Affiliations</h5>
        <ul>
          <li>Global Hope</li>
          <li>The Conservancy</li>
          <li>United Help Ukraine</li>
          <li>Chromosome 9pminus Network</li>
        </ul>
      </section>
      <section className="footer-content">
        <h2 className="footer-title">Thanks for visiting my page</h2>
        <h3 className="email">
          <HiOutlineMail className="icon" />
          Email: spijames2021@gmail.com
        </h3>
        <h3 className="phone">
          <SlCallOut className="icon" />
          Phone: (720) 556-8285
        </h3>
        <a className="footer-button" href={resumeFile}>
          Resume
          <FiDownload className="icon" />
        </a>
        <button className="footer-btn">
          <GrFacebook />
        </button>
        <button className="footer-btn">
          <GoMarkGithub />
        </button>
        <button className="footer-btn">
          <BsLinkedin />
        </button>
      </section>

      <section className="media">
        <h5>Media</h5>
        <ul>
          <li>
            <a href="https://youtu.be/mUA9CXEqvZM" target="_blank" rel="noreferrer">
              YouTube
            </a>
          </li>
          <li>Spotify</li>
          <li>DJ</li>
          <li>Youtube & More</li>
        </ul>
      </section>
    </footer>
  )
}

export default Footer
