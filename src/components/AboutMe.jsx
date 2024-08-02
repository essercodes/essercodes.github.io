import React, {useContext, useEffect} from "react";
import TitleContext from "../contexts/TitleContext.js";

function AboutMe(props) {
    const [title, setTitle] = useContext(TitleContext);
    useEffect(() => setTitle("About Me"), [])

    return <div>
        <sub>max@esser.codes</sub>
    </div>
}

export default AboutMe;