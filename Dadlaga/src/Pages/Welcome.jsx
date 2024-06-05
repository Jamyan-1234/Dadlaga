import { useState } from 'react'
import '../CSS_files/Welcome.css';
import '../CSS_files/mainbody.css';
import myImage from '../images/logo.png'
import job from '../images/jobs.jpg'
import { Link } from 'react-router-dom';

//------------------------------------------------ Welcome Page--------------------------------------------------------------------------------------
function Welcome() {
  
  const handleSignUpClick = () => {
    navigate('/signup');
  };

  return (
    <>
    {/*-------------------------------------------- Navigation Bar хэсэг--------------------------------------------------------------- */}
      <div>
      <div className='box'> 
      <div className='logo'>
        <img src={myImage} height={65} width={75} alt="My Image" />
        <h1><strong></strong>Атом</h1>
      </div>
        

        <div className='dial'>
        <a href="#news" style={{ color: 'black' }}>Home </a>
        <a href ="#contact" style={{ color: 'black' }}>Contact</a>
        <a href="#about" style={{ color: 'black' }}>About us</a>
        <a href="#about" style={{ color: 'black' }}>Ажлын зар нэмэх</a>
        </div>
        

      



        <div className='login'>
          
        <button style={{ backgroundColor: 'green', color: 'white' }}>Нэвтрэх</button>
        <button onClick={handleSignUpClick} style={{ backgroundColor: 'blue', color: 'white' }}>
          Бүртгүүлэх
        </button>
        
          
        </div>
        
        
      </div>
      <img className = "main_image"src={job}  alt="My Image" />

    {/*-------------------------------------------- Navigation Bar хэсэг--------------------------------------------------------------- */}
      <div className="job-feed-container">
        <div className="search-bar">
          <input type="text" placeholder="Job title, keywords, or company" />
          <input type="text" placeholder="City, state, zip code, or 'remote'" />
          <button>Search</button>
        </div>
        <div className="post-resume">
          <a href="#">Post your resume</a> - It only takes a few seconds
          <a href="#">Post a job on Indeed</a>
        </div>
        <div className="job-feed">
          <div className="tabs">
            <span>Job feed</span>
            <span>Recent searches</span>
          </div>
          <div className="job-feed-content">
            <p>We're working on your personalized job feed</p>
            <p>In the meantime, run a search to find your next job.</p>
            <button>Find jobs</button>
          </div>
        </div>
      </div>
      </div>
      
    </>
  )
  
}

export default Welcome


