
import { useState } from 'react'
import './mainbody.css'
import { useNavigate } from "react-router-dom";


function mainbody() {
  

  return (
    <>
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

    </>
  )
}



export default mainbody