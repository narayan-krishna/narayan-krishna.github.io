import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import './Projects.css';
import { Tab, Tabs } from "@blueprintjs/core";
import ErDiagram from './er.png';
import SchemaDiagram from './schema.jpg';

interface ProjectElementProps {
    name: string;
    description: string;
}

const ProjectItem: React.FC<ProjectElementProps> = ({ name, description }) => {
  return (
    <div />
  );
}

interface Tech {
    tech: string;
}

const TechUsed: React.FC<Tech> = ({ tech }) => {
  return (
    <p>
      <h3>Technologies: </h3>
      <div className="bp4-text-large bp4-running-text {{.modifier}}">
        {tech}
      </div>
    </ p>
  );
}

const EldenBuilder: React.FC = () => (
    <div>
        <p className="bp4-text-large bp4-running-text {{.modifier}}">
          Understanding and calculating damage has always been a difficult task when playing Fromsoftware's Souls games. Then, Elden Ring brought new scalings and affinities to the table and made the problem even worse. Elden Builder aims to alleviate players of the weapon optimization problem.
        </p>
        <div className="bp4-text-large bp4-running-text {{.modifier}}">
          <h3>Backend</h3>
          <p>
            Elden Builder uses a Rust backend to instanstiate and modify weapons and statlists, which can then be used the calculate a weapon's AR. The backend also handles various weapon and stat constraints, such as:
          </p>
          <ul>
            <li>ensuring statlist allocations don't exceed a core level allocation</li>
            <li>ensuring enough points have been allocated into a statlist such that weapon requirements can be met</li>
            <li>ensuring that changing classes with a current statlist is viable</li>
          </ul>
          <h3>Frontend</h3>
          <p>
            Elden Builder uses a Typescript-React frontend (with Material-UI components) to allow users to design a stat spec, while handling:
          </p>
          <ul>
            <li>stat and level allocations above class max and minimum</li>
            <li>virtualized weapon selection from over 2000 weapon entries</li>
            <li>backend error representation in the frontend for users</li>
          </ul>
        </div>
        <TechUsed tech={"Rust, Typescript, React, Axum, Serde, Sqlite3, Rusqlite, Material-UI"} />
    </div>
);

const Doo: React.FC = () => (
    <div>
        <p className="bp4-text-large bp4-running-text {{.modifier}}">
          Doo is an easy-to-use todo-list tool for the command-line. Spending hours in the terminal, and want to quickly jot down a task? Promptly type 'doo' in the terminal, and use vim keybinds so quickly enter a task. Tasklists can be saved and loaded at will.
        </p>
        <TechUsed tech={"Rust, Serde, Termion, Tui, Crossterm"} />
    </div>
);

const AgglomerativeClustering: React.FC = () => (
    <div>
        <p>
        </p>
    </div>
);

const Foam: React.FC = () => (
    <div>
        <p className="bp4-text-large bp4-running-text {{.modifier}}">
          Foam is a repository of solutions to Fly.io's distributed system's challenge based around Maelstrom. These solutions were written in Rust.
        </p>
        <TechUsed tech={"Rust, Serde, Anyhow, Maelstrom"} />
    </div>
);

const Launcher: React.FC = () => (
    <div>
        <p className="bp4-text-large bp4-running-text {{.modifier}}">
          Launcher is an all-in-one fuzzy-finder. Launcher uses a modal-interface to handle list filtering for lists generated within the program environment with tools like fd or grep.
        </p>
        <p className="bp4-text-large bp4-running-text {{.modifier}}">
          Within the Launcher environment, you can use keybinds to dynamically change program output parameters. For example, Launcher provides support for searching filetype filtering, and then automatically re-running a command like fd.
        </p>
        <TechUsed tech={"Rust, Serde, Anyhow, Maelstrom"} />
    </div>
);

const WizBot: React.FC = () => (
    <div >
      <div className="bp4-text-large bp4-running-text {{.modifier}}">
        WizBot is a discord bot used for aggregating exam and homework questions amonst students for studying purposes. The following is a repurposing of the presentation me and fellow classmates made on WizBot:

        <h3>The problem</h3>
          <ul>
            <li>Organizing study groups can be difficult, especially if there are scheduling conflicts</li>
            <li>There aren’t good ways for students to study cooperatively online</li>
            <li>Lack of fun ways to share material asynchronously</li>
            <li>Lack of convenient ways to store material over time such that students can easily cheat in class for years to come (just kidding!)</li>
          </ul>

        <h3>The solution</h3>
          <ul>
            <li>Create a shared database that students can contribute questions and answers as well as add classes that they might share with similar required material. </li>
            <li>Implement front-end through a Discord bot, allowing for a smooth sharing experience in pre-existing study channels. </li>
            <li>Users can leverage easy-to-use commands to see what questions and answers others have contributed</li>
            <li>Users can provide their schedule to the bot to receive a personalized question and answer feed</li>
          </ul>

        <h3>Main use cases</h3>
          <ul>
            <li>You’re about to take a test, and want some study questions. Pull up some questions from the discord bot with a simple command</li>
            <li>You just took a test, and are curious what other people got on the question. Use the bot to pull up questions in your class, and then get the most liked answers to that question.</li>
            <li>You got a question right on a test, and want to let others know what the right answer is. Contribute that answer for that question, or give it a like if it already exists</li>
          </ul>

        <div style={{display:"flex", overflow: "hidden"}}>
          <div style={{padding:10}}>
            <h3>Schema Diagram</h3>
            <img alt="Schema Diagram" src={SchemaDiagram} />
          </div>
          <div style={{padding:10}}>
            <h3>ER Diagram</h3>
            <img alt="ER Diagram" src={ErDiagram} />
          </div>
        </div>
      </div>
      <TechUsed tech={"Python3, MySQL, Turtle, Discord"} />
    </div>
);

const Emu8080: React.FC = () => (
    <div>
        <p>
          This is info on Elden Builder
        </p>
    </div>
);


const HaskellChat: React.FC = () => (
    <div>
        <p>
          This is info on Elden Builder
        </p>
    </div>
);

const NfaDfa: React.FC = () => (
    <div>
        <p>
          This is info on Elden Builder
        </p>
    </div>
);

function Projects() {
  return (
    <div className="Projects bp4-monospace-text {{.modifier}}">
        <h1>Projects</h1>
         <Tabs
            animate
            id="TabsExample"
            large={false}
            renderActiveTabPanelOnly={true}
            vertical={true}
        >
            <Tab id="rx" title="Elden Builder" panel={<EldenBuilder />} />
            <Tab id="b" disabled title="Doo" panel={<Doo />} />
            <Tab id="c" disabled title="Foam" panel={<Foam />} />
            <Tab id="d" title="Launcher" panel={<Launcher />} />
            <Tab id="e" title="WizBot" panel={<WizBot />} />
            <Tab id="f" disabled title="8080 Emulator" panel={<Emu8080 />} />
            <Tab id="g" disabled title="Agglomerative Clustering" panel={<AgglomerativeClustering />} />
            <Tab id="h" disabled title="Haskell Chat" panel={<AgglomerativeClustering />} />
            <Tab id="i" disabled title="NFA-DFA Converter" panel={<NfaDfa />} />
        </Tabs>
    </div>
  );
}

export default Projects;
