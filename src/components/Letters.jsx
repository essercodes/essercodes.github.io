import {React} from 'react';
import {Col, Row} from "react-bootstrap";

function Letters(props) {
    if (props.text === undefined) {
        throw new Error("props.text not set.")
    }
    return <Row>
        {props.text.split("").map((char, i) => {
            {
                if (" " === char) {
                    return <Col key={props.text + "-" + i} className={[props.className, 'px-2'].join(" ")}>{char}</Col>
                } else {
                    return <Col key={props.text + "-" + i} className={[props.className, 'px-0'].join(" ")}>{char}</Col>
                }
            }
        })}
    </Row>
}

export default Letters;