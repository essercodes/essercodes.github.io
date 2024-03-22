import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
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
                    <div className="d-md-none m-l-1 title">Max</div>
                <Navbar.Brand id="nav-logo">
                    <img
                        alt="lightbulb logo"
                        src={bulb}
                        width="45"
                        height="35"
                    />
                </Navbar.Brand>
                    <div className="d-none d-md-block title">Max</div>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
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