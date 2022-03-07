import React from "react";
import resume from "../../assets/mdsajibkhan-resume.pdf";
import meimg from '../../assets/meimg-removebg.png';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import "./Header.css";
const Header = () => {
  return (
    <header>
      <div className="container">
        <h4>Hello, I'm</h4>
        <h2>Mahfuj Khan Sajib</h2>
        <h5 className="text-light">MERN Stack Developer</h5>
        <div className="download-btn">
          <button className="downloadresumebtn">
            <a className="downloadresume" href={resume} download>
              Download Resume
            </a>
          </button>
          <button className="downloadresumebtn">
            <a className="downloadresume" href="#contact">Let's talk</a>
          </button>
        </div>
        <div className="socialicons">
          <a href="https://github.com/MahfujSajib"><BsLinkedin></BsLinkedin></a>
          <a href="https://github.com/MahfujSajib"><BsGithub></BsGithub></a>
          <a href="https://github.com/MahfujSajib"><BsGithub></BsGithub></a>
        </div>
        <div className="me">
          <img src={meimg} alt='me' />
        </div>

        <a href="#contact" className="scroll-down">Scroll Down</a>
        
      </div>
    </header>
  );
};

export default Header;

