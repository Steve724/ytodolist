import React from "react";
import DropdownItem from "./DropdownItem";
import {useSelector,useDispatch} from "react-redux";
import {addLabelForAddTask,selectLabelForAddTask} from "../../../features/label/labelForAddTaskSlice";

export default function DropdownMenuForLabel(){
    const labelForAddTask = useSelector(selectLabelForAddTask);
    const dropDownLabel = {
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
        <div id="dropdown" style={dropDownLabel}>
            {
                labelForAddTask.map(item=>{
                    return <DropdownItem>{item.name}</DropdownItem>
                })
            }
        </div>
    )
}