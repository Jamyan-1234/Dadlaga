import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './Pages/Welcome';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login.jsx'
//Dadlaga/src/Pages/Login.jsx


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        
      </Routes>
    </Router>
  );
}

export default App;
