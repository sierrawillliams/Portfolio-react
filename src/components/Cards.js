import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1 className='title-work'>Check out my work!</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
              <ul className='cards__items'>
              <CardItem
                  src="images/img3.png"
                  text="Business Website"
                  label="Freelance" 
                  language="JavaScript, HTML, CSS"
                  path="https://okinclusion.github.io"/>
                  <br/>
                  <CardItem
                  src="images/img2.png"
                  text="Admin Application"
                  label="University Project"
                  language="React, Prisma, Docker, Node.js, JavaScript, HTML, CSS"
                  path="https://github.com/UBCO-COSC-499-Summer-2023/project-7-b-rental-marketplace-tool-capstone-rental-marketplace-p7b"/>
              </ul>
              <ul className='cards__items'>
              <CardItem
                    src="images/Portfolio.png"
                    text="Portfolio"
                    label="Freelance" 
                    language="React, Node.js, JavaScript, HTML, CSS"
                    path="/"/>
                  <br/>
                  <CardItem
                  src="images/menu.png"
                  text="Mock Menu"
                  label="Freelance" 
                  language="HTML, CSS"
                  path="https://github.com/sierrawillliams/menu"/>
                  <br/>
                <CardItem
                  src="images/coming-soon.jpg"
                  text="Chatbot"
                  label="Coming Soon" 
                  path="https://okinclusion.github.io"/>
                </ul>
                <ul className='cards__items'>
                  <CardItem
                    src="images/coming-soon.jpg"
                    text="Scheduling Software"
                    label="Coming Soon" 
                    path="https://okinclusion.github.io"/>
                    <br/>
                  <CardItem
                    src="images/coming-soon.jpg"
                    text="To Do List"
                    label="Coming Soon" 
                    path="/"/>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards

/* Coming Soon - Image by Ann Carter from Pixabay */