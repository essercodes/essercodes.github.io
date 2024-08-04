import '../css/page.css';

import React, {useContext, useEffect} from "react";
import ThemeContext from "../contexts/ThemeContext.js";
import TitleContext from "../contexts/TitleContext.js";

// props.title must match MyNavLink props.title
function Page(props) {
    const [theme, _] = useContext(ThemeContext);

    const [title, setTitle] = useContext(TitleContext);
    useEffect(() => setTitle(props.title), [])

    return <>
        <div id="page" className={`${theme} main-body`}>
            {props.children}
        </div>
    </>
}

export default Page;