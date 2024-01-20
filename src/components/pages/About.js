import React from "react";
import '../../App.css';
import '../AboutItem.css';
import AboutItem from "../AboutItem.js";
import Footer from '../Footer';
import backgroundVideo from '../../videos/wave.mp4';
import { TypeAnimation } from 'react-type-animation';  
import arrow from '../../images/down-arrow.png'     ;

export default function About() {
    return <> 
    <div className='main-container'>
        <video autoPlay loop muted playsInline>
            <source src={backgroundVideo} type='video/mp4' alt='Video by Jemaver from Pixabay'/>
        </video>
        <div className='responsive-type-animation'>
          <TypeAnimation className='name' sequence={["About", 1000]} speed={20} style={{ fontSize: '12vw', fontFamily: 'Bright', textShadow: '3px 2px #f67c90', color: '#fff'}}/>
        </div> 
        <div className='main-btns'>
            <img src={arrow} height={60}/>
        </div>
    </div>
    <AboutItem/>
    <Footer/>
</>;
}

/* 
HTML: Html 5 icons created by Freepik - Flaticon 
JavaScript: Java icons created by Pixel perfect - Flaticon
React: React icons created by  - Flaticon
CSS3: CSS icons created by Popcornarts - Flaticon
Python: Python icons created by Flat Icons - Flaticon
Git: Git icons created by Afian Rochmach Afif - Flaticon
*/

