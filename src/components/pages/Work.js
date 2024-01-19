import React from "react";
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';
import backgroundVideo from '../../videos/background.mp4';

export default function Work() {
    return <> 
    <div className='main-container'>
        <video autoPlay loop muted>
            <source src={backgroundVideo} type='video/mp4' alt='Video by Jemaver from Pixabay'/>
        </video>
        <h1>WORK</h1>
    </div>
    <Cards/>
    <Footer/>
</>;
}