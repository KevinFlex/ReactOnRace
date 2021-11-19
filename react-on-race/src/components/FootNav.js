import React from 'react';
import '../App.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

function FootNav() {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">FlexDevelopment © 2021</Navbar.Brand>
            <Nav className="d-none d-sm-inline-block mr-auto">
            </Nav>
        </Navbar>
    );
}

export default FootNav;