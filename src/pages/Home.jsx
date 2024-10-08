import './home.css';

import React from "react";
import Page from "../components/Page.jsx";
import {Card, Col, Container, Row} from "react-bootstrap";

// imports with vite-plugin-svgr
import GithubIcon from "bootstrap-icons/icons/github.svg?react";
import LinkedInIcon from "bootstrap-icons/icons/linkedin.svg?react";
import MailIcon from "bootstrap-icons/icons/mailbox.svg?react"

class ContactCard extends React.Component {
    render() {
        return <Col xs={4} md={3} lg={2} className="contact-card">
            <Card as="a" href={this.props.href} target="_blank" rel="noopener noreferrer" className="link-card mx-auto">
                <Card.Img as={this.props.as} alt={this.props.alt} className="contact-icon"/>
            </Card>
        </Col>;
    }
}

function Home() {
    return <Page compactTitle="Home" path="/">
        <Container>
            <h1>Links</h1>
            <Row>
                <ContactCard
                    href="https://www.linkedin.com/in/maxesser/"
                    as={LinkedInIcon}
                    alt="LinkedIn Logo that links to Max Esser"
                />
                <ContactCard
                    href="https://github.com/essercodes"
                    as={GithubIcon}
                    alt="Github Logo that links to @essercodes"
                />
                <ContactCard
                    href="mailto:max@esser.codes"
                    as={MailIcon}
                    alt="An image of a mailbox that links to sending an email."
                />
            </Row>
        </Container>


    </Page>
}

export default Home;