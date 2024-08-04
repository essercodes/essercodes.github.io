import {React} from 'react';
import {Col, Row} from "react-bootstrap";

function Letters(props) {
    if (props.text === undefined) {
        throw new Error("props.text not set.")
    }
    return <Row>
        {props.text.split("").map((char, i) => {
            const horizontal_spacing = " " === char ? 'px-2' : 'px-0'
            return <Col
                key={props.text + "-" + i}
                id={props.text + "-" + i}
                className={[props.className, horizontal_spacing].join(" ")}
            >
                {char}
            </Col>
        })}
    </Row>
}

export default Letters;