import React from "react";
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';
import backgroundVideo from '../../videos/wave.mp4';
import { TypeAnimation } from 'react-type-animation';     
import arrow from '../../images/down-arrow.png';
import MatrixBackground from '../MatrixBackground';



export default function Work() {
    return <> 
    <div className='main-container'>
        
        <MatrixBackground color="#360f5a" />
        <div className='responsive-type-animation'>
          <TypeAnimation className='name' sequence={["Work", 1000]} speed={5} style={{ fontSize: '7vw', fontFamily: 'Cinzel Decorative', textShadow: '3px 2px #a5a5de', color: '#fff'}}/>
        </div> 
    </div>
    <Cards/>
    <Footer/>
</>;
}