import '../css/navbar.css'
import '../css/logo.css'

import React, {useContext, useEffect} from "react";
import {Navbar, Nav, Container, Row,} from "react-bootstrap";
import {Link, Outlet} from "react-router-dom";
import BulbSvg from "/public/bulb.svg?react";
import Letters from "./Letters.jsx";
import ThemeContext from "../contexts/ThemeContext.js";

function MainNav() {
    const [theme, setTheme] = useContext(ThemeContext);
    const themeSwitch = () => {
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");

        // Set the root background to light or dark --bg0
        const app_elem = document.getElementById('App');
        const bg_color = getComputedStyle(app_elem).getPropertyValue('--bg0');
        console.log(app_elem, bg_color);
        document.documentElement.style.setProperty('--bg', bg_color);
    }

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
                <div onClick={themeSwitch} className="d-md-none d-xxl-block mx-auto">
                    {/*Hidden only on sm*/}
                    <BulbSvg className="logo"/>
                </div>
                <Navbar.Brand>
                    <Container>
                        <Row onClick={themeSwitch} className="d-none d-md-block d-xxl-none">
                            {/* Visible only on sm */}
                            <BulbSvg className="logo"/>
                        </Row>
                    </Container>
                </Navbar.Brand>
                <Navbar.Toggle className="navbar-toggler" aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link id="homeButton" className="my-navlink" as={Link} to="/" eventKey={"home"}>
                            <Letters className="nav-letter" text="Home"/>
                        </Nav.Link>
                        <Nav.Link className="my-navlink" as={Link} to="about" eventKey={"about"}>
                            <Letters className="nav-letter" text="About Me"/>
                        </Nav.Link>
                        <Nav.Link className="my-navlink" as={Link} to="resume" eventKey={"resume"}>
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