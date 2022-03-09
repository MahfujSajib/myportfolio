import React from 'react';
import './Experience.css'

const Experience = () => {
    return (
        <section id="experience">
          <h5 style={{textAlign:"center"}}>What Skills I Have</h5>
          <h2 style={{textAlign:"center", color:"#67A7DD"}}>My Experience</h2>
          <div className="experiences">
              <div className="frontend-experience">
                  <h2 style={{textAlign:"center",marginTop:"20px",color:"#36afce"}}>Frontend Development</h2>
                  <div className="frontend-skills">
                     <h3 style={{padding:"25px",margin:"20px"}}>HTML5</h3>
                     <h3 style={{padding:"25px",margin:"20px"}}>CSS3</h3>
                     <h3 style={{padding:"25px" ,margin:"20px"}}>BootStrap</h3>
                     <h3 style={{padding:"25px",margin:"20px"}}>JavaScript</h3>
                     <h3 style={{padding:"25px" ,margin:"20px"}}>ReactJS</h3>
                     <h3 style={{padding:"25px",margin:"20px"}}>Tailwind CSS</h3>
                     <h3 style={{padding:"25px" ,margin:"20px"}}>Material UI</h3>
                  </div>
              </div>
              <div className="backend-experience">
                  <h2 style={{textAlign:"center",marginTop:"20px",color:"#39e0bc"}}>Backend Development</h2>
                  <div className="backend-skills">
                    <h3 style={{padding:"25px",margin:"20px"}}>NodeJS</h3>
                    <h3 style={{padding:"25px",margin:"20px"}}>ExpressJS</h3>
                    <h3 style={{padding:"25px",margin:"20px"}}>MongoDB</h3>
                  </div>
              </div>
          </div>
        </section>
    );
};

export default Experience;