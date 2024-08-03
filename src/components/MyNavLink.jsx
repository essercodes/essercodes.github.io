import React, {useContext} from "react";
import {Nav} from "react-bootstrap";
import {Link} from "react-router-dom";
import Letters from "./Letters.jsx";
import TitleContext from "../contexts/TitleContext.js";

function MyNavLink(props) {
    const [title, _] = useContext(TitleContext);

    // hide when smaller less than or equal to bootstrap md
    const hideClass = title === props.title ? "d-none d-md-block d-none" : "";

    return <Nav.Link
        id="homeButton"
        className={`my-navlink ${hideClass}`}
        as={Link}
        to={props.to}
        eventKey={props.eventKey}
    >
        <Letters className="nav-letter" text={props.title}/>
    </Nav.Link>
}

export default MyNavLink;