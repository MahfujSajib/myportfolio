import React from 'react';
import {AiOutlineCaretRight} from 'react-icons/ai'
import './Services.css'

const Services = () => {
    return (
        <section id="services">
          <h4 style={{textAlign:"center"}}>What I Offer</h4>
          <h2 style={{textAlign:"center" , color:"aqua"}}>Services</h2>
          <div className="my-services">
            <div className="myservices">
               <div className="services">
                    <h3 style={{textAlign:"center",marginTop:"50px",color:"black"}}>UI/UX Design</h3>
                </div>
                <div style={{marginTop:"50px"}}>
                    <div className="service">
                       <i><AiOutlineCaretRight></AiOutlineCaretRight></i>
                       <h5 style={{marginTop:"10px"}}>Figma Design</h5>
                    </div>
                    <div className="service">
                       <i><AiOutlineCaretRight></AiOutlineCaretRight></i>
                       <h5 style={{marginTop:"10px"}}>Adobe XD Design</h5>
                    </div>
                    <div className="service">
                       <i><AiOutlineCaretRight></AiOutlineCaretRight></i>
                       <h5 style={{marginTop:"10px"}}>Others UI/UX related Support</h5>
                    </div>
                </div>
            </div>
            <div className="myservices">
               <div className="services">
                    <h3 style={{textAlign:"center",marginTop:"50px",color:"black"}}>Web Development</h3>
                </div>
                <div style={{marginTop:"50px"}}>
                    <div className="service">
                       <i><AiOutlineCaretRight></AiOutlineCaretRight></i>
                       <h5 style={{marginTop:"10px"}}>Website Design</h5>
                    </div>
                    <div className="service">
                       <i><AiOutlineCaretRight></AiOutlineCaretRight></i>
                       <h5 style={{marginTop:"10px"}}>Anykind of Web Development with Responsiveness</h5>
                    </div>
                    <div className="service">
                       <i><AiOutlineCaretRight></AiOutlineCaretRight></i>
                       <h5 style={{marginTop:"10px"}}>All kind of web related Support</h5>
                    </div>
                </div>
            </div>
            <div className="myservices">
               <div className="services">
                    <h3 style={{textAlign:"center",marginTop:"50px",color:"black"}}>Digital Marketring</h3>
                </div>
                <div style={{marginTop:"50px"}}>
                    <div className="service">
                       <i><AiOutlineCaretRight></AiOutlineCaretRight></i>
                       <h5 style={{marginTop:"10px"}}>SEO(Search Engine Optimization)</h5>
                    </div>
                    <div className="service">
                       <i><AiOutlineCaretRight></AiOutlineCaretRight></i>
                       <h5 style={{marginTop:"10px"}}>Social Media marketing</h5>
                    </div>
                    <div className="service">
                       <i><AiOutlineCaretRight></AiOutlineCaretRight></i>
                       <h5 style={{marginTop:"10px"}}>All kind of Digital Marketing Support to grow your business</h5>
                    </div>
                </div>
            </div>
            <div className="myservices">
               <div className="services">
                    <h3 style={{textAlign:"center",marginTop:"50px",color:"black"}}>Graphics Design</h3>
                </div>
                <div style={{marginTop:"50px"}}>
                    <div className="service">
                       <i><AiOutlineCaretRight></AiOutlineCaretRight></i>
                       <h5 style={{marginTop:"10px"}}>Illustration</h5>
                    </div>
                    <div className="service">
                       <i><AiOutlineCaretRight></AiOutlineCaretRight></i>
                       <h5 style={{marginTop:"10px"}}>Photoshop design</h5>
                    </div>
                    <div className="service">
                       <i><AiOutlineCaretRight></AiOutlineCaretRight></i>
                       <h5 style={{marginTop:"10px"}}>Logo Design</h5>
                    </div>
                    <div className="service">
                       <i><AiOutlineCaretRight></AiOutlineCaretRight></i>
                       <h5 style={{marginTop:"10px"}}>Business Card Design</h5>
                    </div>
                </div>
            </div>
          </div>
        </section>
    );
};

export default Services;