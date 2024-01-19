import React from 'react'
import backgroundVideo from '../videos/wave1.mp4';

function ContactMain() {
  return (
    <div className='main-container'>
        <video autoPlay loop muted playsInline>
            <source src={backgroundVideo} type='video/mp4' alt='Video by PCh Art from Pixabay'/>
        </video>
        <h1>CONTACT</h1>
    </div>
  )
}

export default ContactMain