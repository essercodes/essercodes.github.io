import '../css/navbar.css'
import '../css/logo.css'

import React, {useContext, useEffect} from "react";
import {Navbar, Nav, Container, Row,} from "react-bootstrap";
import {Link, Outlet} from "react-router-dom";
import BulbSvg from "/public/bulb.svg?react";
import Letters from "./Letters.jsx";
import ThemeContext from "../contexts/ThemeContext.js";
import TitleContext from "../contexts/TitleContext.js";

function MainNav() {
    const [theme, setTheme] = useContext(ThemeContext);
    const [title, _] = useContext(TitleContext);

    const setBackgroundToCssProp = (prop) => {
        const app_elem = document.getElementById('App');
        const bg_color = getComputedStyle(app_elem).getPropertyValue(prop) ?? "#FFFFFF";
        document.documentElement.style.setProperty('--bg', bg_color);
    }

    const themeSwitch = () => {
        setTheme(prevTheme => {
            if (prevTheme === "light") {
                setBackgroundToCssProp('--dark-bg');
                return "dark";
            } else {
                setBackgroundToCssProp('--light-bg');
                return "light";
            }
        });
    }

    return (
        <div>
            <Navbar
                collapseOnSelect
                expand="md"
                fixed="top"
                className={`${theme} fixed-navbar`}
                variant={theme}
            >
                <div className="title d-md-none d-block">
                    <Letters className="nav-letter" text={title}/>
                </div>
                <div onClick={themeSwitch} id="center-logo" className="d-md-none d-block mx-auto">
                    {/*Hidden only on sm*/}
                    <BulbSvg className="logo"/>
                </div>
                <Navbar.Brand className="d-none d-md-block d-none">
                    <Container>
                        <Row onClick={themeSwitch}>
                            {/* Visible only on sm */}
                            <BulbSvg className="logo"/>
                        </Row>
                    </Container>
                </Navbar.Brand>
                <Navbar.Toggle className="navbar-toggler" aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse>
                    <Nav>
                        <MyNavLink title="Home" to="/" eventKey="home"/>
                        <MyNavLink title="About" to="about" eventKey="about"/>
                        <MyNavLink title="XP" to="xp" eventKey="xp"/>
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

// props.title must match Page props.title
function MyNavLink(props) {
    const [title, _] = useContext(TitleContext);

    // hide when smaller less than or equal to bootstrap md
    const hideClass = title === props.title ? "d-none d-md-block d-none" : "";

    return <Nav.Link
        id={`${props.title}-Button`}
        className={`my-navlink ${hideClass}`}
        as={Link}
        to={props.to}
        eventKey={props.eventKey}
    >
        <Letters className="nav-letter" text={props.title}/>
    </Nav.Link>
}
