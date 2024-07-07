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

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Add additional imports for the Firebase products you need
// For example, to use Firestore:
// import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default App;
