import React, {useContext} from "react";
import Page from "../components/Page.jsx";
import {Card, Col, Container, Image, Row} from "react-bootstrap";

import ThemeContext from "../contexts/ThemeContext.js";

// imports with vite-plugin-svgr
import GithubIcon from "bootstrap-icons/icons/github.svg?react";
import LinkedInIcon from "bootstrap-icons/icons/linkedin.svg?react";
import MailIcon from "bootstrap-icons/icons/mailbox.svg?react"

function Home() {
    const [theme, setTheme] = useContext(ThemeContext);
    const cardCol = {xs: 4, md: 2, xxl: 1};

    return <Page title="Home">
        <h1>Links</h1>
        <Container>
            <Row>
                <Col {...cardCol}>
                    <Card as='a' href="https://www.linkedin.com/in/maxesser/"  className="link-card mx-auto">
                        <Card.Title className="contact-title contact-text">LinkedIn</Card.Title>
                        <Card.Img as={LinkedInIcon} alt="LinkedIn Logo that links to Max Esser" className="contact-icon"/>
                    </Card>
                </Col>
                <Col {...cardCol}>
                    <Card as='a' href="https://github.com/essercodes"
                        className="link-card mx-auto">
                        <Card.Img as={GithubIcon} alt="Github Logo that links to @essercodes" className="contact-icon"/>
                    </Card>
                </Col>
                <Col {...cardCol}>
                    {/*href="mailto:max@esser.codes*/}
                    <Card as='a' href="mailto:max@esser.codes" className="link-card mx-auto">
                        <Card.Img as={MailIcon} alt="An image of a mailbox that links to sending an email." className="contact-icon"/>
                    </Card>
                </Col>
            </Row>
        </Container>


    </Page>
}

export default Home;