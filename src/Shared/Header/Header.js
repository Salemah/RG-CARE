import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import Usefirebase from '../../Hooks/Usefirebase';
import m1 from '../../images/1.jpg';
import m2 from '../../images/logo.png';

const Header = () => {
  const {user} = Usefirebase();
    return (
        
<>

<Navbar bg="light" variant="dark">
    <Container>
    {/* //<Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
    <Navbar.Brand href="#home">
        <img
          alt=""
          src={m2}
          width="80"
          height="60"
          className="d-inline-block align-top"
        /></Navbar.Brand>
    <Nav className="justify-content-end pt-3 ">
   
        <p variant="dark" className="" > <i class="fas fa-phone-alt text-danger bold  "></i> Call Us <span>+522 234 56789</span> </p>
        <p variant="dark " className="ms-3" ><i class="far fa-envelope-open text-danger bold"></i> Email us help@domain.com </p>
      
    </Nav>
    </Container>
  </Navbar>

{/* top end */}

  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Nav.Link as={NavHashLink} to="#home">Home</Nav.Link>
      <Nav.Link as={NavHashLink} to="#features">Service</Nav.Link>
      <Nav.Link as={NavHashLink} to="#pricing">Specislist</Nav.Link>
      {
      user?.email?<button className="btn btn-outline-light me-2" >Logout</button>:<Nav.Link as={Link} to="/login">Login</Nav.Link>
      }
      {user?.email && <Navbar.Text>
        Signed in as:Mark Otto {user.displayName}
      </Navbar.Text> }
      
    </Navbar.Collapse>
    
  
    
    </Container>
  </Navbar>
  
  

  <br />
 
</>
       
        
    );
};

export default Header;