import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <NavbarContainer scrolled={scrolled}>
      <NavbarContent>
        <RightLogo>
          <LogoImage src="/logooo.png" alt="RightLogo" />
        </RightLogo>
        <MenuToggle onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </MenuToggle>
        <NavMenu isOpen={isOpen}>
          <NavItem active={location.pathname === '/'}>
            <NavLink to="/" onClick={closeMenu}>Home</NavLink>
          </NavItem>
          {/* <NavItem active={location.pathname === '/register'}>
            <NavLink to="/register" onClick={closeMenu}>Register</NavLink>
          </NavItem> */}
          <NavItem active={location.pathname === '/about'}>
            <NavLink to="/about" onClick={closeMenu}>About</NavLink>
          </NavItem>
          <NavItem active={location.pathname === '/events'}>
            <NavLink to="/events" onClick={closeMenu}>Events</NavLink>
          </NavItem>
          <NavItem active={location.pathname === '/schedule'}>
            <NavLink to="/schedule" onClick={closeMenu}>Schedule</NavLink>
          </NavItem>
          <NavItem active={location.pathname === '/certificate'}>
            <NavLink to="/certificate" onClick={closeMenu}>Certificate</NavLink>
          </NavItem>
          <NavItem active={location.pathname === '/contact'}>
            <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
          </NavItem>
        </NavMenu>
      </NavbarContent>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  transition: all 0.3s ease;
  background: ${props => props.scrolled ? 'rgba(10, 10, 10, 0.95)' : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
  box-shadow: ${props => props.scrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none'};
`;

const NavbarContent = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;

  @media (max-width: 768px) {
    flex-direction: row-reverse; /* Logo on right, toggle on left */
  }
`;


const RightLogo = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  margin-right: 10px; /* margin from the right edge on mobile */

  @media (min-width: 769px) {
    margin-right: 0;
  }
`;

const LogoImage = styled.img`
  height: 100%;
  object-fit: contain;
`;

const MenuToggle = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  cursor: pointer;
  z-index: 1001;
  
  span {
    display: block;
    height: 3px;
    width: 100%;
    background-color: #ffffff;
    border-radius: 3px;
    transition: all 0.3s ease;
  }
  
  @media (max-width: 768px) {
    display: flex;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 10px; /* margin from the left */
    width: calc(70% - 10px); /* margin from the right */
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(10, 10, 10, 0.95);
    backdrop-filter: blur(10px);
    transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(-100%)'}; /* changed direction */
    transition: transform 0.3s ease;
    z-index: 1000;
  }
`;


const NavItem = styled.li`
  margin: 0 15px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: ${props => props.active ? '100%' : '0'};
    height: 2px;
    background-color: #6e00ff;
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
  
  @media (max-width: 768px) {
    margin: 20px 0;
    
    &::after {
      bottom: -8px;
    }
  }
`;

const NavLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  transition: color 0.3s ease;
  
  &:hover {
    color: #6e00ff;
  }
`;

export default Navbar;
