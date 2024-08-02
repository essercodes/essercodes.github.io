import '../css/fonts.css'
import '../css/main.css'

import React, {useState, useContext} from "react"
import {HashRouter, Routes, Route} from "react-router-dom"
import Home from "./Home"
import About from "./About.jsx"
import Resume from "./Resume"
import MainNav from "./MainNav"

function Main() {
    return (
            <HashRouter basename="/">
                <Routes>
                    <Route path="/" element={<MainNav/>}>
                        <Route index element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/resume" element={<Resume/>}/>
                    </Route>
                </Routes>
            </HashRouter>
    )

}

export default Main;
