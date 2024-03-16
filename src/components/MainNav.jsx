import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import bulb from "/bulb.svg"

function MainNav(props) {

    return (
        <div>
            <Navbar fixed="top">
                <Navbar.Brand>
                    <img
                        alt="lightbulb logo"
                        src={bulb}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>{<div className="title">Max</div>}
                <Container>
                    <Nav>
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="about">About Me</Nav.Link>
                        <Nav.Link as={Link} to="resume">Resume</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <div id="main-outlet">
                <Outlet />
            </div>
        </div>
    )
}

export default MainNav;