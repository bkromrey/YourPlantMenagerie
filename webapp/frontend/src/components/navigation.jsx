import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


// Citation for code for the NavBar function 
// Date: 27 July 2024
// Adapted from the example code in the React Bootstrap documentation.
// Source URL: https://react-bootstrap.github.io/docs/components/navbar

function NavBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" fixed='top'>
        <Container>
        <img className="d-flex align-items-center"
                src='plant.svg' alt='plant icon' width='20' />


            <strong>&nbsp;Your Plant Menagerie</strong>

            {/* commenting this out for now, since there's an issue with the active pill color not disappearing when this is clicked */}
            {/* <LinkContainer to="/">
                <Navbar.Brand>&nbsp;Your Plant Menagerie</Navbar.Brand>
            </LinkContainer> */}


            {/* everything here will shrink down into a hamburger menu when viewport is tiny */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav variant="pills" defaultActiveKey="/" className="me-auto">

                <LinkContainer to="/plants">
                    <Nav.Link>Plants</Nav.Link>
                </LinkContainer>

                <LinkContainer to="/plantTypes">
                    <Nav.Link>Plant Types</Nav.Link>
                </LinkContainer>
                
                <LinkContainer to="/soilTypes">
                    <Nav.Link>Soil Types</Nav.Link>
                </LinkContainer>

                <LinkContainer to="/wateringEvents">
                    <Nav.Link>Watering Events</Nav.Link>
                </LinkContainer>

                <LinkContainer to="/fertilizingEvents">
                    <Nav.Link>Fertilizing Events</Nav.Link>
                </LinkContainer>

                <LinkContainer to="/plantSoils">
                    <Nav.Link>Plant Soils</Nav.Link>
                </LinkContainer>

            </Nav>
            </Navbar.Collapse>

        </Container>
        </Navbar>
    );
}

export default NavBar;