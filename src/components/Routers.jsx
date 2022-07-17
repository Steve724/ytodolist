import React from "react";
import {Routes,Route} from "react-router-dom";
import Home from "./Home"
import Features from "./Features"
import Templates from "./Templates";
import Login from "./Login";
import Signup from "./Signup";
import Today from "./appcomponents/today/Today";
import Project from "./appcomponents/Project";
import Upcoming from "./appcomponents/upcoming/Upcoming";
import FiltersLabels from "./appcomponents/filtersLabels/FiltersLabels";
import Inbox from "./appcomponents/inbox/Inbox";
import ForMe from "./ForMe";
export default class Routers extends React.Component{
    render() {
        return(
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/features" element={<Features/>} />
                <Route path="/templates" element={<Templates/>} />
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/app/today" element={<Today/>}/>
                <Route path="/app/project/:projectName" element={<Project/>}/>
                <Route path="/app/filters-labels" element={<FiltersLabels/>}/>
                <Route path="/app/upcoming" element={<Upcoming/>}/>
                <Route path="/app/inbox" element={<Inbox/>}/>
                <Route path="/forMe" element={<ForMe/>}/>
            </Routes>
        )
    }
}