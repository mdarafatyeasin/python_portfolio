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
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
          dolores obcaecati nesciunt nam esse blanditiis, eligendi fuga itaque
          qui cum dolorum, libero error exercitationem. Dolorem veritatis
          aspernatur laborum commodi molestiae.
        </p>
        <div className="social">
          <div>
            <a href="">
              <FaFacebook />
            </a>
          </div>
          <div>
            <FaGithub />
          </div>
          <div>
            <IoLogoLinkedin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
