import './Projects.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
  return (
    <>
      <Nav />
      <main>
        <section className="project-cards-container">
          <ProjectCard
            img="http://localhost:5173/src/assets/img/Food-Order-App.png"
            title="Food Order App"
            description="This app is built using React.js and makes use of useEffect, Context Api, useState and for styling CSS Modules. "
          />
          <ProjectCard
            img="http://localhost:5173/src/assets/img/Music-App.png"
            title="Music App"
            description="A music app which built using Vue.js and makes use of Store and ...for keeping track of state management"
          />
          <ProjectCard
            img="http://localhost:5173/src/assets/img/find-a-word.png"
            title="Find a Word"
            description="This dictionary app is built using Vue.js and makes axios calls to the Merrian Webster API."
          />
          <ProjectCard
            img="http://localhost:5173/src/assets/img/Todo_tracker.png"
            title="Goals List"
            description="This list tracker allows you to add and delete tasks with just a click of a button. Simple in design yet makes use of useState and conditional rendering design principals."
          />
          <ProjectCard
            img="http://localhost:5173/src/assets/img/dayplanner.png"
            title="Day Planner"
            description="This Day Planner uses vanilla JavaScript, jQuery, and CSS styles. The keeps track of your hourly schedule throughout the day."
          />
          <ProjectCard
            img="http://localhost:5173/src/assets/img/worthyOrigin.png"
            title="Worthy Origin"
            description="Worthy Origin is an app that uses Whole Foods API to track a users shopping items list. This app uses JSON data to determine the carbon footprint of food items."
          />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Projects
