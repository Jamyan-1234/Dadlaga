import { useState } from 'react';
import '../CSS_files/Welcome.css';
import '../CSS_files/mainbody.css';
import myImage from '../images/logo.png';
import image from '../images/image1.png';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';
import image4 from '../images/image4.png';

import { Link } from 'react-router-dom';

//------------------------------------------------ Welcome Page--------------------------------------------------------------------------------------
function Welcome() {
  return (
    <>
      {/*-------------------------------------------- Navigation Bar хэсэг--------------------------------------------------------------- */}
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

          <div className='login'>
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <button className='button_radius'> 
                Нэвтрэх
                </button>
            </Link>
              

            <Link to="/signUp" style={{ textDecoration: 'none' }}>
              <button className='sign_up_button'>
                Бүртгүүлэх
              </button>
            </Link>
          </div>
        </div>




        
        <div className='main_card'> 
          <div className='first_row'>
            <div className='item1'>
            <img src={image} height={150} width={150} alt="My Image" />
              <h2>Хялбар</h2>
            </div>

            <div className='item1'>
            <img src={image2} height={170} width={250} alt="My Image" />
            <h2>Найдвартай</h2>
            </div>
          </div>

          <div className='second_row'>
            <div className='item1'>
            <img src={image3} height={150} width={150} alt="My Image" />
            <h2>Хязгааргүй ажлын байр</h2>
            </div>

            <div className='item1'>
            <img src={image4} height={150} width={200} alt="My Image" />

              <h2>Өөрийн CV-г үүсгэ</h2>
            </div>
          </div>

        </div>











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
  );
}

export default Welcome;
