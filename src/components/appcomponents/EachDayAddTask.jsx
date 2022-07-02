import React,{useState,useEffect} from 'react';
import {getWholeDate,getWholeWeekDay} from "../../utils/getDate";
import AddTask from "./AddTask";

import {addP1, initP1} from "../../features/priority/priority1Slice";
import {useNavigate} from "react-router-dom";

export default function EachDayAddTask({num}){
    const [todayTask,setTodayTask] = useState([]);
    const [username,setUsername] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('items'));
        setUsername(items.username);

    },[]);

    useEffect(()=>{
        fetch("/api/userinfo")
            .then(response=>response.json())
            .then(data=> {
                data.map(user=>{
                    if (user.username===username){
                        let thisDayTask = user.tasks.filter(task=>
                            task.time===getWholeDate(num)
                        );
                        setTodayTask(thisDayTask);
                        return user.tasks;
                    }
                })

            })
    },[username]);

    function addTodayTask(task){
        setTodayTask(prevState => {
            return [...prevState,task];
        })
        console.log(todayTask);
    }
    function deleteTodayTask(title){
        setTodayTask(
            todayTask.filter((item)=>{
                return item.title!==title;
            })
        )
    }

    function handleDelete(id){
        console.log(1);
        console.log(id);
        fetch('/api/deleteTask',{
            method:"POST",
            headers:{"Content-Type":"application/x-www-form-urlencoded"},
            body:"username="+username+"&id="+id
        }).then((res)=>{
            console.log('delete succeed');
            navigate(2);
        })
    }

    return (
        <div style={{marginBottom:"50px"}}>
            <p>{getWholeDate(num)} · {getWholeWeekDay(num)}</p>
            <hr/>
            {
                todayTask.map((item,index)=>{

                    return (
                        <div>
                            <p><button type="button" onClick={()=>{handleDelete(item._id.toString())}} style={{borderWidth:'0px',backgroundColor:'white'}}><i className="fa-regular fa-square"></i></button>
                                {item.title}</p>
                            <p style={{marginLeft:"15px",color:"gray"}}>{item.content}</p>
                        </div>
                    )
                })
            }
            <AddTask onAdd={addTodayTask} num={num}/>
        </div>
    )
}