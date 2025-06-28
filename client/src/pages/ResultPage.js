import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import VideoBackground from '../components/VideoBackground';

const ResultPage = () => {
  // Animation state
  const [animationPhase, setAnimationPhase] = useState('trophy'); // Phases: trophy, celebration, complete
  
  // Team data array
  const teamData = [
    { teamName: '12Fox', teamLeader: 'Adnan Sheikh' },
    { teamName: '404 Not Found', teamLeader: 'Abhishek Bhardwaj' },
    { teamName: 'Algo Minds', teamLeader: 'Aman Kukreti' },
    { teamName: 'AlgoForge', teamLeader: 'Shivani Bisht' },
    { teamName: 'algonauts', teamLeader: 'bhumi' },
    { teamName: 'AVINYA', teamLeader: 'Anika Dewari' },
    { teamName: 'AVM', teamLeader: 'Anubhav Dhyani' },
    { teamName: 'B.P.N', teamLeader: 'Nupoor pandey' },
    { teamName: 'BitCoders', teamLeader: 'Ashok Kumawat' },
    { teamName: 'Bravos', teamLeader: 'Aarush Tyagi' },
    { teamName: 'Brogrammers', teamLeader: 'Mohit Rana' },
    { teamName: 'Brute Force', teamLeader: 'Ajay Singh Negi' },
    { teamName: 'BumbleBeez', teamLeader: 'Kunal Singh Khatu' },
    { teamName: 'CAPS LOOP', teamLeader: 'Chirag sharma' },
    { teamName: 'ChaloBotBanayein', teamLeader: 'Bhavya Agarwal' },
    { teamName: 'Cipher Sights', teamLeader: 'Swastika Chand' },
    { teamName: 'Close-knit', teamLeader: 'Rishita' },
    { teamName: 'Code Blooded', teamLeader: 'Manas Singhal' },
    { teamName: 'Code catalyst', teamLeader: 'Pankaj singh bora' },
    { teamName: 'code crackers', teamLeader: 'Vedanshi Raturi' },
    { teamName: 'Code Graphers', teamLeader: 'Himanshu Rawat' },
    { teamName: 'CODE-HER', teamLeader: 'Priyanshu Joshi' },
    { teamName: 'Code4Win', teamLeader: 'Harshit Bhatt' },
    { teamName: 'Codecrafters', teamLeader: 'Anmol Raturi' },
    { teamName: 'CodeLoom', teamLeader: 'Abdul Zainul Khan' },
    { teamName: 'Coder pradise', teamLeader: 'Subhanshu Raj' },
    { teamName: "Coder's Hub", teamLeader: 'Shourya Pant' },
    { teamName: 'CODERS CRAFTERS', teamLeader: 'ISHA SHRIVASTAVA' },
    { teamName: 'CODERS CREED', teamLeader: 'Harshita Pokhariya' },
    { teamName: 'CodeStorm', teamLeader: 'Anurag pundir' },
    { teamName: 'CodeX', teamLeader: 'Pankaj Singh' },
    { teamName: 'Codez', teamLeader: 'Nikhil Upreti' },
    { teamName: 'Coding Machines', teamLeader: 'Priyansh Rathore' },
    { teamName: 'CODZOLITE', teamLeader: 'SIMAR SINGH RAYAT' },
    { teamName: 'CruzLink', teamLeader: 'Dhruv Negi' },
    { teamName: 'Cypher', teamLeader: 'Anshul Sharma' },
    { teamName: 'Cypher Chasers', teamLeader: 'Ashish Rautela' },
    { teamName: 'DebugDivas', teamLeader: 'Avni Joshi' },
    { teamName: 'Eagle', teamLeader: 'Prince Kumar' },
    { teamName: 'Ecogenz', teamLeader: 'Abhijeet Singh' },
    { teamName: 'Encodr', teamLeader: 'Tanishka bisht' },
    { teamName: 'Enigma', teamLeader: 'Aryavansh saini' },
    { teamName: 'Experience Seekers', teamLeader: 'Shubham Biajlwan' },
    { teamName: 'Fanatic', teamLeader: 'Himanshu bisht' },
    { teamName: 'FocusForge', teamLeader: 'Kanhaiya dhingra' },
    { teamName: 'Four Arks', teamLeader: 'Shashaank Mishra' },
    { teamName: 'Fusion four', teamLeader: 'Prince Panwar' },
    { teamName: 'GraphiCoders', teamLeader: 'Simranjeet Kaur' },
    { teamName: 'HackieChanss', teamLeader: 'Priyanshi Rawat' },
    { teamName: 'HaptIQ', teamLeader: 'Rakshit Chauhan' },
    { teamName: 'H-O-H', teamLeader: 'Lucky fulera' },
    { teamName: 'Imposter.io', teamLeader: 'Sameer Singh Bhandari' },
    { teamName: 'Inner circle', teamLeader: 'Ajay dev panwar' },
    { teamName: 'Kanyedev', teamLeader: 'Ayush kalakoti' },
    { teamName: 'Krishi Seva', teamLeader: 'Raja Digvijay Singh' },
    { teamName: 'kubermates', teamLeader: 'Abhay Joshi' },
    { teamName: 'MAD MAXX', teamLeader: 'Kartik Mishra' },
    { teamName: 'main()characters', teamLeader: 'Aditya Singh Mandrawal' },
    { teamName: 'Nimbus', teamLeader: 'Sajal Raj' },
    { teamName: 'Novice', teamLeader: 'Sarthak Bhandari' },
    { teamName: 'P Cube', teamLeader: 'Priyanshu Rawat' },
    { teamName: 'Phonix', teamLeader: 'Ayush Dabral' },
    { teamName: 'PixelOps', teamLeader: 'Archita Dayal' },
    { teamName: 'PixelPulse', teamLeader: 'Amisha Malhotra' },
    { teamName: 'Promptpirates', teamLeader: 'Vikas rawat' },
    { teamName: 'Pseudo Coders', teamLeader: 'Himanshu Semwal' },
    { teamName: 'QUANTIX', teamLeader: 'Sharad pawar saini' },
    { teamName: 'Quasar', teamLeader: 'Shekhar khanduri' },
    { teamName: 'RapidFilers', teamLeader: 'Aditya Nautiyal' },
    { teamName: 'Real world resolvers', teamLeader: 'Krishna Singh Bisht' },
    { teamName: 'RecogniTech', teamLeader: 'Ankit Rawat' },
    { teamName: 'ResQTech', teamLeader: 'Ayush tomar' },
    { teamName: 'Runtime Terrors', teamLeader: 'Tanishq Sundriyal' },
    { teamName: 'Runtime Terrors', teamLeader: 'Utkarsh Saini' },
    { teamName: 'Runtime Terrors', teamLeader: 'Rohan Saini' },
    { teamName: 'S.P.A.M Code', teamLeader: 'Ayush Rawat' },
    { teamName: 'Straw Hats', teamLeader: 'Shobhit Rawat' },
    { teamName: 'SHIELD', teamLeader: 'Gaurav Singh Rawat' },
    { teamName: 'Shikhar', teamLeader: 'Sarthak Badoni' },
    { teamName: 'Slot Master', teamLeader: 'Prakash' },
    { teamName: 'Smart sighters', teamLeader: 'Aishna gupta' },
    { teamName: 'Sonic Drop squad', teamLeader: 'Suraj Singh Bhandari' },
    { teamName: 'Spartans', teamLeader: 'Somya Juyal' },
    { teamName: 'Strawhat', teamLeader: 'Ishant Singh Bisht' },
    { teamName: 'Strawhat', teamLeader: 'Aman Singh Rawat' },
    { teamName: 'Synapse', teamLeader: 'Prabhash Uniyal' },
    { teamName: 'Sync Squad', teamLeader: 'Abhishek Kumar Rai' },
    { teamName: 'Tactitan', teamLeader: 'Himanshu Bisht' },
    { teamName: 'Team Delta', teamLeader: 'Sakshi Negi' },
    { teamName: 'Team dynamic', teamLeader: 'Anmol Bahuguna' },
    { teamName: 'Team innovate', teamLeader: 'Sayam Bahuguna' },
    { teamName: 'Team X', teamLeader: 'Ayush Singh Panwar' },
    { teamName: 'Team-Rocket', teamLeader: 'Pulkit Kumar' },
    { teamName: 'TeamRocket', teamLeader: 'Mohammad Kaif' },
    { teamName: 'Tech 4', teamLeader: 'Krishna Gupta' },
    { teamName: 'Tech Hustler', teamLeader: 'Kanika Sikka' },
    { teamName: 'Tech Innovation', teamLeader: 'Rishika Rohila' },
    { teamName: 'Tech Nirvana', teamLeader: 'Raj Basnet' },
    { teamName: 'Tech Trio', teamLeader: 'Kanchan' },
    { teamName: 'TechMigos', teamLeader: 'Vandana Rauthan' },
    { teamName: 'TechNiti', teamLeader: 'Ritika Rawat' },
    { teamName: 'Techno', teamLeader: 'Aman Rawat' },
    { teamName: 'Technoshifters', teamLeader: 'Vansh Singh Lalotra' },
    { teamName: 'TechScouts', teamLeader: 'Tanuja' },
    { teamName: 'The Debug Divas', teamLeader: 'Khyati Chahal' },
    { teamName: 'The Endurance', teamLeader: 'Divyanshu Kaintura' },
    { teamName: 'The Innovators', teamLeader: 'Khusbhu' },
    { teamName: 'WeDevBytes', teamLeader: 'Vansh Goyal' },
    { teamName: 'YUVA CODERS', teamLeader: 'dev kumar prajapati' },
    { teamName: 'Zerone', teamLeader: 'Niharika Bungla' },
     ];
  
  // Generate additional placeholder data to reach 107 rows
  const generateTeamData = () => {
    const fullTeamData = [...teamData];
    
    // Add placeholder data until we reach 107 rows
    for (let i = teamData.length; i < 109; i++) {
      fullTeamData.push({
        teamName: `Team ${i + 1}`,
        teamLeader: `Leader ${i + 1}`
      });
    }
    
    return fullTeamData;
  };

  // Control animation sequence
  useEffect(() => {
    // After 2 seconds, switch to celebration phase
    const celebrationTimer = setTimeout(() => {
      setAnimationPhase('celebration');
    }, 2000);
    
    // After 7 seconds total, complete the animation
    const completeTimer = setTimeout(() => {
      setAnimationPhase('complete');
    }, 7000);
    
    return () => {
      clearTimeout(celebrationTimer);
      clearTimeout(completeTimer);
    };
  }, []);

  return (
    <>
      <VideoBackground />
      
      {/* Trophy and celebration animations */}
      <AnimatePresence>
        {animationPhase === 'trophy' && (
          <OverlayContainer
            initial={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
            animate={{ backgroundColor: 'rgba(0, 0, 0, 0.85)' }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <TrophyContainer
              initial={{ scale: 0, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 1.5, opacity: 0 }}
              transition={{ 
                type: 'spring', 
                stiffness: 300, 
                damping: 15,
                delay: 0.3
              }}
            >
              <TrophyImage 
                src="/trophy.png" 
                alt="Trophy"
                animate={{
                  boxShadow: [
                    '0 0 25px 10px rgba(255, 215, 0, 0.7)',
                    '0 0 45px 20px rgba(255, 215, 0, 0.9)',
                    '0 0 25px 10px rgba(255, 215, 0, 0.7)'
                  ]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'reverse'
                }}
              />
            </TrophyContainer>
          </OverlayContainer>
        )}
        
        {animationPhase === 'celebration' && (
          <CelebrationContainer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FireworksEffect />
            <ConfettiEffect />
            <SparklesEffect />
            
            <VictoryText
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                type: 'spring', 
                stiffness: 300, 
                damping: 15,
                delay: 0.5
              }}
            >
              Congratulations!
            </VictoryText>
          </CelebrationContainer>
        )}
      </AnimatePresence>
      
      {/* Main content with reduced opacity during animations */}
      <PageContainer
        style={{
          filter: animationPhase !== 'complete' ? 'blur(5px)' : 'none',
          opacity: animationPhase !== 'complete' ? 0.3 : 1,
          transition: 'filter 0.5s ease, opacity 0.5s ease'
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ 
            opacity: animationPhase === 'complete' ? 1 : 0.3, 
            y: 0 
          }}
          transition={{ duration: 0.8 }}
        >
          <ContentWrapper>
            <PageTitle>Result</PageTitle>
            
            <ResultTableContainer>
              <ResultTable
                as={motion.div}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ 
                  scale: animationPhase === 'complete' ? 1 : 0.9, 
                  opacity: animationPhase === 'complete' ? 1 : 0 
                }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <TableResponsive>
                  <table>
                    <thead>
                      <tr>
                        <th className="serial-col">S.No</th>
                        <th>Team Name</th>
                        <th>Team Leader</th>
                      </tr>
                    </thead>
                    <tbody>
                      {generateTeamData().map((team, index) => (
                        <tr key={index}>
                          <td className="serial-col">{index + 1}</td>
                          <td>{team.teamName}</td>
                          <td>{team.teamLeader}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </TableResponsive>
              </ResultTable>
            </ResultTableContainer>
          </ContentWrapper>
        </motion.div>
      </PageContainer>
    </>
  );
};

// Trophy animation components
const OverlayContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  pointer-events: none;
`;

const TrophyContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TrophyImage = styled(motion.img)`
  width: 300px;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
  
  @media (max-width: 768px) {
    width: 200px;
  }
`;

// Celebration components
const CelebrationContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  pointer-events: none;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const VictoryText = styled(motion.div)`
  position: absolute;
  font-size: 5rem;
  font-weight: 800;
  background: linear-gradient(90deg, #FFD700, #FFA500);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.5));
  text-align: center;
  width: 100%;
  padding: 0 20px;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

// Fireworks effect component
const FireworksEffect = () => {
  const fireworks = Array.from({ length: 10 }, (_, i) => {
    const left = Math.random() * 100;
    const top = Math.random() * 50;
    const size = Math.random() * 80 + 80;
    const delay = Math.random() * 2;
    const duration = Math.random() * 1.5 + 1;
    
    return (
      <Firework
        key={i}
        style={{
          left: `${left}%`,
          top: `${top}%`,
          '--size': `${size}px`,
          '--delay': `${delay}s`,
          '--duration': `${duration}s`
        }}
      />
    );
  });
  
  return <>{fireworks}</>;
};

const Firework = styled.div`
  position: absolute;
  pointer-events: none;
  
  &:before {
    content: '';
    position: absolute;
    width: var(--size);
    height: var(--size);
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%);
    transform: scale(0);
    animation: firework-explode var(--duration) ease-out var(--delay) 2;
    mix-blend-mode: screen;
  }
  
  &:after {
    content: '';
    position: absolute;
    width: var(--size);
    height: var(--size);
    background-image: 
      radial-gradient(circle, #ff0 10%, transparent 10%),
      radial-gradient(circle, #ff0 10%, transparent 10%),
      radial-gradient(circle, #ff5500 10%, transparent 10%),
      radial-gradient(circle, #ff5500 10%, transparent 10%),
      radial-gradient(circle, #00ff00 10%, transparent 10%),
      radial-gradient(circle, #00ff00 10%, transparent 10%),
      radial-gradient(circle, #0000ff 10%, transparent 10%),
      radial-gradient(circle, #0000ff 10%, transparent 10%);
    background-position: 
      calc(50% + var(--size) * 0.5) calc(50%),
      calc(50% - var(--size) * 0.5) calc(50%),
      calc(50%) calc(50% + var(--size) * 0.5),
      calc(50%) calc(50% - var(--size) * 0.5),
      calc(50% + var(--size) * 0.35) calc(50% + var(--size) * 0.35),
      calc(50% - var(--size) * 0.35) calc(50% - var(--size) * 0.35),
      calc(50% + var(--size) * 0.35) calc(50% - var(--size) * 0.35),
      calc(50% - var(--size) * 0.35) calc(50% + var(--size) * 0.35);
    background-size: var(--size) var(--size);
    background-repeat: no-repeat;
    transform: scale(0);
    animation: firework-particles var(--duration) ease-out var(--delay) 2;
    mix-blend-mode: screen;
  }
  
  @keyframes firework-explode {
    0% {
      transform: scale(0);
      opacity: 1;
    }
    20% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(1.2);
      opacity: 0;
    }
  }
  
  @keyframes firework-particles {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    5% {
      opacity: 1;
    }
    30% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(1.5);
      opacity: 0;
    }
  }
`;

// Confetti effect component
const ConfettiEffect = () => {
  const confetti = Array.from({ length: 100 }, (_, i) => {
    const size = Math.random() * 10 + 5;
    const left = Math.random() * 100;
    const animationDuration = Math.random() * 3 + 2;
    const delay = Math.random() * 2;
    const color = [
      '#6e00ff', '#ff00e6', '#00e6ff', '#ff6e00', '#e6ff00',
      '#ff0051', '#00ff51', '#5100ff', '#00ff9a', '#ff9a00',
      '#FFD700', '#FFA500', '#FF4500' // Gold, orange, red-orange for achievement colors
    ][Math.floor(Math.random() * 13)];
    
    return (
      <Confetti
        key={i}
        as={motion.div}
        style={{
          left: `${left}%`,
          width: `${size}px`,
          height: `${size}px`,
          background: color,
          animationDuration: `${animationDuration}s`,
          animationDelay: `${delay}s`
        }}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: '100vh', opacity: [0, 1, 1, 0] }}
        transition={{
          duration: animationDuration,
          delay: delay,
          ease: 'linear'
        }}
      />
    );
  });

  return <>{confetti}</>;
};

const Confetti = styled(motion.div)`
  position: absolute;
  top: -20px;
  border-radius: ${props => props.style.width === props.style.height ? '50%' : '2px'};
  transform: rotate(${() => Math.random() * 360}deg);
`;

// Sparkles effect component
const SparklesEffect = () => {
  const sparkles = Array.from({ length: 30 }, (_, i) => {
    const size = Math.random() * 8 + 4;
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const duration = Math.random() * 2 + 1;
    const delay = Math.random() * 3;
    
    return (
      <Sparkle
        key={i}
        style={{
          left: `${left}%`,
          top: `${top}%`,
          width: `${size}px`,
          height: `${size}px`,
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`
        }}
      />
    );
  });
  
  return <>{sparkles}</>;
};

const Sparkle = styled.div`
  position: absolute;
  background-color: white;
  border-radius: 50%;
  filter: drop-shadow(0 0 6px rgba(255, 255, 255, 0.8));
  animation: sparkle-twinkle var(--duration, 2s) ease-in-out var(--delay, 0s) infinite;
  
  @keyframes sparkle-twinkle {
    0%, 100% {
      opacity: 0;
      transform: scale(0);
    }
    50% {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

// Page content components
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 100px 20px;
  position: relative;
  z-index: 1;
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

const ResultTableContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 2rem auto;
  padding: 0 1rem;
  
  @media (max-width: 768px) {
    padding: 0;
    max-width: 100%;
  }
`;

const ResultTable = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  width: 100%;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #6e00ff, #ff00e6);
    z-index: 1;
  }
  
  @media (max-width: 768px) {
    padding: 1rem;
    border-radius: 0;
    
    &:before {
      height: 2px;
    }
  }
`;

const TableResponsive = styled.div`
  width: 100%;
  overflow-x: auto;
  
  table {
    width: 100%;
    border-collapse: collapse;
    color: white;
    table-layout: fixed;
    border-radius: 8px;
    overflow: hidden;
    
    th, td {
      padding: 1rem;
      text-align: left;
      border-bottom: 1px solid rgba(255, 255, 255, 0.15);
      word-wrap: break-word;
    }
    
    th {
      background-color: rgba(0, 0, 0, 0.4);
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 1px;
      position: sticky;
      top: 0;
      color: #f0f0f0;
      padding: 1.2rem 1rem;
      font-size: 1rem;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    }
    
    tr {
      transition: background-color 0.3s ease;
    }
    
    tr:nth-child(odd) {
      background-color: rgba(255, 255, 255, 0.03);
    }
    
    tr:hover {
      background-color: rgba(255, 255, 255, 0.08);
    }
    
    .serial-col {
      width: 75px;
      text-align: center;
      font-weight: 500;
      color: rgba(255, 255, 255, 0.7);
    }
    
    @media (max-width: 768px) {
      th, td {
        padding: 0.75rem 0.5rem;
        font-size: 0.9rem;
      }
      
      .serial-col {
        width: 55px;
      }
    }
    
    @media (max-width: 480px) {
      th, td {
        padding: 0.5rem 0.3rem;
        font-size: 0.8rem;
      }
      
      .serial-col {
        width: 45px;
      }
    }
  }
`;

export default ResultPage;
