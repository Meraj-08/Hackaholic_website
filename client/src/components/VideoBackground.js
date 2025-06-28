import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const VideoBackground = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRefs = [useRef(null), useRef(null), useRef(null),useRef(null),useRef(null)];
  const videoSources = [
    '/creativityVideo3.mp4',
    '/Promotion_video3.mp4',
    '/creativityVideo1.mp4',
    '/creativityVideo2.mp4',
  ];
  
  useEffect(() => {
    // Function to handle video end event
    const handleVideoEnd = () => {
      // Move to the next video in the sequence
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoSources.length);
    };

    // Add event listeners to all videos
    videoRefs.forEach((ref, index) => {
      if (ref.current) {
        ref.current.addEventListener('ended', handleVideoEnd);
      }
    });

    // Clean up event listeners
    return () => {
      videoRefs.forEach((ref) => {
        if (ref.current) {
          ref.current.removeEventListener('ended', handleVideoEnd);
        }
      });
    };
  }, [videoSources.length]);

  // Play the current video when it changes
  useEffect(() => {
    // Pause all videos first
    videoRefs.forEach((ref) => {
      if (ref.current) {
        ref.current.pause();
      }
    });

    // Play the current video
    const currentVideo = videoRefs[currentVideoIndex].current;
    if (currentVideo) {
      currentVideo.currentTime = 0;
      const playPromise = currentVideo.play();
      
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error('Auto-play was prevented:', error);
        });
      }
    }
  }, [currentVideoIndex]);

  return (
    <VideoContainer>
      {videoSources.map((src, index) => (
        <Video
          key={src}
          ref={videoRefs[index]}
          src={src}
          muted
          playsInline
          preload="auto"
          isActive={index === currentVideoIndex}
        />
      ))}
      <Overlay />
    </VideoContainer>
  );
};

const VideoContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
`;

const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${props => (props.isActive ? 1 : 0)};
  transition: opacity 1s ease-in-out;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(10, 10, 10, 0.7) 0%,
    rgba(10, 10, 10, 0.5) 50%,
    rgba(10, 10, 10, 0.8) 100%
  );
`;

export default VideoBackground;
