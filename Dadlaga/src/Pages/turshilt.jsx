import Axios from 'axios';
import { useState, useEffect } from 'react';
import '../CSS_files/create_job.css';;
import myImage from '../images/logo.png';
import { Link } from 'react-router-dom';
import { height } from '@mui/system';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

//------------------------------------------------ Welcome Page--------------------------------------------------------------------------------------

function Turshilt() {
  const [foodList, setFoodList] = useState([]);







  
  useEffect(() => {
    Axios.get("http://localhost:3001/reade").then((response) => {
      setFoodList(response.data);
    });
  }, []);

    const [sender, setName] = useState('');
    const [message, setAge] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      axios.post('http://localhost:3001/test', { sender, message })
        .then(result => {
          console.log(result);
          if (result.data === "Already registered") {
            alert("Бүртгэлтай хаяг байна");
          } else {
            setSuccessMessage("Амжилттай бүртгэгдлээ");
            alert("Амжилттай бүртгэгдлээ");
          }
        })
        .catch(err => console.log(err));
    }
    
  
    return (
      <>{
        <div className='Main_container_for_creating_job'>
          <div className='navigation_bar_for_creating_job'>
            <div className='logo_and_name_container'>
          <img src={myImage} height={60} width={75} alt="My Image"/> 
              <h3>ЭНЭ БОЛ ТУРШИЛТ</h3>
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
              <Link to="/create_job" style={{ textDecoration: 'none' }}>
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
          {/*-↑------↑-------↑--------↑-----↑-----↑--Navigation Bar буюу App Bar------↑----------↑---------↑--------↑---- */}
  
  
  
  
          <form  className='job_creating_container' onSubmit={handleSubmit}>
            
  
            <div className='title_of_job_container'>
              <h3>Ажлын гарчиг</h3>
  
              <div>
                <input
                className='job_title_style'
                placeholder='Зөөгч, Савлагч, Нягтлан бодогч гэх мэт'
                  type="text"
                  required
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
            </div>
  
  
  
  
  
            <div className='description_of_job_container'>
              <h3>Ажлын тайлбар</h3>
  
              <div>
                <input
                className='job_title_textbox_style'
                  type="text"
                  required
                  onChange={(event) => setAge(event.target.value)}
                />
              </div>
            </div>
            <button type="submit">Бүртгүүлэх</button> 
            
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
           
          </form>

          <div className='Database_item_storing_container'>
            {foodList.map((val, key) => {
                return (




                    <div className='item'  key={key}>
                      <div className='title_of_job'>
                      <h6>{val.sender}</h6>
                      </div>


                      <div className='description_of_job'>
                      <h6>{val.message}</h6>
                      </div>
                        
                        
                        <h6>{val.name}</h6>
                    </div>






                );
            })}
        </div>

          


          
          
         
  
  
  
  
         
  
  
          
  
  
  
      
  
  
  
        
          
  
          
          
            
        </div> 
      }    
      </>
      
    );
  }



export default Turshilt;
