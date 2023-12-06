import React from 'react';
import '../App.css';
import { Button } from './Button';
import { Button2 } from './Button2';

import './Main.css';

function Main() {
  return (
    <div className='main-container'>
        <video src="/videos/wave.mp4" autoPlay loop muted />
        <h1 className='name'>Sierra Williams</h1>        
        <p className='title'>Web Developer</p>
        <div className='main-btns'>
            <a href="/work"><Button className='btns' buttonStyle='btn--outline'
            buttonSize='btn--large'>
                View My Work
            </Button>
            </a>
            <Button2 className='btns' buttonStyle='btn--primary'
            buttonSize='btn--large'>
                Contact Me
            </Button2>
        </div>
    </div>
  )
}

export default Main