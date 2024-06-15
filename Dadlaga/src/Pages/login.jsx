import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../CSS_files/Login.css';
import desk from '../images/image8.jpg';
//<Link to="/" className="back-link">← Буцах</Link>
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

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
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                 </div>

                <div className='textbox_size'>
                  
                  <input
                    type="password"
                    id="password"
                    placeholder="Нууц үг"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              

              <div className='button_div'>
                <button type="submit" className="signup-buttonn">Нэвтрэх</button>
                <Link className='forgot_link_size' to="/">Нууц үгээ мартсан уу?</Link>
               
              </div>
              
              
              
              
            </form>
            </div>

          
          </div>
          
          
         
          








          
          
         
          

          


          
            
            
         
          
        </div>
      </div>
      

      

      

    </div>
    
  );
}

export default Login;
