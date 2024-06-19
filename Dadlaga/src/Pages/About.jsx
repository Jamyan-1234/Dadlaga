
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
            <a className='dial_font' href="#about">Ажлын зар нэмэх</a>
          </div>
        </div>
        <div className="about-container">
            <div className="about-content">
                <h1>About ATOM</h1>
                <p>
                Atom is the #1 job site in the world and a global job matching and hiring platform.
                More people get hired on Indeed than any other site because we put job seekers first,
                giving them access to search for jobs, post resumes, research companies and more.
                With AI-powered technology, Indeed is transforming job matching and hiring. Every day,
                we connect millions of people to new opportunities.
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
