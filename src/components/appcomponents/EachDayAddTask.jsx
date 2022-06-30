import React,{useState,useEffect} from 'react';
import {getWholeDate,getWholeWeekDay} from "../../utils/getDate";
import AddTask from "./AddTask";

import {addP1, initP1} from "../../features/priority/priority1Slice";

export default function EachDayAddTask({num}){
    const [todayTask,setTodayTask] = useState([]);
    const [username,setUsername] = useState("");

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
    return (
        <div style={{marginBottom:"50px"}}>
            <p>{getWholeDate(num)} · {getWholeWeekDay(num)}</p>
            <hr/>
            {
                todayTask.map((item,index)=>{

                    return (
                        <div>
                            <p><span><form style={{display:"inline-block"}} action="/api/deletetask" method="post">
                                <button type="submit" style={{borderWidth:'0px',backgroundColor:'white'}}><i className="fa-regular fa-square"></i></button>
                                <input type="hidden" name="username" value={username}/>
                                <input type="hidden" name="title" value={item.title}/>
                                <input type="hidden" name="time" value={item.time}/>
                                <input type="hidden" name="priority" value={item.priority}/>
                            </form>  {item.title}</span></p>
                            <p style={{marginLeft:"15px",color:"gray"}}>{item.content}</p>
                        </div>
                    )
                })
            }
            <AddTask onAdd={addTodayTask} num={num}/>
        </div>
    )
}