import '../css/page.css';

import React, {useContext, useEffect} from "react";
import ThemeContext from "../contexts/ThemeContext.js";
import TitleContext from "../contexts/TitleContext.js";

// props.title must match MyNavLink props.title
function Page(props) {
    if (props.title === undefined) {
        throw new Error("props.text undefined.")
    }

    const [title, titleShort, setTitle, setTitleShort] = useContext(TitleContext);

    // Make the home button active in bootstrap nav on page load
    const landing_page_navlink_id = `${props.title ?? "Home"}-Button`;
    useEffect(() => {
        document.getElementById(landing_page_navlink_id).click()
    }, [])

    const [theme, _] = useContext(ThemeContext);

    useEffect(() => {
        setTitle(props.title);
        setTitleShort(props.titleShort ?? props.title);
    }, [])

    return <>
        <div id="page" className={`${theme} main-body`}>
            {props.children}
        </div>
    </>
}

export default Page;