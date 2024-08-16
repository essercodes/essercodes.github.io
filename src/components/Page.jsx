import './page.css';

import React, {useContext, useEffect} from "react";
import ThemeContext from "../contexts/ThemeContext.js";
import TitleContext from "../contexts/TitleContext.js";

function Page(props) {
    if (props.compactTitle === undefined) { throw new Error("props.compactTitle not set")}
    if (props.path === undefined) { throw new Error("props.path not set")}

    console.assert(props.compactTitle.length <= 5, "compactTitle will not fit on small device header");

    const [compactTitle,  setCompactTitle] = useContext(TitleContext);
    const [theme, _] = useContext(ThemeContext);

    // Make the home button active in bootstrap nav on page load
    const landing_page_navlink_id = `${props.path }-Button`;
    useEffect(() => {
        document.getElementById(landing_page_navlink_id).click()
        setCompactTitle(props.compactTitle);
    }, [])


    return <>
        <div id="page" className={`${theme} main-body`}>
            {props.children}
        </div>
    </>
}

export default Page;