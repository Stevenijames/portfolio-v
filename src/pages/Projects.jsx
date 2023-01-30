import './Projects.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import ProjectCard from '../components/ProjectCard'
import FoodOA from '../assets/img/Food-Order-App.png'
import FindAW from '../assets/img/find-a-word.png'
import GList from '../assets/img/Goal-List.png'
import DPlanner from '../assets/img/dayplanner.png'

const Projects = () => {
  return (
    <>
      <Nav />
      <main>
        <section className="project-cards-container">
          <ProjectCard
            img={FindAW}
            title="Find a Word"
            description="This dictionary app is built using Vue.js and makes axios calls to the Merrian Webster API."
            link1="https://github.com/Stevenijames/find-a-word"
            link2="https://find-a-word.netlify.app/"
          />
          <ProjectCard
            img={FoodOA}
            title="Food Order App"
            description="This app is built using React.js and makes use of useEffect, Context Api, useState and for styling CSS Modules. "
            link1="https://github.com/Stevenijames/foodOrderApp"
            link2="https://food-order-app-yummy.netlify.app/"
          />
          <ProjectCard
            img={GList}
            title="Goals List"
            description="This list tracker allows you to add and delete tasks with just a click of a button. Simple in design yet makes use of useState and conditional rendering design principals."
            link1="https://github.com/Stevenijames/goals-list"
            link2="https://pauls-goals-list.netlify.app"
          />
          <ProjectCard
            img={DPlanner}
            title="Day Planner"
            description="This Day Planner uses vanilla JavaScript, jQuery, and CSS styles. The keeps track of your hourly schedule throughout the day."
            link1="https://github.com/Stevenijames/day-planner"
            link2="https://stevenijames.github.io/day-planner/"
          />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Projects
