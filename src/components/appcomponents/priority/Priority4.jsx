import React,{useState,useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {addP4,selectPriority4,deleteP4,initP4} from "../../../features/priority/priority4Slice";
import AddTask from "../AddTask";



export default function Priority4({children,username}){
    const priority4 = useSelector(selectPriority4);
    const dispatch =useDispatch();

    function addPriority4Task(task){
        dispatch(addP4(task));
    }

    useEffect(()=>{
        fetch("/api/userinfo")
            .then(response=>response.json())
            .then(data=> {
                dispatch(initP4());
                data.map(user=>{
                    if (user.username===username){
                        // console.log(user.tasks);
                        user.tasks.forEach(task=> {
                            if(task.priority==="4"){
                                dispatch(addP4(task));
                            }
                        });
                        return user.tasks;
                    }
                })
            })
    },[username]);

    return (
        <div>
            <h5>{children}</h5>
            {
                priority4.map((item)=>{
                    return (
                        <div>
                            <p><form style={{display:"inline-block"}} action="/api/deletetask" method="post">
                                <button type="submit" style={{borderWidth:'0px',backgroundColor:'white'}}><i className="fa-regular fa-square"></i></button>
                                <input type="hidden" name="username" value={username}/>
                                <input type="hidden" name="title" value={item.title}/>
                                <input type="hidden" name="time" value={item.time}/>
                                <input type="hidden" name="priority" value={item.priority}/>
                            </form>  {item.title}</p>
                            <p style={{marginLeft:"15px"}}>{item.time}</p>
                        </div>
                    )
                })
            }
            <AddTask onAdd={addPriority4Task} inbox="inbox" num={0}/>
            <hr/>
        </div>


    )
}