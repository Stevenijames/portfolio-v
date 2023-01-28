import "./Projects.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Card from "../components/Card";

const Projects = () => {
  return (
    <>
      <Nav />
      <main>
        <section className="project-cards-container">
      <Card img="http://localhost:5173/src/assets/headShot.png" title="p" description="I am a Full Stack Web Developer that has a passion for Frontend design. My langagues include HTML, CSS, JavaScript, Node.js, within modern frameworks React.js and Vue.js" />
      <Card img="http://localhost:5173/src/assets/headShot.png" title="p" description="I am a Full Stack Web Developer that has a passion for Frontend design. My langagues include HTML, CSS, JavaScript, Node.js, within modern frameworks React.js and Vue.js" />
      <Card img="http://localhost:5173/src/assets/headShot.png" title="p" description="I am a Full Stack Web Developer that has a passion for Frontend design. My langagues include HTML, CSS, JavaScript, Node.js, within modern frameworks React.js and Vue.js" />
      </section>
      </main>
      <Footer />
    </>
  );
};

export default Projects;
