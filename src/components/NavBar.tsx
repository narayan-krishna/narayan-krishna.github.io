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
    AnchorButton
} from "@blueprintjs/core";
import './NavBar.css';
import { ReactComponent as GitHub } from '../Octicons-mark-github.svg';
import { ReactComponent as LinkedIn } from '../iconmonstr-linkedin-3.svg';
import { ReactComponent as Email } from '../iconmonstr-email-4.svg';
import { useState } from 'react';

import {useNavigate} from 'react-router-dom';


interface DarkModeProps {
  darkMode: boolean,
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

const navstate = {
  about: 1,
  projects: 2,
  resume: 3,
}

const NavBar: React.FC<DarkModeProps> = ({ darkMode, setDarkMode }) => {
  const [navState, setNavState] = useState(navstate.about);
  const navigate = useNavigate();

  const handlePageChange = (state: number) => {
    console.log("call ahndle page change iwth state ", state);
    setNavState(state);
    switch (state) {
      case navstate.about:
        navigate('/');
        break;
      case navstate.projects:
        navigate('/projects');
        break;
      case navstate.resume:
        navigate('/resume');
        break;
    };
  }

  return (
    <div className="navbar">
      <Navbar>
          <NavbarGroup align={'left'}>
              <NavbarHeading>Krishna Narayan</NavbarHeading>
              <NavbarDivider />
              <Button minimal active={navState == navstate.about} icon="user" text="About" onClick={() => {handlePageChange(navstate.about)}}/>
              <Button minimal active={navState == navstate.projects} icon="projects" text="Projects" onClick={() => {handlePageChange(navstate.projects)}}/>
              <Button minimal active={navState == navstate.resume} icon="application" text="Resume" onClick={() => {handlePageChange(navstate.resume)}}/>
          </NavbarGroup>
          <NavbarGroup align={'right'}>
            <a href="https://github.com/narayan-krishna">
              <Button minimal icon={<GitHub />} />
            </a>
            <a href="https://www.linkedin.com/in/krishna-narayan">
              <Button minimal icon={<LinkedIn />} />
            </a>
            <Button minimal icon={<Email />} />
            <NavbarDivider />
            <Button minimal icon={darkMode ? "flash" : "moon"} onClick={() => {setDarkMode(!darkMode)}}/>
          </NavbarGroup>
      </Navbar>
    </div>
  );
}

export default NavBar;

