import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import './App.css';
import { useState, useEffect, useRef } from 'react';
import { Colors } from "@blueprintjs/core";

export const navstate = {
  about: 1,
  projects: 2,
  resume: 3,
}

export interface NavStateProps {
  navState: number,
  setNavState: React.Dispatch<React.SetStateAction<number>>
}

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [navState, setNavState] = useState(navstate.about);

  const resumeRef = useRef(null);
  const aboutRef = useRef<null | HTMLDivElement>(null);
  const projectsRef = useRef(null);

  return (
    <div className="App">
      <div className={darkMode ? "bp4-dark" : "bp4-light" } >
        <NavBar darkMode={darkMode} setDarkMode={setDarkMode} navState={navState} setNavState={setNavState} aboutRef={aboutRef} resumeRef={resumeRef} projectsRef={projectsRef}/>
        <div style={darkMode ? {background: Colors.DARK_GRAY2} : 
                           {background: Colors.LIGHT_GRAY4}}>
          <div ref={aboutRef}>
            <Home />
          </div>
          <div ref={resumeRef}>
            <Resume />
          </div>
          <div ref={projectsRef} style={{display:"flex"}}>
            <Projects />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
