import React from "react";

export default function Navbar(props){
    return (
        <nav className="navbarApp" style={{position:"relative"}}>
            <ul className="navbar-navApp">
                {props.children}
            </ul>
        </nav>
    )
}