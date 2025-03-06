import React from 'react';
import './App.css';
import Skills from './pages/Skills';
import Certifications from './pages/Certification'
import Home from './components/Home';
import HireMe from './pages/HireMe';
import { Route, Routes } from 'react-router-dom';
import AboutMe from './pages/AboutMe';

function App() {
  return (
    <div className="App">
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/skill" element={<Skills />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/hireme" element={<HireMe />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
