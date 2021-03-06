import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import Usefirebase from '../../Hooks/Usefirebase';
import './Heade.css';
import m1 from '../../images/1.jpg';
import m2 from '../../images/logo.png';

const Header = () => {
  const {user,logout} = Usefirebase();
    return (
        
<>

<Navbar   bg="light" variant="dark" className="topbar">
    <Container >
    <Nav>
   <span className="social-icon"><i class="fab fa-facebook"></i> </span>
   <span className="social-icon"><i class="fab fa-instagram"></i></span>
   <span className="social-icon"><i class="fab fa-twitter"></i> </span>
  
        </Nav>
    <Nav className="justify-content-end top-nav ">
   
        <p variant="dark" className="" > <i class="fas fa-phone-alt text-danger bold  "></i> Call Us <span>+522 234 56789</span> </p>
        <p variant="dark " className="ms-3" ><i class="far fa-envelope-open text-danger bold"></i> Email us help@domain.com </p>
      
    </Nav>
    </Container>
  </Navbar>

{/* top end */}

  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home"><img
          alt=""
          src={m2}
          width="80"
          height="50"
          className="d-inline-block align-top"
        /></Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Nav.Link as={NavHashLink} to="/home#home">Home</Nav.Link>
      <Nav.Link as={NavHashLink} to="/home#service">Service</Nav.Link>
      <Nav.Link as={NavHashLink} to="/home#doctor">Specislist</Nav.Link>
      {user.email && <Navbar.Text className="me-2">
        User: {user.displayName}
      </Navbar.Text> }
      {
      user.email?<button className="btn btn-outline-light me-2" onClick={logout}  >Logout</button>:<Nav.Link as={Link} to="/login">Login</Nav.Link>
      }
      
      
    </Navbar.Collapse>
    
  
    
    </Container>
  </Navbar>
  
  

  <br />
 
</>
       
        
    );
};

export default Header;
