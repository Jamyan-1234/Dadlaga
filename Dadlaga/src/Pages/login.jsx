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
        <img className='for_image' src={desk} height={680} width={900} alt="My Image" />
        </div>

        <div className='bruh'>

        </div>

        
        
        {/* 
        <div className="signup-containerr">

          <div className='first_div'>
           
            <h2> Тавтай морил</h2>
          </div>
          
          <h1>Нэвтрэх</h1>


          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                id="email"
                placeholder="Email Хаяг"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              
              <input
                type="password"
                id="password"
                placeholder="Нууц үг"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            
            
            
            <button type="submit" className="signup-button">Нэвтрэх</button>
          </form>
          
        </div>*/}
      </div>
      

      

      

    </div>
    
  );
}

export default Login;
