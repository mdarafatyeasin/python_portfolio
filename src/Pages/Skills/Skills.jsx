import "./Skills.css";
import c from "./assets/c.png";
import cpp from "./assets/c++.png";
import python from "./assets/py.png";
import js from "./assets/js.png";
import django from "./assets/dj.png";
import mySQL from "./assets/mysql.png";
import postgre from "./assets/postgre.png";
import react from "./assets/react.png";
import html from "./assets/html.png";
import css from "./assets/css.png";

const Skills = () => {
  return (
    <div className="skills-section">
      <div className="skills-title">
        <div></div>
        <h1>SKILLS</h1>
        <div></div>
      </div>
      <div className="skills-content">
        <div className="skills-cards">
          <div>
            <img src={c} alt="C" /><p>C</p>
          </div>
          <div>
            <img src={cpp} alt="C++" /><p>C++</p>
          </div>
          <div>
            <img src={python} alt="Python" /><p>Python</p>
          </div>
          <div>
            <img src={js} alt="JavaScript" /><p>JavaScript</p>
          </div>
          <div>
            <img src={django} alt="Django" /><p>Django</p>
          </div>
          <div>
            <img src={mySQL} alt="MySQL" /><p>MySQL</p>
          </div>
          <div>
            <img src={postgre} alt="PostgreSQL" /><p>PostgreSQL</p>
          </div>
          <div>
            <img src={react} alt="React" /><p>React</p>
          </div>
          <div>
            <img src={html} alt="HTML" /><p>HTML</p>
          </div>
          <div>
            <img src={css} alt="CSS" /><p>CSS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
