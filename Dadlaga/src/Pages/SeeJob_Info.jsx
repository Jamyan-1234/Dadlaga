import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Full_time_icon from '../images/time.png';
import Part_time_icon from '../images/half.png';
import Intern_icon from '../images/intern.png';
import { Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import '../CSS_files/SeeJob_Info.css';





import myImage from '../images/logo.png';
import phone_icon from '../images/phone_icon.png';
import email_icon from '../images/email_icon.png';

// Энэ хэсэг нь хэрэглэгчийн сонирхсон зарыг бүтнээр харуулна
//------------------------------------------------ Зар бүтнээр харах Page --------------------------------------------------------------------------------------

function SeeJob_Info() {
  const navigate = useNavigate();
  const [foodList, setFoodList] = useState([]);
  const [token, setToken] = useState("");

  useEffect(() => {
    const jobId = localStorage.getItem('Songoson_Ajliin_ID');
    if (jobId) {
      Axios.get(`http://localhost:3001/get_job/${jobId}`)
        .then((response) => {
          setFoodList(response.data); 
        })
        .catch((error) => {
          console.error("Алдаа гарлаа:", error);
        });
    } else {
      console.log("Ажлийн мэдээллийг олж чадсангүй, эсвэл алдаа гарлаа");
    }
  }, []);

  const handleChange = (event) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.value
    });
  };

  const handleEditClick = (id) => {
    console.log("Editing job with ID:", id);
  };

  return (
    <body className='body_when_seeing_job_info'>
      <div className='Main_container'>

        {/* Navigation Bar буюу App Bar */}
        <div className='navigation_bar'>
          <div className='logo_and_name_container'>
            <img src={myImage} height={60} width={75} alt="My Image" />
            <h1>Атом</h1>
          </div>

          <div className='dial'>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <span className='dial_font'>Home</span>
            </Link>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <span className='dial_font'>Contact</span>
            </Link>
            <Link to="/about" style={{ textDecoration: 'none' }}>
              <span className='dial_font'>About us</span>
            </Link>
            <Link to="/create_job" style={{ textDecoration: 'none' }}>
              <span className='dial_font'>Ажлын зар нэмэх</span>
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
        {/* End of Navigation Bar буюу App Bar */}












        <div className='Database_item_storing_container_for_when_seeing_specific_job'>
          {foodList.map((val, key) => (


            <div className='item_for_when_seeing_job_info' key={key}>

              <div className='section_1'>
                <h2>{val.job_head}</h2>
                <div className='jijig_medeelluud_container'>

                  <div className='jijig_info'>
                    <div className='small_items_when_seeing_job_info'>
                      <h5>Туршлага</h5>
                    </div>

                    <div className='small_items_when_seeing_job_info'>
                      {val.job_turshlaga}
                    </div>
                  </div>

                  <div className='jijig_info'>
                    <div className='small_items_when_seeing_job_info'>
                      <h5>Ажиллах хэлбэр</h5>
                    </div>

                    <div className='small_items_when_seeing_job_info'>
                      {val.jobType}
                    </div>
                  </div>

                  <div className='jijig_info'>
                    <div className='small_items_when_seeing_job_info'>
                      <h5>Байршил</h5>
                    </div>

                    <div className='small_items_when_seeing_job_info'>
                      {val.job_bairshil}
                    </div>
                  </div>

                  <div className='jijig_info'>
                    <div className='small_items_when_seeing_job_info'>
                      <h5>Зарлагч</h5>
                    </div>

                    <div className='small_items_when_seeing_job_info'>
                      {val.job_zarlagch}
                    </div>
                  </div>

                </div>

                <div className='Ajliin_tuhai_container'>
                  <h2>Ажлын тухай</h2>
                  <div className='ajil'>
                  {val.buten_description}
                  </div>

                </div>








                <div className='Ajliin_tuhai_container'>
                  <h2>Шаардлага</h2>
                  <div className='ajil'>
                  {val.job_shaardlaga}
                  </div>

                </div>
              </div>





















              <div className='section_2'>

                <div className='tsalin_container_when_seeing_job'>
                  <h2>₮{val.tsalin}</h2>

                </div>

                <div className='utasnii_dugaar_container_when_seeing_job'>
                  <strong>Дугаар: {val.job_utasnii_dugaar}</strong>
                  
                  <div className='phone_icon_container'>
                    <img src={phone_icon} alt="Phone Icon"/>
                  </div>

                </div>




                <div className='email_container_when_seeing_job'>
                  <strong>{val.job_email}</strong>
                  
                  <div className='phone_icon_container'>
                    <img src={email_icon} alt="Phone Icon"/>
                  </div>

                </div>
                

              </div>





              

              

             

            </div>
          ))}
          <div className='test_box'>


           





          </div>
        </div>
        
        

      </div>
    </body>
  );
}

export default SeeJob_Info;
