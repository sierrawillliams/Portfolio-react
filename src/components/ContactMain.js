import React from 'react'
import backgroundVideo from '../videos/wave.mp4';
import { TypeAnimation } from 'react-type-animation';     
import arrow from '../images/down-arrow.png';
import './ContactForm.css';
import './Main.css';
import MatrixBackground from './MatrixBackground';



function ContactMain() {
  return (
    <div className='main-container'>
         <MatrixBackground color="#360f5a" />
        <div className='responsive-type-animation'>
          <TypeAnimation className='name' sequence={["Contact", 1000]} speed={20} style={{ fontSize: '7vw', fontFamily: 'Cinzel Decorative', textShadow: '3px 2px #a5a5de', color: '#fff'}}/>
        </div> 
    </div>
  )
}

export default ContactMain;