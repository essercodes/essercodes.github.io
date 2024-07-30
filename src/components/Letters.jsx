import {React} from 'react';
import {Col, Row} from "react-bootstrap";

function Letters(props) {
    return <Row>
        {props.text.split("").map((char, i) => {
            return <Col key={props.text + "-" + i} className={['px-0', props.className].join(" ")}>{char}</Col>
        })}
    </Row>
}

export default Letters;