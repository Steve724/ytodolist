import React, {useState,useEffect} from "react";
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
    backgroundColor: 'rgba(0,0,0,.6)',
    zIndex: 1000
}

export default function ModalLabel({open,children,onClose,onAdd}){
    const [label,setLabel] = useState({
        name:""

    })

    const [username,setUsername] = useState("");
    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('items'));
        // if (items) {
        //     setItems(items);
        // }
        setUsername(items.username);

    }, []);

    function handleChange(event){
        const {name,value} = event.target;
        setLabel(prevState => {
            return {
                ...prevState,
                [name]:value
            }
        })
    }

    function handleAddFilter(){
        onAdd(label);

    }

    if(!open) return null;
    return (
        <>
            <div style={OVERLAY_STYLES}/>
            <div style={MODAL_STYLES}>
                <div>{children}</div>
                <hr/>
                <div>
                    <p>Label name</p>
                    <input type='text' onChange={handleChange} name="name"/>
                </div>

                <button onClick={onClose} style={{display:"inline-block"}}>Cancel</button>
                <form style={{display:"inline-block"}} action="/api/addlabel" method="post" >
                    <input type="hidden" name="username" value={username}/>
                    <input type="hidden" name="name" value={label.name}/>
                    <button type="submit">Add</button>
                </form>
            </div>
        </>
    )
}