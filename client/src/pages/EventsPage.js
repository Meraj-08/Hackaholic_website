import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import VideoBackground from '../components/VideoBackground';

const EventsPage = () => {
  const events = [
    {
      id: 1,
      title: 'SQUID GAME',
      date: 'April 26, 2025',
      description: 'It is a fun, interactive sub-event that is inspired by famous series Squid Game. It is a fun event that makes gives participants time apart from technical things.',
      image: '/event1.jpg',
    },
    {
      id: 2,
      title: 'Valorant',
      date: 'April 26, 2025',
      description: 'As a thrilling addition to Hackoholic 3.0, we are organizing an electrifying Valorant E-sports Tournament to blend coding with clutch plays. This sub-event aims to bring together competitive, teamwork, and strategy in a high-energy gaming environment',
      image: '/event2.jpg',
    },
    {
      id: 3,
      title: 'Open Mic - Unleash Your Vibe!',
      date: 'April 26, 2025',
      description: 'It is an energetic and expressive sub-event that invites participants to take the spotlight and share their unique talents—be it singing, rap, beatboxing, poetry/shayari, or a hidden talent that deserves the stage.',
      image: '/event3.jpg',
    },
    {
      id: 4,
      title: 'Technical Treasure Hunt',
      date: 'April 26, 2025',
      description: 'It is a thrilling sub-event that challenges your problem-solving skills, logical thinking, and technical knowledge. Teams will solve a series of clues and puzzles to unlock the next level. The fastest and most accurate team wins exciting prizes!',
      image: '/event4.png',
    },
    {
      id: 5,
      title: 'Workshop on deployment',
      date: 'April 26, 2025',
      description: 'In this workshop, you\'ll learn how to take your web or software project from your local machine to a live environment online. We\'ll cover key concepts like deployment, hosting platforms, domain setup, and version control.',
      image: '/event5.jpg',
    },
    {
      id: 6,
      title: 'Best Social Media Post',
      date: 'April 26, 2025',
      description: 'It is an exciting sub-event that gives you a chance to win amazing prizes by showcasing your creativity and photography skills. Participants must post photos on their social media, and the best one will be declared the winner',
      image: '/event6.jpg',
    },
    {
      id: 7,
      title: 'Kill The Bug',
      date: 'April 26, 2025',
      description: 'It is a fun, interactive sub-event that tests your error resolving ability, Participants must recognize the syntax and basic logical errors(bugs) and correct them.',
      image: '/event7.jpg',
    },
    {
      id: 8,
      title: 'Blind Typing Challenge',
      date: 'April 27, 2025',
      description: 'It is a fast-paced sub-event where your coding memory and typing skills are put to the test. See a code snippet… memorize it… then type it out blindly!',
      image: '/event8.jpg',
    },
    {
      id: 9,
      title: 'Random Things Use',
      date: 'April 27, 2025',
      description: 'Put your creativity to the test! In this fun and fast-paced challenge, each participant will be given a random everyday object and participants must tell its uses other than its original use.',
      image: '/event9.jpg',
    }
  ];

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
            <PageTitle>Events</PageTitle>
            <PageSubtitle>Join our exciting events throughout the hackathon</PageSubtitle>
          </motion.div>
        </HeroSection>
        
        <EventsSection>
          <EventsGrid>
            {events.map((event, index) => (
              <EventCard 
                key={event.id}
                as={motion.div}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <EventImageContainer>
                  <EventImage src={event.image} alt={event.title} />
                  <EventDate>
                    <span>{event.date}</span>
                  </EventDate>
                </EventImageContainer>
                <EventContent>
                  <EventTitle>{event.title}</EventTitle>
                  <EventDescription>{event.description}</EventDescription>
                </EventContent>
              </EventCard>
            ))}
          </EventsGrid>
        </EventsSection>
      </PageContainer>
    </>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const HeroSection = styled.section`
  padding: 120px 20px 60px;
  text-align: center;
  position: relative;
  z-index: 2;
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
    font-size: 3rem;
  }
`;

const PageSubtitle = styled.p`
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
  color: #ffffff;
`;

const EventsSection = styled.section`
  padding: 40px 20px 120px;
  position: relative;
  z-index: 2;
`;

const EventsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 30px;
  max-width: 1280px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const EventCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(110, 0, 255, 0.2);
  }
`;

const EventImageContainer = styled.div`
  position: relative;
  height: 200px;
  overflow: hidden;
`;

const EventImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  
  ${EventCard}:hover & {
    transform: scale(1.1);
  }
`;

const EventDate = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  background: linear-gradient(90deg, #6e00ff 0%, #ff00e6 100%);
  color: white;
  padding: 10px 15px;
  border-top-right-radius: 10px;
  display: flex;
  flex-direction: column;
  font-size: 0.9rem;
  font-weight: 600;
`;

const EventContent = styled.div`
  padding: 20px;
`;

const EventTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 15px;
  font-weight: 700;
  color: white;
`;

const EventDescription = styled.p`
  color: #b0b0b0;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const EventButton = styled.button`
  background: transparent;
  color: white;
  border: 2px solid #6e00ff;
  padding: 8px 20px;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  font-weight: 600;
  
  &:hover {
    background: rgba(110, 0, 255, 0.2);
  }
`;

export default EventsPage; 