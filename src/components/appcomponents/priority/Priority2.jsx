import React,{useState,useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {addP2,selectPriority2,deleteP2,initP2} from "../../../features/priority/priority2Slice";
import AddTask from "../AddTask";



export default function Priority2({children,username}){
    const priority2 = useSelector(selectPriority2);
    const dispatch =useDispatch();

    function addPriority2Task(task){
        dispatch(addP2(task));
    }

    useEffect(()=>{
        fetch("/api/userinfo")
            .then(response=>response.json())
            .then(data=> {
                dispatch(initP2());
                data.map(user=>{
                    if (user.username===username){
                        // console.log(user.tasks);
                        user.tasks.forEach(task=> {
                            if(task.priority==="2"){
                                dispatch(addP2(task));
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
                priority2.map((item)=>{
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
            <AddTask onAdd={addPriority2Task} inbox="inbox" num={0}/>
            <hr/>
        </div>


    )
}