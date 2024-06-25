import React, { useState, useEffect } from 'react';
import '../CSS_files/Welcome.css';
import '../CSS_files/mainbody.css';
import myImage from '../images/logo.png';
import image from '../images/image1.png';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';
import image4 from '../images/image4.png';

import { Link } from 'react-router-dom';

//------------------------------------------------ Welcome Page--------------------------------------------------------------------------------------
{/*
const sampleJobs = [
  {title: 'Software Developer', description: 'Lorem ipsum', location: 'City A'},
  { title: 'Web Designer', description: 'Lorem ipsum', location: 'City B'},
  {title: 'Data Analyst', description: 'Lorem ipsum', location: 'City C'},
];
*/}
function Welcome() {
  const [jobs, setJobs] = useState([]);
  const [searchTitle, setSearchTitle] = useState('');
  const [searchLocation, setSearchLocation] = useState ('');
  const [filteredJobs, setFilteredJobs] = useState([]);
  

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
            <Link to="/company" style={{ textDecoration: 'none' }}>
            <a className='dial_font'>Ажлын зар нэмэх </a>
            </Link>
            
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










{/**/}
        <div className="job-feed-container">
          <div className="search-bar">
            <input
             type="text" 
             placeholder="Job title, keywords, or company"
             value = {searchTitle} 
             onChange={(e) => setSearchTitle(e.target.value)}
             />
            <input
             type="text" 
             placeholder="City, state, zip code, or 'remote'" 
             value={searchLocation}
             onChange={(e) => setFilteredJobs(e.target.value)}
             />
            <button onClick={() => setFilteredJobs(jobs)}>Search</button>
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
              {filteredJobs.length > 0 ? (
                <ul className = "job-lists">
                  {filteredJobs.map((job, index) => (
                    <li key={index} className = "job-item">
                      <h3>{job.title}</h3>
                      <p>{job.description}</p>
                      <p><strong>Location:</strong> {job.location}</p>
                    </li>
                  ))}
                  </ul>
              ) : (
                <p>We're working on your personalized job feed</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default Welcome;
