import React, {useEffect, useState} from "react";
import {useSelector,useDispatch} from "react-redux";
import {selectDropdownSetForPriority} from "../../../features/dropdown/dropdownSetForPrioritySlice";
import {change} from "../../../features/dropdown/dropdownSetForPrioritySlice";

export default function NavItem(props){

    const [open,setOpen] = useState(false);

    const dispatch = useDispatch();
    return (
        <li className="nav-item" style={{display:"inline-block",padding:"10px"}}>
            <a  className="icon-button" onClick={(event)=> {
                setOpen(!open);
                event.preventDefault();
            }}>
                {props.icon}
            </a>
            {open&&props.children}
        </li>
    )
}