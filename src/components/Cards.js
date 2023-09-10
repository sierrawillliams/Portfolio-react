import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out my work!</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                  <CardItem
                    src="images/img1.png"
                    text="Mock Menu"
                    label="Freelance" 
                    path="/work"/>
                  <CardItem
                    src="images/img2.png"
                    text="Admin Application"
                    label="University Project" 
                    path="/work"/>
                </ul>
                <ul className='cards__items'>
                  <CardItem
                    src="images/img3.png"
                    text="Business Website"
                    label="Freelance" 
                    path="/work"/>
                  <CardItem
                    src="images/img3.png"
                    text="Business Website"
                    label="Freelance" 
                    path="/work"/>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards