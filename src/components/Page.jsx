import '../css/page.css';

import React, {useContext, useEffect} from "react";
import ThemeContext from "../contexts/ThemeContext.js";
import TitleContext from "../contexts/TitleContext.js";

// props.title must match MyNavLink props.title
function Page(props) {
    const landing_page_navlink_id = `${props.title ?? "Home"}-Button`;
    // Make the home button active in bootstrap nav
    useEffect(() => {
        document.getElementById(landing_page_navlink_id).click()
    }, [])


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