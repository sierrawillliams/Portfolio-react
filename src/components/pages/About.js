import React from "react";
import '../../App.css';
import '../AboutItem.css';
import AboutItem from "../AboutItem.js";
import Footer from '../Footer';
import { TypeAnimation } from 'react-type-animation';
import arrow from '../../images/down-arrow.png';
import Particles from "react-tsparticles";

export default function About() {
  return (
    <>
      <div className='main-container'>
        {/* Animated Intro */}
        <div className='responsive-type-animation'>
          <TypeAnimation
            className='name'
            sequence={[
              "Hi, I'm Sierra Williams",
              1500,
              "Front-End Developer",
              1500,
              "React & UI Enthusiast",
              1500,
            ]}
            speed={40}
            repeat={Infinity}
            style={{
              fontSize: '7vw',
              fontFamily: 'Cinzel Decorative',
              textShadow: '3px 2px #a5a5de',
              color: '#fff',
              marginBottom: '20px',
              animationDelay: '0.3s',
            }}
          />
          <p className="about-intro" style={{ animationDelay: '0.6s' }}>
            I build responsive, user-focused web experiences with clean code, accessible design, and a passion for modern interfaces.
          </p>
        </div>


        {/* Tech Icons */}
        <div className="tech-icons" style={{ animationDelay: '1.2s' }}>
          <i className="devicon-html5-plain colored" title="HTML5"></i>
          <i className="devicon-css3-plain colored" title="CSS3"></i>
          <i className="devicon-javascript-plain colored" title="JavaScript"></i>
          <i className="devicon-react-original colored" title="React"></i>
          <i className="devicon-git-plain colored" title="Git"></i>
          <i className="devicon-python-plain colored" title="Python"></i>
        </div>


        {/* Resume Button */}
        <a
          href="/files/SierraWilliams-WebDeveloper-Resume.pdf"
          download
          className="resume-button"
          style={{ animationDelay: '0.9s' }}
        >
          Download Resume
        </a>
      </div>
      <Footer />
    </>
  );
}
