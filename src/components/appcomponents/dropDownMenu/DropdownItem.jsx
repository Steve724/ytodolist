import React from "react";
import {useSelector,useDispatch} from "react-redux";
import {setPriority,setDefaultPriority,selectPriorityForAddTask} from "../../../features/priority/setPriorityForAddTaskSlice";
import {selectDropdownSetForPriority,change} from "../../../features/dropdown/dropdownSetForPrioritySlice";

export default function DropdownItem(props){
    const dispatch = useDispatch();
    const menu_item = {
        height: "50px",
        display: "flex",
        alignItems: "center",
        padding: "0.3rem",
        color:"gray"
    }

    if(props.pr===1){
        menu_item.color="red";
    }else if(props.pr===2){
        menu_item.color="orange";
    }else if(props.pr===3){
        menu_item.color="blue";
    }else if(props.pr===4){
        menu_item.color="green";
    }

    return (
        <a  id="menu-item" style={menu_item} type="button" onClick={(event)=>{
            dispatch(setPriority(props.pr))
            event.preventDefault();
        }}>
            <i className="fa-solid fa-flag" style={{paddingRight:"20px"}}></i>{props.children}
        </a>
    )
}