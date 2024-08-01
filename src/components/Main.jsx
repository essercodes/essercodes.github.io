import '../css/gruvbox.css'
import '../css/fonts.css'
import '../css/main.css'

import React, {useState, useContext} from "react"
import {HashRouter, Routes, Route} from "react-router-dom"
import Home from "./Home"
import AboutMe from "./AboutMe"
import Resume from "./Resume"
import MainNav from "./MainNav"
import ThemeContext from "../contexts/ThemeContext.js";

function Main() {
    const [theme, setTheme] = useState('dark')  // TODO: get theme
    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            <HashRouter basename="/">
                <Routes>
                    <Route path="/" element={<MainNav/>}>
                        <Route index element={<Home/>}/>
                        <Route path="/about" element={<AboutMe/>}/>
                        <Route path="/resume" element={<Resume/>}/>
                    </Route>
                </Routes>
            </HashRouter>
        </ThemeContext.Provider>
    )

}

export default Main;
