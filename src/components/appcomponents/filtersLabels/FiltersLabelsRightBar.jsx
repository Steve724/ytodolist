import React from "react";
import ListFL from "../ListFL";
import ListLabels from "../ListLabels";
import {useEffect, useState} from "react";
export default function FiltersLabelsRightBar(){
    const [username,setUsername] = useState("");
    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('items'));
        // if (items) {
        //     setItems(items);
        // }
        setUsername(items.username);

    }, []);
    return (
        <div>
            <h5>Filters & Labels</h5>
            <ListFL username={username}/>
            <ListLabels username={username}/>
        </div>
    )
}