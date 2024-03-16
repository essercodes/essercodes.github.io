import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function MainNav(props) {

    return (
        <div>
            <Navbar>
                <Container>
                    <Nav>
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="about">About Me</Nav.Link>
                        <Nav.Link as={Link} to="resume">Resume</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default MainNav;