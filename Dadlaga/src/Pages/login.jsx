import React, { useState } from 'react';
import '../CSS_files/Login.css';
import desk from '../images/image8.jpg';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [warning, setWarning] = useState('');
  const [showWarning, setShowWarning] = useState(false);
  const navigate = useNavigate();

  const [token, setToken] = useState("");







  const warninge = () => {
    Swal.fire({
      text: "Амжилттай нэвтэрлээ",
      icon: "success"
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:3001/login', { email, password })
      .then(result => {
        console.log(result);
        if (result.data === "Амжилттай") {
          localStorage.setItem('userEmail', email);
          warninge()
          setWarning(''); 
          navigate('/welcome_logged');
        }else if(result.data === "Wrong password")
        {
          setWarning("Таны нууц үг буруу байна");
          setShowWarning(true);
          setTimeout(() => {
            setShowWarning(false);
          }, 3000); // 3 секундийн дараа анхааруулгыг байхгүй болгоно 
        }else {
          setWarning(" Хэрэглэгчийн мэдээлэл олдсонгүй. Та бүртгэл үүсгэнэ үү");
          setShowWarning(true);

          setTimeout(() => {
            setShowWarning(false);
          }, 3000); // 3 секундийн дараа анхааруулгыг байхгүй болгоно 
        }
      })
      .catch(err => {
        console.log(err);
        setWarning('An error occurred. Please try again later.');
        setShowWarning(true);
        setTimeout(() => {
          setShowWarning(false);
        }, 3000); // 3 секундийн дараа анхааруулгыг байхгүй болгоно 
      });
  };

  return (
    <div className='mein_container'>
      <div className='asmall_container'>
        <div className='image_container'>
          <img className='for_image' src={desk} height={680} width={800} alt="My Image" />
        </div>

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
                  <div className={`border warning ${showWarning ? 'show' : ''}`}>
                    <h6>{warning}</h6>
                  </div>
                </div>

                <div className='button_div'>
                  <button type="submit" className="signup-buttonn">Нэвтрэх</button>
                 
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
