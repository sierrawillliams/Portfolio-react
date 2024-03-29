import React from 'react'
import backgroundVideo from '../videos/wave.mp4';
import { TypeAnimation } from 'react-type-animation';     
import arrow from '../images/down-arrow.png';
import './ContactForm.css';
import './Main.css';


function ContactMain() {
  return (
    <div className='main-container'>
        <video autoPlay loop muted playsInline>
            <source src={backgroundVideo} type='video/mp4' alt='Video by PCh Art from Pixabay'/>
        </video>
        <div className='responsive-type-animation'>
          <TypeAnimation className='name' sequence={["Contact", 1000]} speed={20} style={{ fontSize: '12vw', fontFamily: 'Bright', textShadow: '3px 2px #f67c90', color: '#fff'}}/>
        </div> 
        <div className='main-btns'>
            <img src={arrow} height={60}/>
        </div>
    </div>
  )
}

export default ContactMain;