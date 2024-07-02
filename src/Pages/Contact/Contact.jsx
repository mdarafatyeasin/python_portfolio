import "./Contact.css";
import { MdOutlineMail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="contact-title">
        <div></div>
        <h1>Contact Me</h1>
        <div></div>
      </div>
      <div className="contact-content">
        <div className="online">
          <div>
            <MdOutlineMail />
            <p>mdyeasinarafat723@gmail.com</p>
          </div>
          <div>
            <IoCallOutline />
            <p>+880 1770491801</p>
          </div>
        </div>
        <div className="offline">
          <IoLocationOutline />
          <p>Chittagong, Bangladesh</p>
        </div>
        <div className="end-title">
            <p>"Thanks for Scrolling."</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
