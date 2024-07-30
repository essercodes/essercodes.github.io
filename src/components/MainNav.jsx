import React, {useState} from "react";
import {Navbar, Nav, Container, Row, Col, Button} from "react-bootstrap";
import {Link, Outlet} from "react-router-dom";
import BulbSvg from "/public/bulb.svg?react";
import Letters from "./Letters.jsx";

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
                <Navbar.Brand href="/">
                    <Container>
                        <Row className="g-2">
                            <BulbSvg className="logo"/>
                        </Row>
                    </Container>
                </Navbar.Brand>
                <Navbar.Toggle className="mx-3 navbar-toggler" variant="dark" aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link className="my-navlink" as={Link} to="/" eventKey={"home"}>
                            <Letters className="green-letter" text="Home"/>
                        </Nav.Link>
                        <Nav.Link className="my-navlink" as={Link} to="about" eventKey={"about"}>
                            <Letters className="green-letter" text="About Me"/>
                        </Nav.Link>
                        <Nav.Link className="my-navlink" as={Link} to="resume" eventKey={"resume"}>
                            <Letters className="green-letter" text="Resume"/>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div id="main-outlet">
                <Outlet/>
            </div>
        </div>
    )
}

export default MainNav;