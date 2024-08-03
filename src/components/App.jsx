import '../css/app.css'
import '../css/fonts.css'

import {useState} from "react";
import {HashRouter, Routes, Route} from "react-router-dom"

import MainNav from "./MainNav"

import Home from "../pages/Home.jsx"
import About from "../pages/About.jsx"
import XP from "../pages/XP.jsx"

import ThemeContext from "../contexts/ThemeContext.js";
import TitleContext from "../contexts/TitleContext.js";

function App() {
    const [theme, setTheme] = useState('dark');  // TODO: get theme
    const [title, setTitle] = useState('');
    return (
    <ThemeContext.Provider value={[theme, setTheme]}>
        <TitleContext.Provider value={[title, setTitle]}>
            <script src="https://unpkg.com/feather-icons"></script>
            <div className={`${theme}`} id="App">
                <HashRouter basename="/">
                    <Routes>
                        <Route path="/" element={<MainNav/>}>
                            <Route index element={<Home/>}/>
                            <Route path="/about" element={<About/>}/>
                            <Route path="/xp" element={<XP/>}/>
                        </Route>
                    </Routes>
                </HashRouter>
            </div>
        </TitleContext.Provider>
    </ThemeContext.Provider>
)
}

export default App
