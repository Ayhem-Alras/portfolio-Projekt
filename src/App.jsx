// src/App.jsx
import React from 'react';
import SliderComponent from './components/SliderComponent';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ArrowDown from './components/ArrowDown';
import Experience from './components/Experience'; // استيراد مكون Experience
import Contact from './components/Contact'; // استيراد مكون Contact

import './index.css'; // استيراد ملف CSS الأساسي

function App() {
  return (
    <div className="app-container">
      <div className="slider-section">
        <SliderComponent />
        <AboutMe />
        <ArrowDown />
      </div>
      <Projects />
      <Experience /> {/* إضافة قسم Experience */}
      <Contact /> {/* إضافة قسم Contact */}
    </div>
  );
}

export default App;
