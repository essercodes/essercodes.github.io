import React, {useContext, useEffect} from "react";
import TitleContext from "../contexts/TitleContext.js";

function Resume(props) {
    const [title, setTitle] = useContext(TitleContext);
    useEffect(() => setTitle("Resume"), [])

    return <div>
        <sub>max@esser.codes</sub>
    </div>
}

export default Resume;