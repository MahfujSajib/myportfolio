import React from "react";
import resume from "../../assets/mdsajibkhan-resume.pdf";
import meimg from "../../assets/myimg.jpg";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
// import {SiNetlify} from 'react-icons/si';
import "./Header.css";
const Header = () => {
  return (
    <header>
      <div className="container">
        <h4>Hello, I'm</h4>
        <h2 style={{ color: "#4db5ff" }}>Mahfuj Khan Sajib</h2>
        <h5 className="text-light">MERN Stack Developer</h5>
        <div className="download-btn">
          <button className="downloadresumebtn">
            <a className="downloadresume" href={resume} download>
              Download Resume
            </a>
          </button>
          <button className="downloadresumebtn">
            <a className="downloadresume" href="#contact">
              Let's talk
            </a>
          </button>
        </div>
        <div className="socialicons">
          <a
            className="icons"
            href="https://www.linkedin.com/in/mahfuj-khan-sajib/"
            target="_blank "
          >
            <BsLinkedin></BsLinkedin>
          </a>
          <a
            className="icons"
            href="https://github.com/MahfujSajib"
            target="_blank"
          >
            <BsGithub></BsGithub>
          </a>
          {/* <a className="icons" href="https://github.com/MahfujSajib" target="_blank"><SiNetlify></SiNetlify></a> */}
        </div>
        <div className="me">
          <img className="meimg" src={meimg} alt="me" />
        </div>

        <a href="#contact" className="scroll-down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
