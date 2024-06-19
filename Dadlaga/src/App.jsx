import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './Pages/Welcome';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login.jsx'
import ProfilePage from './Pages/ProfilePage.jsx'
import About from './Pages/About.jsx'
import { Link, useNavigate } from 'react-router-dom'; 



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
      </Routes>
    </Router>
  );
}

export default App;
