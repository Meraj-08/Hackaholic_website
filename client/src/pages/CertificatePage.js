import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import VideoBackground from '../components/VideoBackground';

const CertificatePage = () => {
  // Function to handle certificate download (commented out for now)
  const handleDownloadCertificate = () => {
    // Redirect to certificate download website
    window.open('https://hack-o-holic-certificate.onrender.com', '_blank');
  };

  return (
    <>
      <VideoBackground />
      <PageContainer>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <ContentWrapper>
            <PageTitle>Certificates</PageTitle>
            
            <ComingSoonContainer>
              <ComingSoonCard
                as={motion.div}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <ComingSoonText>
                  <ComingSoonTitle>Certificates Available Now !</ComingSoonTitle>
                  <ComingSoonDescription>
                    Certificates for Hack-O-Holic 3.0 are available here.
                  </ComingSoonDescription>
                </ComingSoonText>
                
                
                {/* //Uncomment this button when certificates are available */}
                <DownloadButton onClick={handleDownloadCertificate}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  Download Certificate
                </DownloadButton>
               
              </ComingSoonCard>
            </ComingSoonContainer>
            
            <InfoSection>
              <InfoTitle>About Certificates</InfoTitle>
              <InfoText>
                <p>
                  All participants who successfully complete Hack-O-Holic 3.0 will receive a personalized 
                  certificate of participation. Winning teams will receive special recognition certificates.
                </p>
                <p>
                  Certificates will be digitally signed and can be verified online through our certificate 
                  verification portal.
                </p>
              </InfoText>
              
              <QuestionsContainer>
                <QuestionTitle>Have Questions?</QuestionTitle>
                <QuestionText>
                  If you have any questions about certificates or need assistance, please contact us at 
                  <EmailLink href="mailto:Hackaholic3.0.codev@gmail.com">Hackaholic3.0.codev@gmail.com</EmailLink>
                </QuestionText>
              </QuestionsContainer>
            </InfoSection>
          </ContentWrapper>
        </motion.div>
      </PageContainer>
    </>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 100px 20px;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 900px;
`;

const PageTitle = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 50px;
  text-align: center;
  background: linear-gradient(90deg, #6e00ff 0%, #ff00e6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 3rem;
    margin-bottom: 30px;
  }
`;

const ComingSoonContainer = styled.div`
  margin-bottom: 50px;
`;

const ComingSoonCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const ComingSoonIcon = styled.div`
  margin-bottom: 20px;
  color: #6e00ff;
  animation: pulse 2s infinite;
  
  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.1);
      opacity: 0.7;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

const ComingSoonText = styled.div`
  margin-bottom: 30px;
`;

const ComingSoonTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 15px;
  background: linear-gradient(90deg, #6e00ff 0%, #ff00e6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-weight: 700;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ComingSoonDescription = styled.p`
  color: #b0b0b0;
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
`;

const DownloadButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  background: linear-gradient(90deg, #6e00ff 0%, #ff00e6 100%);
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 20px rgba(110, 0, 255, 0.3);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(110, 0, 255, 0.4);
  }
`;

const InfoSection = styled.div`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 40px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const InfoTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: white;
  font-weight: 700;
`;

const InfoText = styled.div`
  color: #b0b0b0;
  font-size: 1.1rem;
  line-height: 1.6;
  
  p {
    margin-bottom: 20px;
  }
`;

const QuestionsContainer = styled.div`
  margin-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 30px;
`;

const QuestionTitle = styled.h4`
  font-size: 1.4rem;
  margin-bottom: 15px;
  color: white;
  font-weight: 600;
`;

const QuestionText = styled.p`
  color: #b0b0b0;
  font-size: 1.1rem;
  line-height: 1.6;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

const EmailLink = styled.a`
  color: #6e00ff;
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: #ff00e6;
    text-decoration: underline;
  }
`;

export default CertificatePage;
