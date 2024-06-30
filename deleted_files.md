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