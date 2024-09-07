import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  
  const formInitialDetails = {
    name: "",
    email: "",
    phonenumber: "",
    message: "",
  };

  const ref = useRef();
  const [success,setSuccess] = useState(null);
  const [formDetails, setFormDetails] = useState(formInitialDetails);

  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_03v6nca', 'template_s2zzi0i', ref.current, '7HHY6oRJY7whI2Bds')
        .then((result) => {
            console.log(result.text);
            setSuccess(true);
            setFormDetails(formInitialDetails);
        }, (error) => {
            console.log(error.text);
            setSuccess(false);
        });
    };


  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
              <div>
              <h1><span>"GET IN </span><span>TOUCH" </span></h1>
                </div>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div>
                
                <form ref ={ref} onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.name} onChange={(e) => setFormDetails({...formDetails, name: e.target.value})} placeholder="First Name" name="name" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.lastname} onChange={(e) => setFormDetails({...formDetails, lastname: e.target.value})} placeholder="Last Name" name='name'/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" value={formDetails.email} onChange={(e) => setFormDetails({...formDetails, email: e.target.value})} placeholder="Email Address" name="email" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" value={formDetails.phonenumber} onChange={(e) => setFormDetails({...formDetails, phonenumber: e.target.value})} placeholder="Phone No." name='phonenumber'/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" value={formDetails.message} onChange={(e) => setFormDetails({...formDetails, message: e.target.value})} placeholder="Message" name='message'></textarea>
                      <div id="wrapper">
                    <button id='blob' type='submit' class="my-super-cool-btn">
                      <div class="dots-container">
                        <div class="dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                      </div>
                      <span>Send</span>
                    </button>
                  </div>
                                      
                      {success &&
                        "Yayy!! Your message has been sent! I'll get back to you soon!:)"}
                      </Col>
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
