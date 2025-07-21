import React from 'react';
import { Box } from '@mui/material';
import './AboutItem.css';

function AboutItem(props) {
  return (
    <>
   <div>
      <Box className="all-icons" style={{
        width: '100%', 
        display:'inline-block'
        }} 
        textAlign="center" fontFamily="Montserrat" fontSize="2rem" bgcolor="#fad1d6" p={1}>
        <img className="icons" src="../../images/icons/css.png"/>
        <img className="icons" src="../../images/icons/html-5.png"/>
        <img className="icons" src="../../images/icons/java-script.png"/>
        <img className="icons" src="../../images/icons/node.png"/>
        <img className="icons" src="../../images/icons/react.png"/>
        <img className="icons" src="../../images/icons/python.png"/>
        <img className="icons" src="../../images/icons/nextjs.png"/>
        <img className="icons" src="../../images/icons/git.png"/>
        <img className="icons" src="../../images/icons/Bootstrap.png"/>
        <img className="icons" src="../../images/icons/Tailwind.png"/>
      </Box>
      <Box color="#a5a5de" textAlign="center" fontFamily="Montserrat" fontSize="1.5rem" bgcolor="#fad1d6" p={1}>
      <p className="about-intro" style={{ animationDelay: '0.6s' }}>
            I build responsive, user-focused web experiences with clean code, accessible design, and a passion for modern interfaces.
          </p>
        {/* Tech Icons */}
        <div className="tech-icons" style={{ animationDelay: '1.2s' }}>
          <i className="devicon-html5-plain colored" title="HTML5"></i>
          <i className="devicon-css3-plain colored" title="CSS3"></i>
          <i className="devicon-javascript-plain colored" title="JavaScript"></i>
          <i className="devicon-react-original colored" title="React"></i>
          <i className="devicon-git-plain colored" title="Git"></i>
          <i className="devicon-python-plain colored" title="Python"></i>
        </div>


        {/* Resume Button */}
        <a
          href="/Sierra_Williams_Resume.pdf"
          download
          className="resume-button"
          style={{ animationDelay: '0.9s' }}
        >
          Download Resume
        </a>
      </Box>

    </div>
    </>
  )
}

export default AboutItem;