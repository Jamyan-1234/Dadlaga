import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import '../CSS_files/Welcome.css';
import myImage from '../images/logo.png';
import { useNavigate } from 'react-router-dom';







import Full_time_icon from '../images/time.png';
import Part_time_icon from '../images/half.png';
import Intern_icon from '../images/intern.png';
import Eye_icon from '../images/eye.png';
import Hour_Glass from '../images/Hour_Glass.png';

//Энэ хэсэг нь хэрэглэгчийн зөвхөн өөрийнхөн ажлын заруудыг харуулна (бусад хэрэглэгчдийн ажлын зарууд харагдахгүй)
//------------------------------------------------ Миний зарууд Page--------------------------------------------------------------------------------------

function User_jobs() {
  const navigate = useNavigate();
  const [foodList, setFoodList] = useState([]);
  const [token, setToken] = useState("");




  const Delete_token = () => {
    localStorage.removeItem('userEmail');
    
  };





  const handleEditClick = (id) => {
    
    
    Axios.put(`http://localhost:3001/increment_seen/${id}`)
      .then(() => {
        localStorage.setItem('Songoson_Ajliin_ID', id); 
        navigate('/seeJob_Info');
      })
      .catch(err => {
        console.error("Алдаа гарлаа:", err);
      });
  };








  const handleDeleteClick = (id) => {
    Axios.delete(`http://localhost:3001/delete_job/${id}`)
      .then(() => {
        setFoodList(foodList.filter(job => job._id !== id)); 
      })
      .catch(err => {
        console.error("Error deleting job:", err);
      });
  };


  const handleChangeClick = (jobId) => {
    localStorage.setItem('editJobId', jobId);
    navigate('/edit_job'); // or whatever route is used for job creation
  };




//---↓---↓--------↓--------↓---------↓---------↓-----Page load хийж орсны дараа хамгийн эхэнд хийгдэх процесс----↓----------↓----↓---------↓-------↓--//

// 1. Энэ хэсэг нь local storage-ээс хэрэглэгчийн email хаягыг шалгана
// 2. Хэрвээ хэрэглэгчийн email хаяг байвал тухайн хэрэглэчийн ажлын заруудыг харуулна
// 3. Байхгүй тохиолдолд (Одоогоор ямар нэг event тодорхойлогүй) welcome page руу шилжүүлнэ


  useEffect(() => {
    const fetchUserJobs = async () => {
      const userEmail = localStorage.getItem('userEmail'); 
      if (userEmail) {
        try {
          const response = await Axios.post("http://localhost:3001/read_user_jobs", { userEmail });
          setFoodList(response.data);
        } catch (error) {
          console.error("Error fetching user jobs:", error);
        }
      } else {
        navigate('/'); 
      }
    };
  
    fetchUserJobs();
  }, [navigate]);
  //----↑------↑-------↑--------↑-----↑-----↑----↑------Page load хийж орсны дараа хамгийн эхэнд хийгдэх процесс------↑----------↑---------↑--------↑----//
  











  

  
  return (
    <body>
      
    
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
          <Link to="/User_jobs" style={{ textDecoration: 'none' }}>
            <span className='dial_font'>Миний зарууд</span>
          </Link>
          <Link to="/create_job" style={{ textDecoration: 'none' }}>
            <span className='dial_font'>Ажлын зар нэмэх</span>
          </Link>
        </div>

        <div className='login'>
          
          <Link Link to="/" style={{ textDecoration: 'none' }}>
            <button className='sign_up_button' onClick={Delete_token}>
              Гарах
            </button>
          </Link>

          
        </div>
      </div>
      {/* End of Navigation Bar буюу App Bar */}

     





     
      <div className='Database_item_storing_container_when_inspecting'>
        {foodList.map((val, key) => (
          <div className='item' key={key}>


          <div className='title_of_job'>
            
            <h4>{val.job_head}</h4>
          </div>


          <div className='description_of_job'>
            <h6>{val.job_description}</h6>
          </div>


          <div className='time_type_of_job'>



          






            <div className='item_1'>


              <div className='image_container_for_item_1'> 
                <img 
                src={Eye_icon} 
                />  
              </div>
              <h6>Үзсэн {val.job_harsan_too}</h6>
              
              
              
            </div>










           

            


          </div>
          






























          <div className='tsalin_bolon_harah_button_container'>

          <h4>₮{val.tsalin} </h4> 
          
          <button className='button_css'   onClick={() => handleEditClick(val._id)}>Харах</button>



          <button className='delete_button_css'   onClick={() => handleDeleteClick(val._id)}>Устгах</button> 


          <button className='change_button_css'   onClick={() => handleChangeClick(val._id)}>Өөрчлөх</button>  {/**Make this button change */}

          </div>

          





















          
        </div>
        ))}
      </div>
      
    </div>
    </body>
  );
}

export default User_jobs;
