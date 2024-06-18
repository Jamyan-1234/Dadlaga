import React, { useState } from 'react';
import '../CSS_files/Profile.css';
import '../CSS_files/Welcome.css';
import '../CSS_files/mainbody.css';
import myImage from '../images/logo.png';
import { Link } from 'react-router-dom';
const ProfilePage = () => {
  const [profile, setProfile] = useState({
    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile saved:', profile);
  };

  return (
    
        <div className='background'>
            <div className='box'>
                <div className='logo'>
                    <div>
                    <img src={myImage} height={65} width={75} alt="My Image" />
                    </div>
                    
                    <h1 className='logo_name'><strong></strong>Атом</h1>
                    
                    
                </div>

                <div className='dial'>
                    <a className='dial_font' href="#news">Home </a>
                    <a className='dial_font' href="#contact">Contact</a>
                    <a className='dial_font' href="#about">About us</a>
                    <a className='dial_font' href="#about">Ажлын зар нэмэх</a>
                </div>

                
                </div>

      <header className="header1">
        <img src="/path/to/profile-image.png" alt="Profile" className="profileImage" />
        <h1>{`${profile.lastName} ${profile.firstName}`}</h1>
        <div className="headerTabs">
          <button>Профайл</button>
          <button>Процесс</button>
          <button>Тест</button>
          <button>Дагасан компани</button>
          <button>Хадгалсан ажил</button>
          <button>Сонирхож буй чиглэл</button>
        </div>
      </header>

      <main className="main">
        <h2>Профайл</h2>
        <form className="form" onSubmit={handleSubmit}>
          <div className="formRow">
            <div className="formGroup">
              <label>Овог *</label>
              <input type="text" name="lastName" value={profile.lastName} onChange={handleChange} required />
            </div>
            <div className="formGroup">
              <label>Нэр *</label>
              <input type="text" name="firstName" value={profile.firstName} onChange={handleChange} required />
            </div>
          </div>
          <div className="formRow">
            <div className="formGroup">
              <label>Регистрийн дугаар</label>
              <input type="text" name="registrationNumber" value={profile.registrationNumber} onChange={handleChange} />
            </div>
            <div className="formGroup">
              <label>Төрсөн огноо *</label>
              <input type="date" name="birthDate" value={profile.birthDate} onChange={handleChange} required />
            </div>
          </div>
          <div className="formRow">
            <div className="formGroup">
              <label>И-мэйл *</label>
              <input type="email" name="email" value={profile.email} onChange={handleChange} required />
            </div>
            <div className="formGroup">
              <label>Хүйс *</label>
              <select name="gender" value={profile.gender} onChange={handleChange} required>
                <option value="">Сонгоно уу</option>
                <option value="male">Эрэгтэй</option>
                <option value="female">Эмэгтэй</option>
              </select>
            </div>
          </div>
          <div className="formRow">
            <div className="formGroup">
              <label>Утасны дугаар *</label>
              <input type="text" name="phone" value={profile.phone} onChange={handleChange} required />
            </div>
            <div className="formGroup">
              <label>Яаралтай холбоо барих утас</label>
              <input type="text" name="emergencyContact" value={profile.emergencyContact} onChange={handleChange} />
            </div>
          </div>
          <div className="formRow">
            <div className="formGroup">
              <label>Улс *</label>
              <input type="text" name="country" value={profile.country} onChange={handleChange} required />
            </div>
            <div className="formGroup">
              <label>Хаяг *</label>
              <input type="text" name="address" value={profile.address} onChange={handleChange} required />
            </div>
          </div>
          <button type="submit" className="submitButton">Хадгалах</button>
        </form> 
        <h2>Миний тухай</h2>
        <form className="form" onSubmit={handleSubmit}>
          <div className="formRow">
            <div className="formGroup">
              <input type="text" name="myinfo" className='textarea' value={profile.myinfo} placeholder="0/1000" onChange={handleChange} required />
            </div>
          </div>
          <button type="submit" className="submitButton">Хадгалах</button>
        </form>
        <h2>Туршлага</h2>
        <form className="form" onSubmit={handleSubmit}>
          <div className="formRow">
            <div className="formGroup">
              <label>Компанийн нэр *</label>
              <input type="text" name="companyname" value={profile.companyname}  onChange={handleChange} required />
            </div>
            <div className="formGroup">
              <label>Албан тушаал </label>
              <input type="text" name="major" value={profile.major}  onChange={handleChange} required />
            </div>
          </div>
          <div className="formGroup">
              <label>Одоо ажилж байгаа эсэх</label>
              <input type="checkbox" name="working" value={profile.working}  onChange={handleChange} required />
            </div>
          <div className="formRow">
            <div className="formGroup">
              <label>Ажилд орсон огноо *</label>
              <input type="date" name="jobstartdate" value={profile.companyname}  onChange={handleChange} required />
            </div>
            <div className="formGroup">
              <label>Ажлаас гарсан огноо </label>
              <input type="date" name="jobfinishdate" value={profile.jobfinishdate}  onChange={handleChange} required />
            </div>
          </div>
          <div className="formGroup">
            <label> Хийж гүйцэтгэх үүрэг </label>
              <input type="text" name="mission" className='textarea' value={profile.mission} placeholder="0/500" onChange={handleChange} required />
          </div>
          <button type="submit" className="submitButton">Хадгалах</button>
        </form>
        <h2>Боловсрол</h2>
        <form className="form" onSubmit={handleSubmit}>
          <div className="formRow">
            <div className="formGroup">
              <label>Түвшин *</label>
              <select name="level">
                <option value="profile.middleschool">Дунд</option>
                <option value="profile.highschool">Бүрэн дунд</option>
                <option value="profile.collage">Коллаж</option>
                <option value="profile.bachelor">Бакалавр</option>
                <option value="profile.master">Магистр</option>
                <option value="profile.doctor">Доктор</option>
              </select>
            </div>
          
            <div className="formGroup">
              <label>Сургуулйн нэр </label>
              <input type="text" name="schoolname" value={profile.schoolname}  onChange={handleChange} required />
            </div>
          </div>
          <div className="formGroup">
              <label>Одоо ажилж байгаа эсэх</label>
              <input type="checkbox" name="working" value={profile.working}  onChange={handleChange} required />
            </div>
          <div className="formRow">
            <div className="formGroup">
              <label>Эхэлсэн огноо *</label>
              <input type="date" name="jobstartdate" value={profile.companyname}  onChange={handleChange} required />
            </div>
            <div className="formGroup">
              <label>ТӨГССӨН огноо </label>
              <input type="date" name="jobfinishdate" value={profile.jobfinishdate}  onChange={handleChange} required />
            </div>
          </div>
          <div className="formGroup">
            <label> Хийж гүйцэтгэх үүрэг </label>
              <input type="text" name="mission" className='textarea' value={profile.mission} placeholder="0/500" onChange={handleChange} required />
          </div>
          <button type="submit" className="submitButton">Хадгалах</button>
        </form>

      </main>
      </div>
    

  );
};

export default ProfilePage;
