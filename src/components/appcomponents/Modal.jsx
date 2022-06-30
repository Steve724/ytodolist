import React, {useState} from "react";
import ReactDOM from "react-dom/client";
const MODAL_STYLES = {
    position:'fixed',
    top:'50%',
    left:'50%',
    transform:'translate(-50%,-50%)',
    backgroundColor:'#FFF',
    padding:'50px',
    zIndex:1000,
    borderRadius:15
}

const OVERLAY_STYLES = {
    position: 'fixed',
    top:0,
    left:0,
    right:0,
    bottom:0,
    backgroundColor: 'rgba(0,0,0,.7)',
    zIndex: 1000
}

export default function Modal({open,children,onClose,onCancel}){
    const [newProjectName,setNewProjectName] = useState("");
    function handleChange(event){
        const name = event.target.value;
        setNewProjectName(name);
    }
    function click(){
        onClose(newProjectName);
    }
    if(!open) return null;
    return (
        <>
            <div style={OVERLAY_STYLES}/>
            <div style={MODAL_STYLES}>
                <div>{children}</div>
                <input type='text' onChange={handleChange}/>
                <br/>
                <button onClick={()=>{onCancel()}}>Cancel</button>
                <button onClick={click}>Add</button>

            </div>
        </>
    )
}