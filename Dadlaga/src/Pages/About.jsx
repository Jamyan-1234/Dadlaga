
import '../CSS_files/About.css';
import React, { useState } from 'react';

import myImage from '../images/logo.png';
import { Link } from 'react-router-dom';
import about from '../images/aboutus1.png';


const About = () => {
  return (
    <div className='background'>
        <div className='box'>
          <div className='logo'>
            <div>
            <img src={myImage} height={65} width={75} alt="My Image" />
            </div>
            
            <h1 className='logo_name'><strong></strong>Атом</h1>
            
            
          </div>

          <div className='dial'>
            <Link to="/" style={{ textDecoration: 'none' }}>
            <a className='dial_font'>Home </a>
            </Link>
            <Link to="/" style={{ textDecoration: 'none' }}>
            <a className='dial_font'>Contact </a>
            </Link>
            <Link to="/about" style={{ textDecoration: 'none' }}>
            <a className='dial_font'>About us </a>
            </Link>
            <Link to="/company" style={{ textDecoration: 'none' }}>
            <a className='dial_font'>Ажлын зар нэмэх </a>
            </Link>
          </div>
        </div>
        <div className="about-container">
            <div className="about-content">
                <h1>About ATOM</h1>
                <p>
                Нэвтэрч орно уу
                </p>
            
            </div>
            <div className="about-image">
                <img src={about} alt="About " />
            </div>
        </div>

    </div>

  );
};

export default About;
