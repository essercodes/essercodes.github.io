import React from "react";
import Page from "../components/Page.jsx";
import {Card, Col, Row, Stack, Tab, Tabs} from "react-bootstrap";

import work_exp from "./exp_data/work_exp.json";

function Experience() {
    return <Page compactTitle="Exp" path="experience">
        <Tabs
            defaultActiveKey={"work"}
            id="uncontrolled-tab-example"
            className="mb-3"
        >
            <Tab className={"px-2"} eventKey="work" title="Work">
                <Stack>
                    {work_exp.map(exp => {
                        return <Card className={"p-3 m-2"} key={`${exp.where}-${exp.when}`}>
                            <Card.Title>{exp.where}</Card.Title>
                            <Card.Subtitle>
                                <Row>
                                    <Col>{exp.title}</Col>
                                    <Col>{exp.when}</Col>
                                </Row>
                            </Card.Subtitle>
                            <Card.Body className={"px-4"}>
                                <Row>
                                    {exp.description}
                                </Row>
                                <Row className={"pt-3"}>
                                    {<ul>
                                        {exp.bullets.map((b, i) => {
                                                return <li key={`${exp.where}-${exp.when}-${i}`}>
                                                    {b}
                                                </li>
                                            }
                                        )}
                                    </ul>}
                                </Row>
                            </Card.Body>
                        </Card>
                    })}
                </Stack>
            </Tab>
            <Tab eventKey="edu" title="Education">

            </Tab>
            <Tab eventKey="skills" title="Skills">

            </Tab>
            <Tab eventKey="projects" title="Projects">

            </Tab>

        </Tabs>
    </Page>
}

export default Experience;