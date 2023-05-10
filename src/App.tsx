import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import './App.css';
import { useState } from 'react';
import { Colors } from "@blueprintjs/core";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <BrowserRouter>
      <div className="App"
           style={darkMode ? {background: Colors.RED1} : 
                             {background: Colors.LIGHT_GRAY4}}>
        <div className={darkMode ? "bp4-dark" : "bp4-light" } >
          <NavBar darkMode={darkMode} setDarkMode={setDarkMode}/>
          <div className="body-padding" 
               style={darkMode ? {background: Colors.DARK_GRAY2} : 
                                 {background: Colors.LIGHT_GRAY4}}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/resume" element={<Resume />} />
              </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
