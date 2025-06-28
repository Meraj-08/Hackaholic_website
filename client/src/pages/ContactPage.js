import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import VideoBackground from '../components/VideoBackground';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message
    };

    emailjs.send(
      'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
      'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
      templateParams,
      'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setFormSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    })
    .catch((err) => {
      console.error('FAILED...', err);
      setError('Failed to send message. Please try again later.');
    })
    .finally(() => {
      setIsLoading(false);
    });
  };
  
  return (
    <>
      <VideoBackground />
      <PageContainer>
        <HeroSection>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <PageTitle>Contact Us</PageTitle>
            <PageSubtitle>We'd love to hear from you</PageSubtitle>
          </motion.div>
        </HeroSection>
        
        <ContactSection>
          <ContactContainer>
            <ContactInfo>
              <InfoTitle>Get In Touch</InfoTitle>
              <InfoDescription>
                Have questions about Hack-O-Holic 3.0? Want to sponsor the event or volunteer? 
                We're here to help! Reach out to us using the contact form or through any of the channels below.
              </InfoDescription>
              
              <ContactMethods>
                <ContactMethod>
                  <ContactIcon>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </ContactIcon>
                  <ContactDetails>
                    <ContactLabel>Email</ContactLabel>
                    <ContactValue>Hackaholic3.0.codev@gmail.com</ContactValue>
                  </ContactDetails>
                </ContactMethod>
                
                <ContactMethod>
                  <ContactIcon>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </ContactIcon>
                  <ContactDetails>
                    <ContactLabel>Phone</ContactLabel>
                    <ContactValue>+91 7464959260</ContactValue>
                    <ContactValue>+91 7818874934</ContactValue>
                    <ContactValue>+91 8191013531</ContactValue>
                  </ContactDetails>
                </ContactMethod>
                
                <ContactMethod>
                  <ContactIcon>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </ContactIcon>
                  <ContactDetails>
                    <ContactLabel>Location</ContactLabel>
                    <ContactValue>Graphic Era Hill University, Dehradun</ContactValue>
                  </ContactDetails>
                </ContactMethod>
              </ContactMethods>
              
              <SocialLinks>
                <SocialTitle>Connect With Us</SocialTitle>
                <SocialIconsContainer>
                  <SocialIcon href="https://www.instagram.com/codev.gehu" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </SocialIcon>
                  <SocialIcon href="https://www.linkedin.com/company/co-dev-club" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </SocialIcon>
                </SocialIconsContainer>
              </SocialLinks>
            </ContactInfo>
            
            <ContactForm onSubmit={handleSubmit}>
              <FormTitle>Send Us a Message</FormTitle>
              {formSubmitted ? (
                <SuccessMessage
                  as={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <SuccessIcon>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </SuccessIcon>
                  <SuccessText>
                    <h3>Message Sent Successfully!</h3>
                    <p>Thank you for reaching out to us. We'll get back to you as soon as possible.</p>
                  </SuccessText>
                  <NewMessageButton onClick={() => setFormSubmitted(false)}>Send Another Message</NewMessageButton>
                </SuccessMessage>
              ) : (
                <>
                  <FormGroup>
                    <FormLabel htmlFor="name">Your Name *</FormLabel>
                    <FormInput
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                    />
                  </FormGroup>
                  
                  <FormGroup>
                    <FormLabel htmlFor="email">Email Address *</FormLabel>
                    <FormInput
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      required
                    />
                  </FormGroup>
                  
                  <FormGroup>
                    <FormLabel htmlFor="subject">Subject *</FormLabel>
                    <FormInput
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Enter message subject"
                      required
                    />
                  </FormGroup>
                  
                  <FormGroup>
                    <FormLabel htmlFor="message">Message *</FormLabel>
                    <FormTextarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Enter your message"
                      rows="5"
                      required
                    />
                  </FormGroup>
                  
                  <SubmitButton type="submit">Send Message</SubmitButton>
                </>
              )}
            </ContactForm>
          </ContactContainer>
        </ContactSection>
      </PageContainer>
    </>
  );
};

const PageContainer = styled.div`
  position: relative;
  z-index: 2;
`;

const HeroSection = styled.section`
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 100px 20px 50px;
`;

const PageTitle = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 20px;
  background: linear-gradient(90deg, #6e00ff 0%, #ff00e6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const PageSubtitle = styled.p`
  font-size: 1.5rem;
  max-width: 600px;
  margin: 0 auto;
  color: #ffffff;
`;

const ContactSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px 80px;
`;

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  background-color: rgba(26, 26, 26, 0.8);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  padding: 50px;
  background: linear-gradient(135deg, rgba(110, 0, 255, 0.1) 0%, rgba(255, 0, 230, 0.1) 100%);
  
  @media (max-width: 768px) {
    padding: 30px;
  }
`;

const InfoTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #ffffff;
`;

const InfoDescription = styled.p`
  color: #b0b0b0;
  margin-bottom: 40px;
  line-height: 1.6;
`;

const ContactMethods = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 40px;
`;

const ContactMethod = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;
`;

const ContactIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #6e00ff 0%, #ff00e6 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const ContactDetails = styled.div``;

const ContactLabel = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 5px;
  color: #ffffff;
`;

const ContactValue = styled.p`
  color: #b0b0b0;
`;

const SocialLinks = styled.div``;

const SocialTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 20px;
  color: #ffffff;
`;

const SocialIconsContainer = styled.div`
  display: flex;
  gap: 15px;
`;

const SocialIcon = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #6e00ff;
    transform: translateY(-3px);
  }
`;

const ContactForm = styled.form`
  padding: 50px;
  background-color: rgba(26, 26, 26, 0.8);
  
  @media (max-width: 768px) {
    padding: 30px;
  }
`;

const FormTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 30px;
  color: #ffffff;
`;

const FormGroup = styled.div`
  margin-bottom: 25px;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  color: #ffffff;
  font-weight: 500;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 12px 15px;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: #ffffff;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #6e00ff;
    box-shadow: 0 0 0 2px rgba(110, 0, 255, 0.2);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 12px 15px;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: #ffffff;
  font-size: 1rem;
  transition: all 0.3s ease;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #6e00ff;
    box-shadow: 0 0 0 2px rgba(110, 0, 255, 0.2);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
`;

const SubmitButton = styled.button`
  padding: 12px 30px;
  background: linear-gradient(90deg, #6e00ff 0%, #ff00e6 100%);
  color: white;
  border: none;
  border-radius: 30px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 7px 20px rgba(110, 0, 255, 0.4);
  }
  
  &:focus {
    outline: none;
  }
`;

const SuccessMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 30px;
  background-color: rgba(110, 0, 255, 0.1);
  border-radius: 15px;
`;

const SuccessIcon = styled.div`
  color: #6e00ff;
  margin-bottom: 20px;
`;

const SuccessText = styled.div`
  margin-bottom: 30px;
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: #ffffff;
  }
  
  p {
    color: #b0b0b0;
  }
`;

const NewMessageButton = styled.button`
  padding: 10px 20px;
  background: transparent;
  color: #ffffff;
  border: 1px solid #6e00ff;
  border-radius: 30px;
  font-weight: 500;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: rgba(110, 0, 255, 0.1);
  }
`;

const MapSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px 80px;
`;

const MapContainer = styled.div`
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
`;

const FAQSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px 80px;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 50px;
  background: linear-gradient(90deg, #6e00ff 0%, #ff00e6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 30px;
  }
`;

const FAQContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FAQ = styled.div`
  background-color: rgba(26, 26, 26, 0.7);
  border-radius: 15px;
  padding: 30px;
  border: 1px solid rgba(110, 0, 255, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    border-color: rgba(110, 0, 255, 0.3);
    background-color: rgba(26, 26, 26, 0.9);
    transform: translateY(-5px);
  }
`;

const FAQQuestion = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: #ffffff;
`;

const FAQAnswer = styled.p`
  color: #b0b0b0;
  line-height: 1.6;
`;

export default ContactPage;