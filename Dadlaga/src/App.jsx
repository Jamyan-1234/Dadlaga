import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './Pages/Welcome';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login.jsx'
import ProfilePage from './Pages/ProfilePage.jsx'
import About from './Pages/About.jsx'
import Create_job from './Pages/Create_job.jsx'
import { Link, useNavigate } from 'react-router-dom'; 
import Welcome_logged from './Pages/Welcome_Logged.jsx';
import User_jobs from './Pages/User_jobs.jsx';
import SeeJob_Info from './Pages/SeeJob_Info.jsx';

//<Route path="/company" element={<CompanyRegistration />} />

//Dadlaga/src/Pages/Login.jsx
//Энэ хэсэгт завхөн замуудыг зааж өгнө
//Энэ кодны хэсэг нь веб сайтын харагдах байдалд нөлөөлөхгүй

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/create_job" element={<Create_job />} />
        <Route path="/welcome_logged" element={<Welcome_logged />} />
        <Route path="/user_jobs" element={<User_jobs />} />
        <Route path="/seeJob_Info" element={<SeeJob_Info />} />
      </Routes>
    </Router>
  );
}

export default App;
