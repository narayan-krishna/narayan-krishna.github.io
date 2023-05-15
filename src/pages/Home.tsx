import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import './Home.css';

function Home() {
  return (
    <div className="Home">
      <div className="bp4-monospace-text {{.modifier}}">
        <div>
          <h1 style={{fontSize:60}}>
            Krishna Narayan
          </h1>
          <p className="bp4-text-large bp4-running-text {{.modifier}}">
            ICONS
          <div>
            650.918.2995
          </div>
          <div>
            knarayan720@gmail.com
          </div>
          </p>
          <p className="bp4-text-large bp4-running-text {{.modifier}}">
            I write software to make everyday life easier.
          </p>
        </div>
        <p className="bp4-text-large bp4-running-text {{.modifier}}">
          I'm a 22-year old software engineer from the California Bay Area.
          I recently graduated from Chapman University, where I received a B.S. in Computer Science and a B.F.A. in Animation and Visual Effects.
          After graduation, I worked at Nuro on the teleoperation controls team. During my time at Nuro, I worked on devices drivers and calibration systems for hardware to drive AVs.
        </p>
        <p className="bp4-text-large bp4-running-text {{.modifier}}">
          Currently, I'm working on writing command-line and fullstack applications to improve developer productivity.
          I mainly write programs in Rust, C++, Python, and Typescript. Lately, I've been using Rust to write command-line TUI tools with libraries like tui-rs and crossterm, and also web backends using crates like serde and axum.
        </p>
        <p className="bp4-text-large bp4-running-text {{.modifier}}">
          This site is a React-Typescript application hosted on GitHub Pages. The UI is built around Palantir's blueprintjs component libary.
        </p>
      </div>
    </div>
  );
}

export default Home;
