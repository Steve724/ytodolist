import React,{useState,useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {addP5,selectPriority5,deleteP5,initP5} from "../../../features/priority/priority5Slice";
import AddTask from "../AddTask";


export default function Priority5({children,username}){
    const priority5 = useSelector(selectPriority5);
    const dispatch =useDispatch();

    function addPriority5Task(task){
        dispatch(addP5(task));
    }

    useEffect(()=>{
        fetch("/api/userinfo")
            .then(response=>response.json())
            .then(data=> {
                dispatch(initP5());
                data.map(user=>{
                    if (user.username===username){
                        // console.log(user.tasks);
                        user.tasks.forEach(task=> {
                            if(task.priority==="5"){
                                dispatch(addP5(task));
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
                priority5.map((item)=>{
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
            <AddTask onAdd={addPriority5Task} inbox="inbox" num={0}/>
            <hr/>
        </div>
    )
}