import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vvxcblm', 'template_rchefxl', form.current, 'TInXkn9D4lftKds5g')
      .then((result) => {
          console.log(result.text);
          console.log("Message Sent!");
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
    <div className='contact-container'>
        <h1 className='messageTitle'>Send Me A Message</h1>
        <form ref={form} onSubmit={sendEmail}>
            <label className='name'>Name</label>
            <br/>
            <input className="nameField" type="text" name="from_name" style={{fontWeight: 'bolder', fontSize: 'large'}}/>
            <br/>
            <label className='email'>Email</label>
            <br/>
            <input className="emailField" type="email" name="from_email" style={{fontWeight: 'bolder', fontSize: 'large'}}/>
            <br/>
            <label className='msg'>Message</label>
            <br/>
            <textarea className='msg-area' name="message" style={{fontWeight: 'bolder', fontSize: 'large'}}/>
            <br/>
            <input className='btn-submit' type="submit" value="Send" style={{fontWeight: 'bolder'}}/>
        </form>
    </div>
    </>
  );
};

export default ContactForm;