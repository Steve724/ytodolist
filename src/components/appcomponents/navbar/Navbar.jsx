import React from "react";

export default function Navbar(props){
    return (
        <nav className="navbarApp">
            <ul className="navbar-navApp">
                {props.children}
            </ul>
        </nav>
    )
}