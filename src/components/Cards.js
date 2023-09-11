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
                    path="/work/menu/main.html"/>
                  <CardItem
                    src="images/img2.png"
                    text="Admin Application"
                    label="University Project" 
                    path="https://github.com/UBCO-COSC-499-Summer-2023/project-7-b-rental-marketplace-tool-capstone-rental-marketplace-p7b"/>
                </ul>
                <ul className='cards__items'>
                  <CardItem
                    src="images/img3.png"
                    text="Business Website"
                    label="Freelance" 
                    path="https://okinclusion.github.io"/>
                  <CardItem
                    src="images/Portfolio.png"
                    text="Portfolio"
                    label="Freelance" 
                    path="/"/>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards