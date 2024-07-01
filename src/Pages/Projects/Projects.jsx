import "./Projects.css";
import quizProject from './assets/quiz-project.png'
import bikroyProject from './assets/bikroy-project.png'
import jobPortal from './assets/job-portal.png'

const Projects = () => {
  return (
    <div>
      <div className="projects-section">
        <div className="projects-title">
          <div></div>
          <h1>MY PROJECTS</h1>
          <div></div>
        </div>
        <div className="projects-content">
          <div className="projects-cards">
            <div>
              <img src={quizProject} alt="" />
              <h2>Quiz Project</h2>
              <p>This is an quiz app to sharp your brain</p>
              <a href="https://thunderous-cocada-71487f.netlify.app/">Go Live</a>
              <a href="" className="details">Details</a>
            </div>
            <div>
              <img src={bikroyProject} alt="" />
              <h2>Bikroy Project</h2>
              <p>This is a online shope where people can sell their products</p>
              <a href="https://zippy-sfogliatella-fd731f.netlify.app/">Go Live</a>
              <a href="" className="details">Details</a>
            </div>
            <div>
              <img src={jobPortal} alt="" />
              <h2>Jop Portal</h2>
              <p>This is an jop circular website where people can post jobs and candidate can apply on it.</p>
              <a href="https://final-project-wl1x.onrender.com/">Go Live</a>
              <a href="" className="details">Details</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
