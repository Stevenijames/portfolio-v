
import "./About.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Nav />
      <main>
      <p className="para">
        I am a Full Stack Web Developer that has a passion for Frontend design.
        My langagues include HTML, CSS, JavaScript, Node.js, within modern
        frameworks React.js and Vue.js
      </p>
      </main>
      <Footer />
    </>
  );
};

export default About;
