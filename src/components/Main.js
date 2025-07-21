import React, { useState, useEffect} from 'react';
import '../App.css';
import { Button } from './Button';
import { Button2 } from './Button2';
import './Main.css';
import { TypeAnimation } from 'react-type-animation';       
import MatrixBackground from './MatrixBackground';

function Main() { 
  return (
    <div className='main-container'>
        <MatrixBackground color="#c7c7fa" />
        <div className='responsive-type-animation'>
          <TypeAnimation className='name' sequence={["Sierra Williams", 1000]} speed={20} style={{fontFamily: 'Cinzel Decorative', color: '#fff', textShadow: '3px 2px #a5a5de'}}/>
        </div> 
        <p className='title'>Web Developer</p>
        <div className='main-btns'>
            <a href="/work"><Button className='btns' buttonStyle='btn--outline'
            buttonSize='btn--large'>
                View Work
            </Button>
            </a>
            <Button2 className='btns' buttonStyle='btn--primary'
            buttonSize='btn--large'>
                Contact Me
            </Button2>
        </div>
    </div>
  )
};

export default Main;