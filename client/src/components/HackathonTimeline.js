import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const HackathonTimeline = () => {
  const [ref1, inView1] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  
  const [ref2, inView2] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  
  const [ref3, inView3] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      }
    }
  };

  return (
    <TimelineContainer
      as={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <TimelineHeading>Hackathon Journey</TimelineHeading>
      <TimelineDescription>
      Our hackathon features three exciting rounds that take you from ideation to final 
      presentation, offering a complete journey to unleash your potential.
      </TimelineDescription>
      
      <Timeline>
        <TimelineItem
          ref={ref1}
          as={motion.div}
          initial={{ opacity: 0, x: -100 }}
          animate={inView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <TimelineNumber>01</TimelineNumber>
          <TimelineContent>
            <TimelineItemTitle>Round 1: Registration Round</TimelineItemTitle>
            <TimelineItemDescription>
              <ul>
                <li>Submit your presentation, explaining your idea.</li>
                <li>Showcase your creativity and problem-solving approach.</li>
                <li>The most promising ideas will be selected to move on to the next round.</li>
                <li>There are no charges for this round.</li>
                <li style={{ color: '#FFFF00' }}>Last date of submission: April 21, 2025</li>
              </ul>

            </TimelineItemDescription>
            <TimelineDetails>
            
              <TimelineDetailItem>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                <span>Team Size: 3-4 Members</span>
              </TimelineDetailItem>
              {/* <TimelineDetailItem>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 11 12 14 22 4"></polyline>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                </svg>
                <span>Selection: Top 50% Teams</span>
              </TimelineDetailItem> */}
              <Link to="/certificate" style={{ textDecoration: 'none' }}>
                <PrimaryButton as="div">Download Certificate</PrimaryButton>
              </Link>
            </TimelineDetails>
          </TimelineContent>
        </TimelineItem>
        
        <TimelineItem
          ref={ref2}
          as={motion.div}
          initial={{ opacity: 0, x: 100 }}
          animate={inView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          reverse
        >
          <TimelineNumber>02</TimelineNumber>
          <TimelineContent>
            <TimelineItemTitle>Round 2:   24 Hours Hackathon</TimelineItemTitle>
            <TimelineItemDescription>
            <ul>
              <li>Teams will have 24 hours of nonstop innovation and developing solutions.</li>
              <li>Rs. 300 registration fee per team if your team is selected.</li>
              <li>Fun events and games to keep the energy high.</li>
              <li>A chance to win exciting rewards and prizes.</li>
            </ul>

            </TimelineItemDescription>
            <TimelineDetails>
              <TimelineDetailItem>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span>Duration: 24 Hours</span>
              </TimelineDetailItem>
              {/* <TimelineDetailItem>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span>Resources: Provided</span>
              </TimelineDetailItem> */}
              <TimelineDetailItem>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 11 12 14 22 4"></polyline>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                </svg>
                <span>Selection: Top 3 Teams</span>
              </TimelineDetailItem>
            </TimelineDetails>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </TimelineContainer>
  );
};

const PrimaryButton = styled.button`
  display: inline-block;
  padding: 14px 32px;
  background: linear-gradient(90deg, #6e00ff 0%, #ff00e6 100%);
  color: white;
  border: none;
  border-radius: 30px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  box-shadow: 0 4px 15px rgba(110, 0, 255, 0.3);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(110, 0, 255, 0.4);
  }
`;

const TimelineContainer = styled.div`
  padding: 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const TimelineHeading = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 20px;
  background: linear-gradient(90deg, #6e00ff 0%, #ff00e6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

const TimelineDescription = styled.p`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 60px;
  color: #b0b0b0;
  line-height: 1.6;
`;

const Timeline = styled.div`
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    width: 2px;
    background-color: #6e00ff;
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    
    @media (max-width: 768px) {
      left: 30px;
    }
  }
`;

const TimelineItem = styled.div`
  display: flex;
  justify-content: ${props => props.reverse ? 'flex-start' : 'flex-end'};
  padding-bottom: 70px;
  position: relative;
  width: 100%;
  
  &:last-child {
    padding-bottom: 0;
  }
  
  @media (max-width: 768px) {
    justify-content: flex-start;
    padding-left: 70px;
  }
`;

const TimelineNumber = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #6e00ff 0%, #ff00e6 100%);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
  color: white;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  box-shadow: 0 5px 15px rgba(110, 0, 255, 0.4);
  
  @media (max-width: 768px) {
    left: 30px;
    width: 50px;
    height: 50px;
    font-size: 18px;
  }
`;

const TimelineContent = styled.div`
  background-color: rgba(26, 26, 26, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 30px;
  width: 45%;
  position: relative;
  border: 1px solid rgba(110, 0, 255, 0.3);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  
  &::before {
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 10px 10px 10px 0;
    border-color: transparent rgba(26, 26, 26, 0.7) transparent transparent;
    top: 20px;
    left: -10px;
    transform: ${props => props.reverse ? 'none' : 'rotate(180deg)'};
    transform-origin: center;
    
    @media (max-width: 768px) {
      transform: none;
      left: -10px;
    }
  }
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TimelineItemTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #ffffff;
`;

const TimelineItemDescription = styled.div`
  color: #ddd;
  margin-top: 10px;
  ul {
    padding-left: 20px;
    margin: 15px;
    list-style-type: disc;
  }
  li {
    margin-bottom: 8px;
    line-height: 1.5;
  }
`;

const TimelineDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

const TimelineDetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: rgba(110, 0, 255, 0.1);
  padding: 8px 12px;
  border-radius: 30px;
  
  svg {
    color: #6e00ff;
  }
  
  span {
    font-size: 14px;
    color: #ffffff;
  }
`;

export default HackathonTimeline;
