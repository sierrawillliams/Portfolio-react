import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Main.css';

function Main() {
  return (
    <div className='main-container'>
        <video src="/videos/wave.mp4" autoPlay loop muted />
        <h1>Sierra Williams</h1>
        <p>Web Developer</p>
        <div className='main-btns'>
            <Button className='btns' buttonStyle='btn--outline'
            buttonSize='btn--large'>
                View My Work
            </Button>
            <Button className='btns' buttonStyle='btn--primary'
            buttonSize='btn--large'>
                Contact Me
            </Button>
        </div>
    </div>
  )
}

export default Main