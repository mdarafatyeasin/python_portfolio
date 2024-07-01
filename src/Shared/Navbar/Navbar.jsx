import "./Navbar.css";
import { useState } from "react";
// icons
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(true);

  return (
    <nav className="navbar">
      <h3 className="logo">Yeasin</h3>
      <ul
        onClick={() => setIsMobile(true)}
        className={isMobile ? "nav-links" : "nav-links-mobile"}
      >
        <li>
        <button className="button-85" role="button">Download CV</button></li>
      </ul>
      <button
        className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? <IoMenu size={40} /> : <RxCross2 size={40} />}
      </button>
    </nav>
  );
};

export default Navbar;
