import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='social-media'>
            <Link to='/' className='social-logo'>
              <img className='logo' src='../../images/logo.png' height='150px' alt='personal logo'/>
            </Link>
      </section>
    </div>
  )
}

export default Footer;