import React from "react";

function Task(props){

    return(
        <div>
            <p style={{marginBottom:"0px",marginTop:"0px"}}><input type="checkbox" onClick={()=>{
                props.delete(props.id)
            }}/>{props.title}</p>
            <p style={{marginTop:"0px",marginBottom:"0px"}}>{props.time}</p>
            <hr/>
        </div>

    )
}

export default Task;