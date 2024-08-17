import './experience.css';

import React, {useEffect, useState} from "react";
import Page from "../components/Page.jsx";
import {Alert, Button, Card, Col, Container, Row} from "react-bootstrap";

import exp_data from "./Experience/experience.json";
import Timeline from "./Experience/Timeline.jsx";

function Experience() {
    const [show, setShow] = useState(true);
    return <Page compactTitle="Exp" path="experience">
        <Alert show={show} variant="success">
            <Alert.Heading>Under Construction!</Alert.Heading>
            <div className="d-flex justify-content-end">
                <Button onClick={() => setShow(false)} variant="outline-success">
                    Close me
                </Button>
            </div>
        </Alert>
        <Timeline data={exp_data}/>
    </Page>
}

export default Experience;