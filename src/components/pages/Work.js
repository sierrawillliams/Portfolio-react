import React from "react";
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';


export default function Work() {
    return <> 
    <div className='main-container'>
        <video src="/videos/background.mp4" autoPlay loop muted />
        <h1>WORK</h1>
    </div>
    <Cards/>
    <Footer/>
</>;
}