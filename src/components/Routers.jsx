import React from "react";
import {Routes,Route} from "react-router-dom";
import Home from "./Home"
import Features from "./Features"
import Templates from "./Templates";
import Login from "./Login";
export default class Routers extends React.Component{
    render() {
        return(
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/features" element={<Features/>} />
                <Route path="/templates" element={<Templates/>} />
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Login/>}/>
            </Routes>
        )
    }
}