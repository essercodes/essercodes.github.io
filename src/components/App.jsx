import './app.css'
import '../css/fonts.css'

import {useEffect, useState} from "react";
import {HashRouter, Routes, Route} from "react-router-dom"

import MainNav from "./MainNav"

import Home from "../pages/Home.jsx"
import About from "../pages/About.jsx"
import Experience from "../pages/Experience.jsx"

import ThemeContext from "../contexts/ThemeContext.js";
import TitleContext from "../contexts/TitleContext.js";

function App() {
    const [theme, setTheme] = useState('dark');  // TODO: get theme
    const [title, setTitle] = useState('');
    const [compactTitle, setCompactTitle] = useState('');

    // Set transition after page is loaded for when color scheme is switched.
    useEffect(() => {
        document.documentElement.style.setProperty('--root-transition', "200ms ease-out");
    }, []);

    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            <TitleContext.Provider value={[compactTitle, setCompactTitle]}>
                <script src="https://unpkg.com/feather-icons"></script>
                <div className={`${theme}`} id="App">
                    <HashRouter basename="/">
                        <Routes>
                            <Route path="/" element={<MainNav/>}>
                                <Route index element={<Home/>}/>
                                <Route path="/about" element={<About/>}/>
                                <Route path="/experience" element={<Experience/>}/>
                            </Route>
                        </Routes>
                    </HashRouter>
                </div>
            </TitleContext.Provider>
        </ThemeContext.Provider>
    )
}

export default App
