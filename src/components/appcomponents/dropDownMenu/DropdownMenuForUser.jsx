import React from "react";
import DropdownItem from "./DropdownItem";

export default function DropdownMenuForPriority(){
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
        <div id="dropdown" style={dropDown}>
            <DropdownItem pr={1}>Priority 1</DropdownItem>
            <DropdownItem pr={2}>Priority 2</DropdownItem>
            <DropdownItem pr={3}>Priority 3</DropdownItem>
            <DropdownItem pr={4}>Priority 4</DropdownItem>
            <DropdownItem pr={5}>Priority 5</DropdownItem>
        </div>
    )
}