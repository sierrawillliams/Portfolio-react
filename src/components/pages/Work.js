import React from "react";
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';
import backgroundVideo from '../../videos/background.mp4';
import { TypeAnimation } from 'react-type-animation';       


export default function Work() {
    return <> 
    <div className='main-container'>
        <video autoPlay loop muted playsInline>
            <source src={backgroundVideo} type='video/mp4' alt='Video by Jemaver from Pixabay'/>
        </video>
        <div className='responsive-type-animation'>
          <TypeAnimation className='name' sequence={["Work", 1000]} speed={20} style={{ fontSize: '12vw', fontFamily: 'Bright', textShadow: '3px 2px #f67c90', color: '#fff'}}/>
        </div> 
    </div>
    <Cards/>
    <Footer/>
</>;
}