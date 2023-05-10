import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import './Projects.css';

interface ProjectElementProps {
    name: string;
    description: string;
}

const ProjectItem: React.FC<ProjectElementProps> = ({ name, description }) => {
  return (
    <div />
  );
}

function Projects() {
  return (
    <div className="Projects">
      <h1>Projects</h1>
      <p>
      </p>
    </div>
  );
}

export default Projects;
