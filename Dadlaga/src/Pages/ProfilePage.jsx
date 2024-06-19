import React, { useState } from 'react';
import '../CSS_files/Profile.css';
import '../CSS_files/Welcome.css';
import '../CSS_files/mainbody.css';
import myImage from '../images/logo.png';
import { Link } from 'react-router-dom';

const ProfilePage = () => {
  const [profile, setProfile] = useState({});
  const [activeTab, setActiveTab] = useState('profile'); // State to manage active tab

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

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div>
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
              <label>Одоо сурч байгаа эсэх</label>
              <input type="checkbox" name="learn" value={profile.learn}  onChange={handleChange} required />
            </div>
          <div className="formRow">
            <div className="formGroup">
              <label>Эхэлсэн огноо *</label>
              <input type="date" name="learnstartdate" value={profile.companyname}  onChange={handleChange} required />
            </div>
            <div className="formGroup">
              <label>Төгссөн огноо </label>
              <input type="date" name="learnfinishdate" value={profile.jobfinishdate}  onChange={handleChange} required />
            </div>
          </div>
          <button type="submit" className="submitButton">Хадгалах</button>
        </form>
        <h2>Хэл </h2>
        <form className="form" onSubmit={handleSubmit}>
          <div className="formRow">
            
                <div className="formGroup">
                  <label>Хэл </label>
                  <input type="text" name="language" value={profile.language}  onChange={handleChange} required />
                </div>
                <div className="formGroup">
                  <label >Түвшин </label>
                  <select name="level">
                    <option value="profile.first">Анхан </option>
                    <option value="profile.medium">Дунд </option>
                    <option value="profile.Advanced">Ахисан </option>
                    <option value="profile.professional">Мэргэжлийн </option>
              </select>
            </div>
          </div>
          <button type="submit" className="submitButton">Хадгалах</button>
        </form>
        <h2>Ур чадвар </h2>
        <form className="form" onSubmit={handleSubmit}>
          <div className="formRow">
            <div className="formGroup">
              <input type="text" name="skill" className='textarea' value={profile.myinfo} placeholder="0/1000" onChange={handleChange} required />
            </div>
          </div>
          <button type="submit" className="submitButton">Хадгалах</button>
        </form>

          </div>
        );
      case 'process':
        return <div>Процесс content</div>;
      case 'test':
        return <div>Тест content</div>;
      case 'companies':
        return <div>Дагасан компани content</div>;
      case 'savedJobs':
        return <div>Хадгалсан ажил content</div>;
      case 'interests':
        return <div>Сонирхож буй чиглэл content</div>;
      default:
        return null;
    }
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
            <Link to="/" style={{ textDecoration: 'none' }}>
            <a className='dial_font'>Home </a>
            </Link>
            <Link to="/" style={{ textDecoration: 'none' }}>
            <a className='dial_font'>Contact </a>
            </Link>
            <Link to="/about" style={{ textDecoration: 'none' }}>
            <a className='dial_font'>About us </a>
            </Link>
            <a className='dial_font' href="#about">Ажлын зар нэмэх</a>
        </div>
      </div>

      <header className="header1">
       
        <img src="/path/to/profile-image.png" alt="Profile" className="profileImage" />
        <h1>{`${profile.lastName} ${profile.firstName}`}</h1>
        <div className="headerTabs">
          <button onClick={() => setActiveTab('profile')}>Профайл</button>
          <button onClick={() => setActiveTab('process')}>Процесс</button>
          <button onClick={() => setActiveTab('test')}>Тест</button>
          <button onClick={() => setActiveTab('companies')}>Дагасан компани</button>
          <button onClick={() => setActiveTab('savedJobs')}>Хадгалсан ажил</button>
          <button onClick={() => setActiveTab('interests')}>Сонирхож буй чиглэл</button>
        </div>
      </header>

      <main className="main">
        {renderTabContent()}
      </main>
    </div>
  );
};

export default ProfilePage;
