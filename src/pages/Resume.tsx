import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import './Resume.css';
import ResumePdf from './resume.pdf';
import { Tab, Tabs } from "@blueprintjs/core";

const Experience: React.FC = () => (
    <div>
        <p className="bp4-text-large bp4-running-text {{.modifier}}">
          This is an experience section
        </p>
    </div>
);

const Education: React.FC = () => (
    <div>
        <p className="bp4-text-large bp4-running-text {{.modifier}}">
          This is an education section
        </p>
    </div>
);

const Research: React.FC = () => (
    <div>
        <p className="bp4-text-large bp4-running-text {{.modifier}}">
          This is an research section
        </p>
    </div>
);

const Skills: React.FC = () => (
    <div>
        <p className="bp4-text-large bp4-running-text {{.modifier}}">
          This is an skills section
        </p>
    </div>
);

function Resume() {
  return (
    <div className="Projects bp4-monospace-text {{.modifier}}">
        <h1>Resume</h1>
         <Tabs
            animate
            id="TabsExample"
            large={false}
            renderActiveTabPanelOnly={true}
            vertical={true}
        >
            <Tab id="rx" title="Education" panel={<Education />} />
            <Tab id="a" title="Experience" panel={<Experience />} />
            <Tab id="b" title="Research" panel={<Research />} />
            <Tab id="c" title="Skills" panel={<Skills />} />
        </Tabs>
    </div>
  );
}

export default Resume;
