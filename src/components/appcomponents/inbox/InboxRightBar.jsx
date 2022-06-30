import React from "react";
import Priority1 from "../priority/Priority1";
import Priority2 from "../priority/Priority2";
import Priority3 from "../priority/Priority3";
import Priority4 from "../priority/Priority4";
import Priority5 from "../priority/Priority5";
import {useEffect, useState} from "react";
export default function InboxRightBar(){
    const [items, setItems] = useState([]);
    const [username,setUsername] = useState("");

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('items'));
        // if (items) {
        //     setItems(items);
        // }
        setUsername(items.username);

    },[]);
    return(
        <div>
            <Priority1 username={username} why={1}>Priority 1</Priority1>
            <Priority2 username={username}>Priority 2</Priority2>
            <Priority3 username={username}>Priority 3</Priority3>
            <Priority4 username={username}>Priority 4</Priority4>
            <Priority5 username={username}>Priority 5</Priority5>
        </div>
    )
}