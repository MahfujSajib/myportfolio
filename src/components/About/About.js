import React from "react";
import img from "../../assets/myimg.jpg";
import { FaAward } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { AiOutlineProject } from "react-icons/ai";
import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="aboutme-header">
        <h5>Get to Know</h5>
        <h2 style={{ color: "aqua" }}>About Me</h2>
      </div>
      <div className="experience-display">
        <div className="image">
          <img className="myimage" src={img} alt="" />
        </div>
        <div className="aboutme">
          <div className="about-me-display">
            <div className="about-experience">
              <div style={{ marginTop: "35px" }}>
                <i className="about-icons">
                  <FaAward></FaAward>
                </i>
                <h3 style={{ textAlign: "center" }}>Experience</h3>
                <p style={{ textAlign: "center" }}>1+ years</p>
              </div>
            </div>
            <div className="about-experience">
              <div style={{ marginTop: "35px" }}>
                <i className="about-icons">
                  <BsPeopleFill></BsPeopleFill>
                </i>
                <h3 style={{ textAlign: "center" }}>Clients</h3>
                <p style={{ textAlign: "center" }}>10+ clients Worldwide</p>
              </div>
            </div>
            <div className="about-experience">
              <div style={{ marginTop: "35px" }}>
                <i className="about-icons">
                  <AiOutlineProject></AiOutlineProject>
                </i>
                <h3 style={{ textAlign: "center" }}>Projects</h3>
                <p style={{ textAlign: "center" }}>15+ Projects</p>
              </div>
            </div>
          </div>
          <div style={{marginTop:"20px"}}>
            <p style={{fontSize:"20px"}}>
              An ambitious student with a goal to reach the pinnacle of success
              by providing the best services to society to fulfill its
              objectives.
            </p>
          </div>
          <button style={{marginTop:"20px"}} className="downloadresumebtn">
            <a className="downloadresume" href="#contact">
              Let's Talk
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
