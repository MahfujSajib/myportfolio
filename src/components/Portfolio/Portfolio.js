import React from "react";
import img1 from "../../assets/img1.PNG";
import img2 from "../../assets/img2.PNG";
import img3 from "../../assets/img3.PNG";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5 style={{ textAlign: "center" }}>My Recent Work</h5>
      <h2 style={{ textAlign: "center", color: "aqua" }}>Portfolio</h2>
      <div className="myportfolio">
        <div className="portfolio">
          <img
            className="img1"
            width="500px"
            height="400px"
            src={img1}
            alt=""
          />
          <h3 style={{ marginLeft: "20px", marginTop: "20px" }}>Job finders</h3>
          <div>
            <button style={{ margin: "10px" }} className="downloadresumebtn">
              <a
                className="downloadresume"
                href="https://github.com/MahfujSajib/job-finders"
                target="_blank"
              >
                GitHub
              </a>
            </button>
            <button className="downloadresumebtn">
              <a
                className="downloadresume"
                href="https://jobfinders.netlify.app/"
                target="_blank"
              >
                Live Demo
              </a>
            </button>
          </div>
        </div>
        <div className="portfolio">
          <img
            className="img1"
            width="500px"
            height="400px"
            src={img2}
            alt=""
          />
          <h3 style={{ marginLeft: "20px", marginTop: "20px" }}>Solotto</h3>
          <div>
            <button style={{ margin: "10px" }} className="downloadresumebtn">
              <a
                className="downloadresume"
                href="https://github.com/MahfujSajib"
                target="_blank"
              >
                GitHub
              </a>
            </button>
            <button className="downloadresumebtn">
              <a
                className="downloadresume"
                href="https://solotto-site.netlify.app/"
                target="_blank"
              >
                Live Demo
              </a>
            </button>
          </div>
        </div>
        <div className="portfolio">
          <img
            className="img1"
            width="500px"
            height="400px"
            src={img3}
            alt=""
          />
          <h3 style={{ marginLeft: "20px", marginTop: "20px" }}>
            Ema John copy
          </h3>
          <div>
            <button style={{ margin: "10px" }} className="downloadresumebtn">
              <a
                className="downloadresume"
                href="https://github.com/MahfujSajib/ema-john-copy"
                target="_blank"
              >
                GitHub
              </a>
            </button>
            <button className="downloadresumebtn">
              <a
                className="downloadresume"
                href="https://ema-jhon-copy.netlify.app/"
                target="_blank"
              >
                Live Demo
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
