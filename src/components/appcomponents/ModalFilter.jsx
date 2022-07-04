import React, {useState,useEffect} from "react";
import ReactDOM from "react-dom/client";
import {useNavigate} from "react-router-dom";

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

export default function ModalFilter({open,children,onClose,onAdd}){
    const [filter,setFilter] = useState({
        name:"",
        query:""
    })
    const navigate = useNavigate();
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
        setFilter(prevState => {
            return {
                ...prevState,
                [name]:value
            }
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        onAdd();
        let submitFilter = "username="+username+"&name="+filter.name+"&query="+filter.query
        fetch('/api/addFilter',{
            method:"POST",
            headers:{"Content-Type":"application/x-www-form-urlencoded"},
            body: submitFilter
        }).then((res)=>{
            console.log(res);
            // navigate('/app/inbox',{replace:false});
            navigate(2);
        })

    }

    function handleAddFilter(){
        onAdd(filter);

    }

    if(!open) return null;
    return (
        <>
            <div style={OVERLAY_STYLES}/>
            <div style={MODAL_STYLES}>
                <div>{children}</div>
                <hr/>
                <div>
                    <p>Filter name</p>
                    <input type='text' onChange={handleChange} name="name"/>
                </div>
                <div>
                    <p>Filter query</p>
                    <input type='text' onChange={handleChange} name="query"/>
                </div>
                <button onClick={onClose} style={{display:"inline-block"}}>Cancel</button>
                {/*<button onClick={handleAddFilter}>Add</button>*/}
                <form style={{display:"inline-block"}} onSubmit={handleSubmit} >
                    <input type="hidden" name="username" value={username}/>
                    <input type="hidden" name="name" value={filter.name}/>
                    <input type="hidden" name="query" value={filter.query}/>
                    <button type="submit">Add</button>
                </form>

            </div>
        </>
    )
}