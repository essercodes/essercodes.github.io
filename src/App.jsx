import './App.css'

import Main from "./components/Main"
import {useState} from "react";
import ThemeContext from "./contexts/ThemeContext.js";
import TitleContext from "./contexts/TitleContext.js";

function App() {
    const [theme, setTheme] = useState('dark');  // TODO: get theme
    const [title, setTitle] = useState('');
    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            <TitleContext.Provider value={[title, setTitle]}>
                <div className={`${theme}`} id="App">
                    <Main/>
                </div>
            </TitleContext.Provider>
        </ThemeContext.Provider>
    )
}

export default App
