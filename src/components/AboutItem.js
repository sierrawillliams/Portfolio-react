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
      <Box color="#ed8495" textAlign="center" fontFamily="Montserrat" fontSize="1.5rem" bgcolor="#fad1d6" p={1}>
          Hello, I am a full stack developer with a love for all things web development.
          <br/>
          I recently graduated from The University of British Columbia with a Bachelor's in Computer Science.
          <br/>
          I am ever so passionate about web development and coding. I enjoy a challenge and learning.
          <br/>
          I am proficient in HTML, CSS, Bootstrap, Tailwind and React.
          <br/>
          I am also familiar with many other programming languages, and frameworks.
          <br/>
          Lately I have been working on increasing my skills with React, Angular, and JavaScript. 
          <br/>
          I am hoping to obtain a career in web development, but I am open to other options to get my foot in the door. 
          <br/>
          <br/>
          <br/>
      </Box>

    </div>
    </>
  )
}

export default AboutItem;