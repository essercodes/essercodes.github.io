import './timeline.css'

import React, {useEffect} from "react";
import {Card, Col, Container, Row} from "react-bootstrap";

function Timeline(props) {
    return <Container className="timeline">
        <div className="center-line">
            <a href="#" className="scroll-icon"><i className="fas fa-caret-up"></i></a>
        </div>
        <Col>
            {props.data.reverse().map((exp, i) => {
                return <Row key={`exp-${i}`} className={"exp-row"}>
                    <Card className={"exp-card"}>
                        <Col>
                            <Row>{exp.title}</Row>
                            <Row>{`${exp.start} - ${exp.end}`}</Row>
                            <Row>{exp.where}</Row>
                            <Row>{exp.what}</Row>
                        </Col>
                    </Card>
                </Row>
            })}
        </Col>
    </Container>
}

export default Timeline;