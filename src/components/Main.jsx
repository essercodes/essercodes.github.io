import React, {useState, useContext} from "react"
import { HashRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"
import AboutMe from "./AboutMe"
import Resume from "./Resume"
import MainNav from "./MainNav"

function Main() {
  return (
      <HashRouter basename="/">
        <Routes>
          {/* <Route path="/" element={<MainNav/>}> */}
          <Route path="/">
            <Route index element={<Home/>} />
            <Route path="/about" element={<AboutMe/>} />
            <Route path="/resume" element={<Resume/>} />
          </Route>
        </Routes>
      </HashRouter>
  )

}

export default Main;
