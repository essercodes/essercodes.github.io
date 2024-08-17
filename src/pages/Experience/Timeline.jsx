import './timeline.css'

import React, {useEffect, useState} from "react";
import {Card, Col, Container, Row} from "react-bootstrap";

function Timeline(props) {
    const [lines, setLines] = useState({
        length: 0,
        segments: [],
    })
    useEffect(() => {
        setLines(() => {
            const newSegments = props.data.map((exp, i) => ({
                start: i,
                length: exp.meta.length,
                color: exp.meta.color,
            }));
            const newLength = newSegments.length * 12;
            return {
                segments: newSegments.reverse(),
                length: newLength,
            };
        });
    }, [props.data]);
    console.log(lines)
    return <Container className="timeline">
        <div className="lines">
            {lines.segments.map((line, i) => {
                return <div
                    key={`line${i}`}
                    style={{
                        top:    `${i * 12}rem`,
                        height: `${line.length}rem`,
                        background:  line.color,
                    }}
                    className="center-line"/>
            })}
        </div>
        <Col>
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
    </Container>
}

export default Timeline;