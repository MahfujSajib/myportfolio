import React from 'react';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBook} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';
import {IoMdContact} from 'react-icons/io';
import './Nav.css'


const Nav = () => {
    return (
        <nav className='navs'>
            <a className='navbars' href="#"><AiOutlineHome></AiOutlineHome></a>
            <a className='navbars' href="#about"><AiOutlineUser></AiOutlineUser></a>
            <a className='navbars' href="#experience"><BiBook></BiBook></a>
            <a className='navbars' href="#services"><RiServiceLine></RiServiceLine></a>
            <a className='navbars' href="#contact"><IoMdContact></IoMdContact></a>
        </nav>
    );
};

export default Nav;