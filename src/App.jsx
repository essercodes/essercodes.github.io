import React from "react"
import { HashRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Home from "./components/Home"
import AboutMe from "./components/AboutMe"
import Resume from "./components/Resume"
import MainNav from "./components/MainNav"

function App() {

  return (
      <HashRouter basename="/">
        <Routes>
          <Route path="/" element={<MainNav />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/resume" element={<Resume />} />
          </Route>
        </Routes>
      </HashRouter>
  )

}

export default App
