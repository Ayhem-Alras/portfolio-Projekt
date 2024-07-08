import React from 'react';
import SliderComponent from './components/SliderComponent';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ArrowDown from './components/ArrowDown';
import Experience from './components/Experience';
import Contact from './components/Contact';
import NavigationDots from './components/NavigationDots';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <NavigationDots />
      <div className="slider-section" id="about-me">
        <SliderComponent />
        <AboutMe />
        <ArrowDown />
      </div>
      <div id="Start">
        <ArrowDown />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="skills">
        <Experience />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}




export default App;
