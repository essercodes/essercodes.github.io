import '../css/navbar.css'
import '../css/logo.css'

import React, {useContext, useEffect, useState} from "react";
import {Navbar, Nav, Container, Row,} from "react-bootstrap";
import {Link, Outlet} from "react-router-dom";
import BulbSvg from "/public/bulb.svg?react";
import Letters from "./Letters.jsx";
import ThemeContext from "../contexts/ThemeContext.js";

function MainNav() {
    const [theme, setTheme] = useContext(ThemeContext);
    const themeSwitch = () => setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");

    useEffect(() => {document.getElementById("homeButton").click()}, [])

    return (
        <div>
            <Navbar
                collapseOnSelect
                expand="md"
                fixed="top"
                className={`${theme} fixed-navbar`}
                variant="blue"
            >
                <div onClick={themeSwitch} className="mx-3 d-md-none">
                    <BulbSvg className="logo"/>
                </div>
                <Navbar.Brand>
                    <Container>
                        <Row onClick={themeSwitch} className="g-2">
                            <BulbSvg className="logo"/>
                        </Row>
                    </Container>
                </Navbar.Brand>
                <Navbar.Toggle className="navbar-toggler" aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link id="homeButton" className="my-navlink px-4" as={Link} to="/" eventKey={"home"}>
                            <Letters className="nav-letter" text="Home"/>
                        </Nav.Link>
                        <Nav.Link className="my-navlink px-4" as={Link} to="about" eventKey={"about"}>
                            <Letters className="nav-letter" text="About Me"/>
                        </Nav.Link>
                        <Nav.Link className="my-navlink px-4" as={Link} to="resume" eventKey={"resume"}>
                            <Letters className="nav-letter" text="Resume"/>
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