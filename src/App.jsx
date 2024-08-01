import './App.css'

import Main from "./components/Main"
import {useState} from "react";
import ThemeContext from "./contexts/ThemeContext.js";

function App() {
    const [theme, setTheme] = useState('dark')  // TODO: get theme
    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            <div className={`${theme}`} id="App">
                <Main/>
            </div>
        </ThemeContext.Provider>
    )
}

export default App
