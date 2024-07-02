import "./Banner.css";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { useLottie } from "lottie-react";
import hello from "../../assets/hellow.json";

const Banner = () => {
  const options = {
    animationData: hello,
    loop: true,
  };

  const { View } = useLottie(options);

  return (
    <div className="banner-section">
      <div className="banner-content">
        <h1>
          <div className="hello-anim">{View}</div> Hi!👋 This is
          <strong className="user-name"> Yeasin Arafat</strong>
        </h1>
        <p>
          Hey!!! This is me Md.Yeasin Arafat. Welcome to my portfolio, from here
          your can explore me more deeply. If you want me to work with your
          please contact with me I wold love to work with you.
        </p>
        <div className="social">
          <div>
            <a href="https://www.facebook.com/profile.php?id=100008908307991">
              <FaFacebook />
            </a>
          </div>
          <div>
            <a href="https://github.com/mdarafatyeasin?tab=repositories">
              <FaGithub />
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/md-yeasin-arafat-627067233/">
              <IoLogoLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
