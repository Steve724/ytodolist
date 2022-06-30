import React, {useState} from "react";
import AddTask from "./AddTask";

export default function ProjectRightBar({projectTitle}){
    const [projectTasks,setProjectTasks] = useState([]);
    function addProjectTask(task){
        setProjectTasks((prevState => {
            return [...prevState,task];
        }))
    }
    function deleteTask(title){
        setProjectTasks(
            projectTasks.filter((item)=>{
                return item.title!==title;
            })
        )
    }
    return (
        <div>
            <h5>{projectTitle}</h5>
            {
                projectTasks.map((item,index)=>{
                    return <div>
                        <p><span><input type="checkbox" onClick={()=> deleteTask(item.title)}/>{item.title}</span></p>
                    </div>
                })
            }
            <AddTask onAdd={addProjectTask}/>
        </div>
    )
}