// src/components/JobDetails.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';

const Edit_job = () => {
  const location = useLocation();
  const jobData = location.state?.jobData || {};

  return (
    <div>
      <h2>Job Details</h2>
      <form>
        <div>
          <label>Job Title:</label>
          <input type="text" value={jobData.job_head || ''} readOnly />
        </div>
        <div>
          <label>Field:</label>
          <input type="text" value={jobData.salbar || ''} readOnly />
        </div>
        <div>
          <label>Short Description:</label>
          <input type="text" value={jobData.job_description || ''} readOnly />
        </div>
        <div>
          <label>Full Description:</label>
          <input type="text" value={jobData.buten_description || ''} readOnly />
        </div>
        <div>
          <label>Requirements:</label>
          <input type="text" value={jobData.job_shaardlaga || ''} readOnly />
        </div>
        <div>
          <label>Experience Required:</label>
          <input type="text" value={jobData.job_turshlaga || ''} readOnly />
        </div>
        <div>
          <label>Job Type:</label>
          <input type="text" value={jobData.jobType || ''} readOnly />
        </div>
        <div>
          <label>Location:</label>
          <input type="text" value={jobData.job_bairshil || ''} readOnly />
        </div>
        <div>
          <label>Advertiser:</label>
          <input type="text" value={jobData.job_zarlagch || ''} readOnly />
        </div>
        <div>
          <label>Salary:</label>
          <input type="number" value={jobData.tsalin || ''} readOnly />
        </div>
        <div>
          <label>Phone Number:</label>
          <input type="number" value={jobData.job_utasnii_dugaar || ''} readOnly />
        </div>
        <div>
          <label>Email:</label>
          <input type="text" value={jobData.job_email || ''} readOnly />
        </div>
      </form>
    </div>
  );
};

export default Edit_job;
