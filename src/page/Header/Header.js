import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../img/logo2.png';
import './Header.css'

const Header = () => {
    return (
        <>
<Navbar collapseOnSelect expand="lg" bg="white" variant="light" sticky="top">
        <Container>
          <Navbar.Brand href="#home"  className="w-25"><img src={logo} alt="" className="w-75" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
             <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link as={Link} to="/home" className="text-black nav-regular">Home</Nav.Link>
                <Nav.Link as={Link} to="/cart" className="text-black nav-regular"><i className="fas fa-shopping-cart"></i></Nav.Link>
                <Nav.Link as={Link} to="/login" className="text-black nav-regular">Login</Nav.Link>
                <button className="btn btn-regular shadow">Sign up</button>
                
                </Nav>
            </Navbar.Collapse>
        </Container>
</Navbar>
        </>
    );
};

export default Header;