import './timeline.css'

import React, {useEffect} from "react";
import {Card, Col, Row} from "react-bootstrap";

function Timeline(props) {
    return <Col className="timeline">
        {props.data.map((exp, i) => {
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
}

export default Timeline;