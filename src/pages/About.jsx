import './About.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Card from '../components/Card'
import CodingL from '../assets/img/codinglanguagesresized.jpg'
import FamilyPhoto from '../assets/img/beachphoto1.jpg'
import PhotoCollage from '../assets/img/paul-collage.jpg'

const About = () => {
  return (
    <>
      <Nav />

      <main>
        <section className="about-cards">
          <Card
            img={CodingL}
            title="Web Developer"
            description="I am a Full Stack Web Developer that has a passion for Frontend design. My langagues include HTML, CSS, JavaScript, Node.js, within modern frameworks like React.js and Vue.js. I have a passion for creating web apps."
          />
          <Card
            img={FamilyPhoto}
            title="Family - Travel"
            description="I love to make memories with my wife and two daughters. Last year I traveled 26,965 miles within the United States, visting 78 cities and 447 places, 236 which were new. In a nutshell, I work to have the ability to travel."
          />
          <Card
            img={PhotoCollage}
            title="At The Core"
            description="Faith, Family and Friends are key concepts that I believe in. I have worked as a musician for the greater part of my life and web developer since Fall 2020. I attribute my success to the ones who believed in me."
          />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default About
