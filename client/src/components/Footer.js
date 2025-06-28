import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterLogo>
            <span>Hack-O-Holic</span> 3.0
          </FooterLogo>
          <FooterDescription>
            Join us for the most innovative hackathon of the year. Build, collaborate, and transform your ideas into reality.
          </FooterDescription>
          <SocialLinks>
          <FooterLinkTitle>Don't Forget to Subscribe: </FooterLinkTitle>
            <SocialLink href="https://www.instagram.com/codev.gehu" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/company/co-dev-club" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </SocialLink>
          </SocialLinks>
        </FooterSection>
        
        <FooterLinksContainer>          
          <FooterLinkSection>
            <FooterLinkTitle>Contact Us</FooterLinkTitle>
            <ContactInfo>
              <ContactItem>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>Hackaholic3.0.codev@gmail.com</span>
              </ContactItem>
              <ContactItem>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>+91 7464959260</span>
                <span>+91 7818874934</span>
                <span>+91 8191013531</span>
              </ContactItem>
              <ContactItem>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>Graphic Era Hill University, Dehradun</span>
              </ContactItem>
            </ContactInfo>
          </FooterLinkSection>
        </FooterLinksContainer>
      </FooterContent>
      
      <FooterBottom>
        <Copyright>© {new Date().getFullYear()} Hack-O-Holic 3.O Powered by CodeV | All rights reserved.</Copyright>
        <FooterBottomLinks>
          <FooterBottomLink to="/privacy">Privacy Policy</FooterBottomLink>
          <FooterBottomLink to="/terms">Terms of Service</FooterBottomLink>
        </FooterBottomLinks>
      </FooterBottom>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: #0a0a0a;
  color: #ffffff;
  padding-top: 80px;
  position: relative;
  z-index: 10;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FooterSection = styled.div`
  flex: 1;
  min-width: 250px;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

const FooterLogo = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
  
  span {
    color: #6e00ff;
  }
`;

const FooterDescription = styled.p`
  color: #b0b0b0;
  margin-bottom: 20px;
  line-height: 1.6;
  max-width: 300px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #1a1a1a;
  color: #ffffff;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #6e00ff;
    transform: translateY(-3px);
  }
`;

const FooterLinksContainer = styled.div`
  flex: 2;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FooterLinkSection = styled.div`
  min-width: 150px;
  margin-bottom: 30px;
  
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const FooterLinkTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #ffffff;
`;

const FooterLink = styled(Link)`
  display: block;
  color: #b0b0b0;
  text-decoration: none;
  margin-bottom: 12px;
  transition: color 0.3s ease;
  
  &:hover {
    color: #6e00ff;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #b0b0b0;
  
  svg {
    color: #6e00ff;
  }
`;

const FooterBottom = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  border-top: 1px solid #1a1a1a;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const Copyright = styled.p`
  color: #b0b0b0;
  font-size: 14px;
`;

const FooterBottomLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const FooterBottomLink = styled(Link)`
  color: #b0b0b0;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;
  
  &:hover {
    color: #6e00ff;
  }
`;

export default Footer;
