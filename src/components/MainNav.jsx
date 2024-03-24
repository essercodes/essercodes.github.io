import React, { useState } from "react";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import bulb from "/bulb.svg"

function MainNav(props) {

    return (
        <div>
            <Navbar
                collapseOnSelect
                expand="md"
                fixed="top"
                className="fixed-navbar"
                variant="blue"
            >
                <div className="mx-3 d-md-none title">Max</div>
                <Navbar.Brand>
                    <Container>
                        <Row className="g-2">
                            <Col>
                                <img 
                                    className="vertical-center logo"
                                    alt="lightbulb logo"
                                    src={bulb}
                                    width="40"
                                    height="40"
                                    color="red"
                                />
                            </Col>
                            <Col>
                                <div className="d-none d-md-block title vertical-center">Max</div>
                            </Col>
                        </Row>
                    </Container>
                </Navbar.Brand>
                <Navbar.Toggle className="mx-3" aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link as={Link} to="/" eventKey={"home"}>Home</Nav.Link>
                        <Nav.Link as={Link} to="about" eventKey={"about"}>About Me</Nav.Link>
                        <Nav.Link as={Link} to="resume" eventKey={"resume"}>Resume</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div id="main-outlet">
                <Outlet />
            </div>
        </div>
    )
}

export default MainNav;