import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import VideoBackground from '../components/VideoBackground';

const AboutPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % 21);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 22);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 22) % 22);
    setIsAutoPlaying(false);
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
            <PageTitle>About Hack-O-Holic 3.0</PageTitle>
            <PageSubtitle>The Ultimate Hackathon Experience</PageSubtitle>
          </motion.div>
        </HeroSection>
        
        <ContentSection>
          <SectionContainer>
            <SectionTitle>Our Mission</SectionTitle>
            <SectionContent>
              <p>
                Hack-O-Holic 3.0 is dedicated to fostering innovation, collaboration, and technological advancement 
                through an immersive hackathon experience. Our mission is to provide a platform where talented 
                individuals can come together, share ideas, and create solutions that address real-world challenges.
              </p>
              <p>
                We believe in the power of technology to transform lives and communities. By bringing together 
                diverse perspectives and skill sets, we aim to catalyze the development of innovative solutions 
                that have the potential to make a meaningful impact on society.
              </p>
            </SectionContent>
          </SectionContainer>
          
          <SectionContainer>
            <SectionTitle>What Makes Us Different</SectionTitle>
            <FeatureGrid>
              <FeatureCard
                as={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <FeatureIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                    <line x1="9" y1="9" x2="9.01" y2="9"></line>
                    <line x1="15" y1="9" x2="15.01" y2="9"></line>
                  </svg>
                </FeatureIcon>
                <FeatureTitle>Inclusive Environment</FeatureTitle>
                <FeatureDescription>
                  We welcome participants of all backgrounds and skill levels, creating a diverse and inclusive 
                  environment where everyone can learn, contribute, and grow.
                </FeatureDescription>
              </FeatureCard>
              
              <FeatureCard
                as={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <FeatureIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </FeatureIcon>
                <FeatureTitle>Expert Mentorship</FeatureTitle>
                <FeatureDescription>
                  Participants have access to mentors from leading tech companies who provide guidance, 
                  feedback, and support throughout the hackathon.
                </FeatureDescription>
              </FeatureCard>
              
              <FeatureCard
                as={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <FeatureIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </FeatureIcon>
                <FeatureTitle>Real-World Impact</FeatureTitle>
                <FeatureDescription>
                  We focus on challenges that have real-world applications, encouraging participants to 
                  develop solutions that can make a tangible difference.
                </FeatureDescription>
              </FeatureCard>
              
              <FeatureCard
                as={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <FeatureIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="7"></circle>
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                  </svg>
                </FeatureIcon>
                <FeatureTitle>Valuable Prizes</FeatureTitle>
                <FeatureDescription>
                  Beyond cash prizes, winners receive opportunities for incubation, mentorship, and 
                  potential investment to turn their projects into startups.
                </FeatureDescription>
              </FeatureCard>
            </FeatureGrid>
          </SectionContainer>
          
          <SectionContainer>
            <SectionTitle>Our Story</SectionTitle>
            <SectionContent>
              <StoryGrid>
                <StoryImage src="/winnner.jpg" alt="Hack-O-Holic History" />
                <StoryText>
                  <p>
                    Hack-O-Holic began in 2023 as a small, campus-based event with just 50 participants. 
                    The enthusiasm and innovation demonstrated during that first event inspired us to 
                    expand our vision and reach.
                  </p>
                  <p>
                    In 2024, Hack-O-Holic 2.0 grew to include 200 participants from across the country, 
                    with projects that caught the attention of industry leaders and investors. Several 
                    projects from that event have since evolved into successful startups.
                  </p>
                  <p>
                    Now, Hack-O-Holic 3.0 is set to be our biggest and most impactful event yet, with 
                    over 500 expected participants from around the world, a diverse range of challenges, 
                    and unprecedented opportunities for networking and growth.
                  </p>
                </StoryText>
              </StoryGrid>
            </SectionContent>
          </SectionContainer>

          <SectionContainer>
            <SectionTitle>Our Guide </SectionTitle>
            <TeamGrid>
              <TeamMember
                as={motion.div}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              >
                <TeamMemberImage src="/VCsir.jpg" alt="Team Member 1" />
                <TeamMemberInfo>
                  <TeamMemberName>Prof.(Dr.) Rakesh Kumar Sharma</TeamMemberName>
                  <TeamMemberRole>Vice Chancellor, GEHU Dehradun</TeamMemberRole>
                  <TeamMemberBio>
                  An inspiring academic visionary and seasoned leader, driving innovation and excellence at the helm of Graphic Era Hill University.
                  </TeamMemberBio>
                </TeamMemberInfo>
              </TeamMember>
              
              <TeamMember
                as={motion.div}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <TeamMemberImage src="/HOD_sir.jpg" alt="Team Member 1" />
                <TeamMemberInfo>
                  <TeamMemberName>Dr. Anupam Singh</TeamMemberName>
                  <TeamMemberRole>HOD, Department of Computer Science and Engineering, GEHU Dehradun</TeamMemberRole>
                  <TeamMemberBio>
                  A dedicated academic and departmental leader, committed to fostering growth, learning, and innovation within the institution.
                  </TeamMemberBio>
                </TeamMemberInfo>
              </TeamMember>
              
              <TeamMember
                as={motion.div}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <TeamMemberImage src="/Sushant_sir.jpg" alt="Team Member 1" />
                <TeamMemberInfo>
                  <TeamMemberName>Mr. Sushant Chamoli</TeamMemberName>
                  <TeamMemberRole>Assistant Professor, GEHU</TeamMemberRole>
                  <TeamMemberBio>
                  A supportive mentor and guiding force behind the club's growth, encouraging student innovation and teamwork.
                  </TeamMemberBio>
                </TeamMemberInfo>
              </TeamMember>
            </TeamGrid>
          </SectionContainer>
          
          <SectionContainer>
            <SectionTitle>The Team Behind Hack-O-Holic</SectionTitle>
            <TeamSlideshow>
              <SlideContainer>
                {[
                  {
                    id: 1,
                    name: 'Anubhav Patwal',
                    designation: 'President',
                    image: '/1AnubhavPatwal.jpg'
                  },
                  {
                    id: 2,
                    name: 'Shayan Malik',
                    designation: 'Vice President',
                    image: '/2ShayanMalik.jpg'
                  },
                  {
                    id: 3,
                    name: 'Aryan Pal',
                    designation: 'General Secretary',
                    image: '/3AryanPal.jpg'
                  },
                  {
                    id: 4,
                    name: 'Ishika Sharma',
                    designation: 'Finance Head',
                    image: '/4IshikaSharma.jpg'
                  },
                  {
                    id: 5,
                    name: 'Yugank Prajapati',
                    designation: 'Social Media Head',
                    image: '/5YugankPrajapati.png'
                  },
                  {
                    id: 6,
                    name: 'Anshul Raturi',
                    designation: 'Social Media Co-Head',
                    image: '/6AnshulRaturi.jpg'
                  },
                  {
                    id: 7,
                    name: 'Shruti Dabral',
                    designation: 'Spokes Person',
                    image: '/7ShrutiDabral.jpg'
                  },
                  {
                    id: 8,
                    name: 'Shrishti',
                    designation: 'Designing Head',
                    image: '/8Shrishti.jpg'
                  },
                  {
                    id: 9,
                    name: ' Vinita',
                    designation: 'Designing Co-Head',
                    image: '/9Vinita.jpg'
                  },
                  {
                    id: 10,
                    name: 'Manas Singhal',
                    designation: 'Management Head',
                    image: '/10ManasSinghal.jpg'
                  },
                  {
                    id: 11,
                    name: 'Diksha',
                    designation: 'Management Co-Head',
                    image: '/11Diksha.jpg'
                  },
                  {
                    id: 12,
                    name: 'Armaan Rawat',
                    designation: 'Technical Head',
                    image: '/12ArmaanRawat.jpg'
                  },
                  {
                    id: 13,
                    name: 'Meraj Alam',
                    designation: 'Technical Co-Head',
                    image: '/13MerajAlam.jpg'
                  },
                  {
                    id: 14,
                    name: 'Archit',
                    designation: 'Technical Co-Head',
                    image: '/14Archit.jpg'
                  },
                  {
                    id: 15,
                    name: 'Kiran Kanyal',
                    designation: 'Event Co-ordinator',
                    image: '/15KiranKanyal.jpg'
                  },
                  {
                    id: 16,
                    name: 'Satendra Negi',
                    designation: 'Advisor',
                    image: '/16SatendraNegi.jpg'
                  },
                  {
                    id: 17,
                    name: 'Kajal Bijalwan',
                    designation: 'Advisor',
                    image: '/17KajalBijalwan.jpg'
                  },
                  {
                    id: 18,
                    name: 'Mokarram',
                    designation: 'Advisor',
                    image: '/18Mokarram.jpg'
                  },
                  {
                    id: 19,
                    name: 'Sarthak Raghuvanshi',
                    designation: 'Advisor',
                    image: '/19SarthakRaghuvanshi.jpg'
                  },
                  {
                    id: 20,
                    name: 'Yash Kansal',
                    designation: 'Event Co-ordinator',
                    image: '/20YashKansal.jpg'
                  },
                  {
                    id: 21,
                    name: 'Sagar Bhandari',
                    designation: 'Event Co-ordinator',
                    image: '/21SagarBhandari.jpg'
                  },
                  {
                    id: 22,
                    name: 'Mahi Tyagi',
                    designation: 'Event Co-ordinator',
                    image: '/22MahiTyagi.png'
                  },
                ].map((member, index) => (
                  <TeamSlide
                    key={member.id}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{
                      opacity: index === currentSlide ? 1 : 0,
                      x: index === currentSlide ? 0 : 100,
                      display: index === currentSlide ? 'flex' : 'none'
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <TeamImage src={member.image} alt={member.name} />
                    <TeamInfo>
                      <TeamName>{member.name}</TeamName>
                      <TeamDesignation>{member.designation}</TeamDesignation>
                    </TeamInfo>
                  </TeamSlide>
                ))}
              </SlideContainer>
              <SlideControls>
                <ControlButton onClick={prevSlide}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </ControlButton>
                <SlideIndicators>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22].map((_, index) => (
                    <Indicator
                      key={index}
                      active={index === currentSlide}
                      onClick={() => {
                        setCurrentSlide(index);
                        setIsAutoPlaying(false);
                      }}
                    />
                  ))}
                </SlideIndicators>
                <ControlButton onClick={nextSlide}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </ControlButton>
              </SlideControls>
            </TeamSlideshow>
          </SectionContainer>
        </ContentSection>
      </PageContainer>
    </>
  );
};

const PageContainer = styled.div`
  position: relative;
  z-index: 2;
`;

const HeroSection = styled.section`
  min-height: 50vh;
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

const ContentSection = styled.section`
  padding: 0 20px 100px;
`;

const SectionContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto 80px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 40px;
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

const SectionContent = styled.div`
  p {
    color: #b0b0b0;
    margin-bottom: 20px;
    line-height: 1.8;
    font-size: 1.1rem;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
`;

const FeatureCard = styled.div`
  background-color: rgba(26, 26, 26, 0.7);
  border-radius: 15px;
  padding: 30px;
  transition: all 0.3s ease;
  border: 1px solid rgba(110, 0, 255, 0.1);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(110, 0, 255, 0.1);
    border-color: rgba(110, 0, 255, 0.3);
  }
`;

const FeatureIcon = styled.div`
  color: #6e00ff;
  margin-bottom: 20px;
`;

const FeatureTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: #ffffff;
`;

const FeatureDescription = styled.p`
  color: #b0b0b0;
  line-height: 1.6;
`;

const StoryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const StoryImage = styled.img`
  width: 100%;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
`;

const StoryText = styled.div`
  p {
    color: #b0b0b0;
    margin-bottom: 20px;
    line-height: 1.8;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
`;

const TeamMember = styled.div`
  background-color: rgba(26, 26, 26, 0.7);
  border-radius: 15px;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(110, 0, 255, 0.1);
  }
`;

const TeamMemberImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const TeamMemberInfo = styled.div`
  padding: 20px;
`;

const TeamMemberName = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 5px;
  color: #ffffff;
`;

const TeamMemberRole = styled.p`
  color: #6e00ff;
  font-weight: 600;
  margin-bottom: 10px;
`;

const TeamMemberBio = styled.p`
  color: #b0b0b0;
  line-height: 1.6;
`;

const TeamDesignation = styled.p`
  font-size: 1.2rem;
  color: #e0e0e0;
  font-weight: 500;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  background: linear-gradient(90deg, #ffffff 0%, #b0b0b0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

const TeamSlideshow = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
`;

const SlideContainer = styled.div`
  position: relative;
  height: 400px;
  overflow: hidden;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
`;

const TeamSlide = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const TeamImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 15px;
  border: 4px solid rgba(110, 0, 255, 0.3);
  box-shadow: 0 0 20px rgba(110, 0, 255, 0.3);
`;

const TeamInfo = styled.div`
  text-align: center;
  margin-top: 10px;
`;

const TeamName = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 8px;
  color: #ffffff;
  font-weight: 600;
  letter-spacing: 0.5px;
`;

const SlideControls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
`;

const ControlButton = styled.button`
  background: linear-gradient(90deg, #6e00ff 0%, #ff00e6 100%);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  svg {
    color: white;
  }
`;

const SlideIndicators = styled.div`
  display: flex;
  gap: 10px;
`;

const Indicator = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: ${props => props.active ? 'linear-gradient(90deg, #6e00ff 0%, #ff00e6 100%)' : 'rgba(255, 255, 255, 0.3)'};
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

export default AboutPage;