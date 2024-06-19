import React, { useState } from 'react';
import '../CSS_files/Login.css';
import desk from '../images/image8.jpg';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; 



{/*Хэрвээ navigate буюу navigate('/home'); аргыг ашиглаж хуудас шилжэх бол 
  import {useNavigate } from 'react-router-dom';
  const navigate = useNavigate();*/}




function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  

  const handleSubmit = (event) => {
    event.preventDefault();
    
    axios.post( 'http://localhost:3001/login', {email, password})
    .then(result => {
        console.log(result);
        if(result.data === "Success"){
            console.log("Login Success");
            alert('Login successful!')
            navigate('/about');
        }
        else{
            alert('Incorrect password! Please try again.');
        }
    })
    .catch(err => console.log(err));
}

  return (
    <div className='mein_container'>
      <div className='asmall_container'>
        <div className='image_container'>
        <img className='for_image' src={desk} height={680} width={800} alt="My Image" />
        </div>

      

        

        
        
        {/* */}
        <div className="signup-containerr">
          <Link to="/" className="back-link">← Буцах</Link>
          <div className='first_div'>
            <h2> Тавтай морил</h2>
          </div>
          
          
          <div className='textbox_container'>
            <div className='as'>
            <div>
            <h1>Нэвтрэх</h1>
            </div>
            
            <form className='m' onSubmit={handleSubmit}>

              <div className='textbox_container_gap'>
                 <div className='textbox_size'>
                  <input 
                    type="email"                                             
                    id="email"
                    placeholder="Email Хаяг"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                  />
                 </div>

                <div className='textbox_size'>
                  
                  <input
                    type="password"
                    id="password"
                    placeholder="Нууц үг"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                  />
                </div>
              </div>

              

              <div className='button_div'>
                <button type="submit" className="signup-buttonn">Нэвтрэх</button>
                <Link className='forgot_link_size' to="/">Нууц үгээ мартсан уу?</Link>
               
              </div>
            </form>

            <div className='new_button_css'>
              <hr />
              <button className='new_button'><a href="/SignUp">Шинэ хаяг үүсгэх</a></button>
            </div>
            
            </div>

          
          </div>
          
          
         
          








          
          
         
          

          


          
            
            
         
          
        </div>
      </div>
      

      

      

    </div>
    
  );
}

export default Login;
