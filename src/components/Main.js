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
            <a href="/work"><Button className='btns' buttonStyle='btn--outline'
            buttonSize='btn--large'>
                View My Work
            </Button>
            </a>
        </div>
    </div>
  )
}

export default Main