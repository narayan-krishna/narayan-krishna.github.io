import logo from '../logo.svg';
import '../App.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import {
    Alignment,
    Button,
    Classes,
    H5,
    Navbar,
    NavbarDivider,
    NavbarGroup,
    NavbarHeading,
    AnchorButton,
    ButtonGroup,
} from "@blueprintjs/core";
import './NavBar.css';
import { ReactComponent as GitHub } from '../Octicons-mark-github.svg';
import { ReactComponent as LinkedIn } from '../iconmonstr-linkedin-3.svg';
import { ReactComponent as Email } from '../iconmonstr-email-4.svg';
import { useState } from 'react';
import { navstate } from '../App';

interface DarkModeProps {
  darkMode: boolean,
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
  navState: number,
  setNavState: React.Dispatch<React.SetStateAction<number>>
  aboutRef: React.MutableRefObject<null | HTMLDivElement>
  resumeRef: React.MutableRefObject<null | HTMLDivElement>
  projectsRef: React.MutableRefObject<null | HTMLDivElement>
}

const NavBar: React.FC<DarkModeProps> = ({ darkMode, setDarkMode, navState, setNavState, aboutRef, resumeRef, projectsRef }) => {
  const handlePageChange = (state: number) => {
    console.log("call ahndle page change iwth state ", state);
    setNavState(state);
    switch (state) {
      case navstate.about:
        if (aboutRef.current) aboutRef.current.scrollIntoView();
        break;
      case navstate.projects:
        if (projectsRef.current) projectsRef.current.scrollIntoView();
        break;
      case navstate.resume:
        if (resumeRef.current) resumeRef.current.scrollIntoView();
        break;
    };
  }

  return (
    <div className="navbar">
      <Navbar fixedToTop>
          <NavbarGroup align={'left'}>
              <NavbarHeading>Krishna Narayan</NavbarHeading>
              <NavbarDivider />
              <ButtonGroup minimal={true}>
                <Button active={navState == navstate.about} icon="user" text="About" onClick={() => {handlePageChange(navstate.about)}}/>
                <Button active={navState == navstate.resume} icon="application" text="Resume" onClick={() => {handlePageChange(navstate.resume)}}/>
                <Button active={navState == navstate.projects} icon="projects" text="Projects" onClick={() => {handlePageChange(navstate.projects)}}/>
              </ButtonGroup>
          </NavbarGroup>
          <NavbarGroup align={'right'}>
            <ButtonGroup minimal={true}>
              <a href="https://github.com/narayan-krishna" target="_blank">
                <Button minimal icon={<GitHub />} />
              </a>
              <a href="https://www.linkedin.com/in/krishna-narayan" target="_blank">
                <Button minimal icon={<LinkedIn />} />
              </a>
              <Button minimal icon={<Email />} />
            </ ButtonGroup>
              <NavbarDivider />
              <Button minimal icon={darkMode ? "flash" : "moon"} onClick={() => {setDarkMode(!darkMode)}}/>
          </NavbarGroup>
      </Navbar>
    </div>
  );
}

export default NavBar;

