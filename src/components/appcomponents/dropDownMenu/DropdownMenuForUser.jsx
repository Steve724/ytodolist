import React from "react";
import DropdownItem from "./DropdownItem";


export default function DropdownMenuForUser(){
    const dropDown = {
        position: "absolute",
        backgroundColor: "white",
        borderWidth:"1px",
        borderStyle:"solid",
        borderColor:"black",
        borderRadius:"15px",
        padding: "1rem",
        overFlow: "hidden",

    }
    return (
        <div style={dropDown}>
            <form action='/api/logout' method='POST'>
                <button type='submit' style={{backgroundColor:'white',borderWidth:'0px'}}>Logout</button>
            </form>
        </div>
    )
}