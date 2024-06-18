import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../CSS_files/SignUp.css';
import desk from '../images/image5.jpg';
import axios from 'axios';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreed, setAgreed] = useState(false);



  

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className='main_container'>
      <div className='small_container'>
        <div className='image_container'>
        <img src={desk} height={680} width={800} alt="My Image" />
        </div>

        <div className="signup-container">
        <Link to="/" className="back-link">← Буцах</Link>
          <h1>Бүртгүүлэх</h1>


          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">И-мэйл *</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Нууц үг *</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Нууц үгээ давтан оруулна уу *</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <div className="password-requirements">
              <p>Тоо агуулсан</p>
              <p>Том ба жижиг үсэг холилдсон</p>
              <p>8 болон түүнээс дээш оронтой</p>
            </div>

            <div className='checkbox_container'>

              <div className="check_box_and_text_same_level">
                <input
                  type="checkbox"
                  id="agree"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  required
                />
                <label htmlFor="agree">Нууцлалын бодлогыг хүлээн зөвшөөрч байна.</label>
                
              </div>
            </div>

            
            
          </form>
          <div className='sign_up_button_container'>
            <button type="submit" className="signup-button">Бүртгүүлэх</button>
            <p className="login-link">Бүртгэлтэй юу? <Link to="/login">Нэвтрэх</Link></p>
          </div>
          
        </div>
      </div>
      

      

      

    </div>
    
  );
}

export default SignUp;
