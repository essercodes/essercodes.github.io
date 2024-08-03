import '../css/fonts.css'
import '../css/main.css'

import {HashRouter, Routes, Route} from "react-router-dom"
import Home from "../pages/Home.jsx"
import About from "../pages/About.jsx"
import Resume from "../pages/Resume.jsx"
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
