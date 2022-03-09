import React from 'react';
import {AiOutlineMail} from 'react-icons/ai';
import {BsWhatsapp} from 'react-icons/bs';
import {AiFillSkype} from 'react-icons/ai';
import './Contact.css'

const Contact = () => {
    return (
        <section id="contact">
          <h4 style={{textAlign:"center"}}>Get In Touch</h4>
          <h2 style={{textAlign:"center",color:"aqua"}}>Contact ME</h2>
          <div className="contact-me">
             <div className="contactme">
                 <i className='mailicon'><AiOutlineMail></AiOutlineMail></i>
                 <h4 className='email'>Email</h4>
                 <h5 className='emailid'>mahfujsajib1998@gmail.com</h5>
             </div>
             <div className="contactme">
                 <i className='mailicon'><BsWhatsapp></BsWhatsapp></i>
                 <h4 className='email'>WhatsApp</h4>
                 <h5 className='phone'>No: +8801521109256</h5>
             </div>
             <div className="contactme">
                 <i className='mailicon'><AiFillSkype></AiFillSkype></i>
                 <h4 className='email'>Skype</h4>
                 <h5 className='skypeid'>ID: mahfujsajib1998</h5>
             </div>
          </div>
        </section>
    );
};

export default Contact;