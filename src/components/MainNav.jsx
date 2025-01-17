import './navbar.css'
import './logo.css'

import React, {useContext} from "react";
import {Navbar, Nav, Container, Row, Col,} from "react-bootstrap";
import {Link, Outlet, useLocation} from "react-router-dom";
import BulbSvg from "../assets/logoBulb.svg?react";
import ThemeContext from "../contexts/ThemeContext.js";
import TitleContext from "../contexts/TitleContext.js";

function MainNav() {
    const [theme, setTheme] = useContext(ThemeContext);
    const [compactTitle, _] = useContext(TitleContext);

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

    return (<div>
        <Navbar
            collapseOnSelect
            expand="md"
            fixed="top"
            className={`${theme} fixed-navbar`}
            variant={theme}
        >
            <div className="title d-md-none d-block">
                <Letters className="nav-letter" text={compactTitle}/>
            </div>
            <div id="center-logo" className="d-md-none d-block mx-auto">
                {/*Hidden only on sm*/}
                <BulbSvg onClick={themeSwitch} className="logo"/>
            </div>
            <Navbar.Brand className="d-none d-md-block d-none">
                <Container>
                    <Row>
                        {/* Visible only on sm */}
                        <BulbSvg onClick={themeSwitch} className="logo"/>
                    </Row>
                </Container>
            </Navbar.Brand>
            <Navbar.Toggle className="navbar-toggler"
                           aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse>
                <Nav>
                    <MyNavLink title="Home" to={"/"} eventKey="home"/>
{/*
                    <MyNavLink title="About" to={"about"} eventKey="about"/>
                    <MyNavLink title="Experience" to={"experience"}
                               eventKey="xp"/>
*/}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <div id="main-outlet">
            <Outlet/>
        </div>
    </div>)
}

export default MainNav;

function MyNavLink(props) {
    console.assert(props.title.length <= 13, "title does not fit on compact screen");

    // hide title when larger than or equal to bootstrap md
    const rmSlash = (str) => (str[0] === '/') ? str.slice(1) : str;
    const pathname = useLocation().pathname;
    const hideClass = rmSlash(pathname) === rmSlash(props.to) ? "d-none d-md-block" : "";

    return <Nav.Link
        id={`${props.to}-Button`}
        className={`my-navlink ${hideClass}`}
        as={Link}
        to={props.to}
        eventKey={props.eventKey}
    >
        <Letters className="nav-letter" text={props.title}/>
    </Nav.Link>
}

function Letters(props) {
    if (props.text === undefined) {
        throw new Error("props.text not set.")
    }
    return <Row>
        {props.text.split("").map((char, i) => {
            const horizontal_spacing = " " === char ? 'px-2' : 'px-0'
            return <Col
                key={props.text + "-" + i}
                id={props.text + "-" + i}
                className={[props.className, horizontal_spacing].join(" ")}
            >
                {char}
            </Col>
        })}
    </Row>
}
