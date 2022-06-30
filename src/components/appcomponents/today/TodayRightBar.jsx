import React, {useEffect, useState} from "react";
import getDate,{getDay} from "../../../utils/getDate";
import Task from "../Task";
import compareDate from "../../../utils/compareDate";
import AddTask from "../AddTask";
function TodayRightBar(){
    const date = getDate();
    const task1 = {
        title:"Add all my personal tasks",
        time:"9 May"
    }
    const task2 = {
        title:"Play games",
        time:"8 Jun"
    }

    const [tasks,setTasks] = useState([task1,task2]);
    const [overdueTask,setOverdueTask] = useState([]);
    const [todayTask,setTodayTask] = useState([]);
    const over = [];
    const [task,setTask] = useState({
        title:"",
        content:"",
        time:""
    })

    function deleteTodayTask(title){
        setTodayTask(
            todayTask.filter((item)=>{
                return item.title!==title;
            })
        )
    }

    function handleDelete(id){
        setTasks(tasks.filter((item,index)=>index!==id))
    }

    function addTodayTask(task){
        setTodayTask(prevState => {
            return [...prevState,task];
        })
        console.log(todayTask);
    }
    return(
        <div>
            <h5>Today <span>{date}</span></h5>
            <h6>Overdue</h6>
            {
                tasks.map((item,index)=>{
                    return (
                        <div key={index}>
                            <Task title={item.title} time={item.time} id={index} key={index} delete={handleDelete}/>
                        </div>
                    )
                })
            }
            <h6>{date}  · Today  · {getDay()}</h6>
            {

                todayTask.map((item,index)=>{

                    return (
                        <div>
                            <p><span><input type="checkbox" onClick={()=> deleteTodayTask(item.title)}/>{item.title}</span></p>
                        </div>
                    )
                })
            }
            <AddTask onAdd={addTodayTask}/>
        </div>
    )
}

export default TodayRightBar;