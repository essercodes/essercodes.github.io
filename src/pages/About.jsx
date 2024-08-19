import Page from "../components/Page.jsx";
import ReactMarkdown from "react-markdown";
import bio from "./About/bio.md?raw"
import {Container} from "react-bootstrap";

function About() {
    return <Page compactTitle="About" path="about">
        <Container>
            <ReactMarkdown>{bio}</ReactMarkdown>
        </Container>
    </Page>
}

export default About;