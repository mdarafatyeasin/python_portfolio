import "./About.css";
import profilePicture from "../../assets/profile_picture.jpg";

const About = () => {
  return (
    <div className="about-section">
      <div className="about-content">
        {/* <hr /> */}
        <div className="content">
          <div className="img">
            <img src={profilePicture} />
          </div>
          <div className="text">
            <h1>Who am I ?</h1>
            <p>
              Well, my name is Md.Yeasin Arafat. I'm 22 years old. I'm an
              innovative web developer while still studying. I did my 10+
              projects coded primarily with javascript, react, node js, MongoDB,
              Firebase, and some frameworks like daisy UI, tailwind, and
              bootstrap. And I’m interested in learning much more about
              technology and programming languages like python, PHP, NextJS, Vue
              js, etc. I will keep this learning process consistent.
            </p>
            <div className="cv-button">
              <a href="/public/Md.Yeasin_Arafat (Resume).pdf" download>
                <button>Download CV</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
