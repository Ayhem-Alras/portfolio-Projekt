// App.jsx
import React from 'react';
import SliderComponent from './components/SliderComponent';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ArrowDown from './components/ArrowDown';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NavigationDots from './components/NavigationDots';

function App() {
  return (
    <div className="app-container">
      <NavigationDots />
      <div className="slider-section" id="start">
        <SliderComponent />
        <AboutMe />
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
      <Footer /> {/* إضافة Footer هنا */}
    </div>
  );
}

export default App;
