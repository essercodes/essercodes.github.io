import '../css/navbar.css'
import '../css/logo.css'

import React, {useContext, useEffect} from "react";
import {Navbar, Nav, Container, Row,} from "react-bootstrap";
import {Link, Outlet} from "react-router-dom";
import BulbSvg from "/public/bulb.svg?react";
import Letters from "./Letters.jsx";
import ThemeContext from "../contexts/ThemeContext.js";
import TitleContext from "../contexts/TitleContext.js";
import MyNavLink from "./MyNavLink.jsx";

function MainNav() {
    const [theme, setTheme] = useContext(ThemeContext);
    const [title, _] = useContext(TitleContext);
    const landing_page_navlink_id = "Home-Button";


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

    // Make the home button active in bootstrap nav
    useEffect(() => {
        document.getElementById(landing_page_navlink_id).click()
    }, [])

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
                    {/* todo: make these 3 into a component */}
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