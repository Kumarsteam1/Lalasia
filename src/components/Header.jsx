import React, { useEffect, useState } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Logo from '../assets/logo.png';
import User from '../assets/user.png';
import Bag from '../assets/bag.png';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      className={`custom-navbar ${scrolled ? 'scrolled' : ''}`}
      fixed="top"
    >
      <Container className="d-flex justify-content-between align-items-center">
        {/* Logo */}
        <Navbar.Brand href="#home" className="d-flex align-items-center gap-2">
          <img src={Logo} alt="Logo" width="28" height="28" />
          <span className="fw-bold fs-5 text-dark mb-0">Lalasiaaa</span>
        </Navbar.Brand>

        {/* Toggle for mobile */}
        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar" className="justify-content-between">
          {/* Center nav links */}
          <Nav className="mx-auto gap-lg-4 text-center">
            <Nav.Link href="#product" className="text-dark">Products</Nav.Link>
            <Nav.Link href="#services" className="text-dark">Services</Nav.Link>
            <Nav.Link href="#article" className="text-dark">Articles</Nav.Link>
            <Nav.Link href="#about" className="text-dark">About Usr</Nav.Link>
          </Nav>

          {/* Right icons */}
          <div className="d-flex gap-3 justify-content-center mt-3 mt-lg-0">
            <img src={Bag} alt="Cart" width="20" height="20" />
            <img src={User} alt="User" width="20" height="20" />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
