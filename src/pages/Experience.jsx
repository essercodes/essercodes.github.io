import './experience.css';

import React from "react";
import Page from "../components/Page.jsx";

import exp_data from "./Experience/experience.json";
import Timeline from "./Experience/Timeline.jsx";

function Experience() {
    return <Page compactTitle="Exp" path="experience">
        <Timeline data={exp_data}/>
    </Page>
}

export default Experience;