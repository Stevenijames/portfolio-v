import './Home.css'
import Card from '../components/Card'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import HomeImg from '../assets/img/businessphoto1.jpg'

const Home = () => {
  return (
    <>
      <Nav />
      <main className="home-main">
        <section className="section-main">
          <p>Languages / Tools</p>
          <ul className="section-ul">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Terminal</li>
            <li>Chrome Dev Tools</li>
            <li>NPM</li>
          </ul>
        </section>
        <section className="section-main-card">
          <Card
            img={HomeImg}
            title="Welcome to my Web Development Portfolio"
            description="Hi my name is Paul Ijames, last name pronounced like Im's. I am a Full Stack Web Developer and professional piano player"
          />
        </section>
        <section className="section-main">
          <p>Languages / Frameworks</p>
          <ul className="section-ul">
            <li>Node.js</li>
            <li>SQL</li>
            <li>Vue.js</li>
            <li>React.js</li>
            <li>Git</li>
            <li>Yarn</li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Home
