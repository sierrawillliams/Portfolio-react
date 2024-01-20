import React from 'react';
import { Box } from '@mui/material';
import './AboutItem.css';

function AboutItem(props) {
  return (
    <>
   <div style={{width: '100%'}}>
        <Box className="all-icons" color="#f67c90" margin="0 20px"fontFamily="Montserrat" fontSize="2rem" bgcolor="white" p={1}>
            <img className="icons" src="../../images/icons/css.png"/>
            <img className="icons" src="../../images/icons/html-5.png"/>
            <img className="icons" src="../../images/icons/java-script.png"/>
            <img className="icons" src="../../images/icons/node.png" height={100}/>
            <img className="icons" src="../../images/icons/react.png" height={120}/>
            <img className="icons" src="../../images/icons/python.png" height={120}/>
            <img className="icons" src="../../images/icons/nextjs.png" height={120}/>
            <img className="icons" src="../../images/icons/git.png" height={120}/>
        </Box>
        <br/>
        <Box color="#f67c90" margin="0 20px"fontFamily="Montserrat" fontSize="2rem" bgcolor="white" p={1}>
            Hello, I am a full stack developer with a love for all things web development.
            <br/>
            I
        </Box>
        <br/>
        <Box color="#f67c90" margin="0 20px"fontFamily="Montserrat" fontSize="2rem" bgcolor="white" p={1}>
            I 
        </Box>

    </div>
    </>
  )
}

export default AboutItem;