import React, {useEffect, useState} from "react";
import getDate, {getDay, getWholeDate} from "../../../utils/getDate";
import Task from "../Task";
import compareDate from "../../../utils/compareDate";
import AddTask from "../AddTask";
import {useSelector,useDispatch} from "react-redux";
import {addTodayTask,initTodayTask,selectTodayTask} from "../../../features/today/todayTaskSlice";
import {useNavigate} from "react-router-dom";
import {compareTime} from "../../../utils/getDate";
import {addOverdueTask,initOverdueTask,selectOverdueTask} from "../../../features/overdue/overdueTaskSlice";

function TodayRightBar(){
    const [items, setItems] = useState([]);
    const [username,setUsername] = useState("");
    const todayTask = useSelector(selectTodayTask);
    const overdueTask = useSelector(selectOverdueTask);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('items'));
        // if (items) {
        //     setItems(items);
        // }
        setUsername(items.username);

    },[]);

    const date = getWholeDate(0);


    const over = [];
    const [task,setTask] = useState({
        title:"",
        content:"",
        time:""
    })

    useEffect(()=>{
        fetch("/api/userinfo")
            .then(response=>response.json())
            .then(data=>{
                dispatch(initOverdueTask());
                data.map(user=>{
                    if(user.username===username){
                        user.tasks.forEach(task=>{
                            if(compareTime(task.time,date)){
                                dispatch(addOverdueTask(task));
                            }
                        })
                        return user.tasks;
                    }
                })
            })
        // if(compareTime(task3.time,date)){
        //     tasks.push(task3);
        // }
    },[overdueTask])

    useEffect(()=>{
        fetch("/api/userinfo")
            .then(response=>response.json())
            .then(data=> {
                dispatch(initTodayTask());
                data.map(user=>{
                    if (user.username===username){
                        user.tasks.forEach(task=>{
                            if(task.time===date){
                                dispatch(addTodayTask(task));
                            }
                        });
                        return user.tasks;
                    }
                })
            })
    },[todayTask]);

    // function deleteTodayTask(title){
    //     setTodayTask(
    //         todayTask.filter((item)=>{
    //             return item.title!==title;
    //         })
    //     )
    // }

    function handleDelete(id){
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

    // function addTodayTask(task){
    //     setTodayTask(prevState => {
    //         return [...prevState,task];
    //     })
    //     console.log(todayTask);
    // }
    return(
        <div>
            <h5>Today <span>{date}</span></h5>
            <h6>Overdue</h6>
            {
                overdueTask.map((item,index)=>{
                    return (
                        <div key={index}>
                            <Task title={item.title} time={item.time} id={item._id.toString()} key={index} delete={handleDelete}/>
                        </div>
                    )
                })
            }
            <h6>{date}  · Today  · {getDay()}</h6>
            {

                todayTask.map((item,index)=>{

                    return (
                        <div>
                            <p><button type="button" onClick={()=>{handleDelete(item._id.toString())}} style={{borderWidth:'0px',backgroundColor:'white'}}><i className="fa-regular fa-square"></i></button>
                                {item.title}</p>
                        </div>
                    )
                })
            }
            <AddTask onAdd={addTodayTask} num={0}/>
        </div>
    )
}

export default TodayRightBar;