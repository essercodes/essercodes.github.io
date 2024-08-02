import React, {useContext, useEffect} from "react";
import TitleContext from "../contexts/TitleContext.js";

function About(props) {
    const [title, setTitle] = useContext(TitleContext);
    useEffect(() => setTitle("About"), [])

    return <div>
        <sub>max@esser.codes</sub>
    </div>
}

export default About;