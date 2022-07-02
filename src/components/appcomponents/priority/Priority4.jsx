import React,{useState,useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {addP4,selectPriority4,deleteP4,initP4} from "../../../features/priority/priority4Slice";
import AddTask from "../AddTask";
import {useNavigate} from "react-router-dom";



export default function Priority4({children,username}){
    const priority4 = useSelector(selectPriority4);
    const dispatch =useDispatch();
    const navigate = useNavigate();
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
    },[priority4]);

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
        <div>
            <h5>{children}</h5>
            {
                priority4.map((item)=>{
                    return (
                        <div>
                            <p><button type="button" onClick={()=>{handleDelete(item._id.toString())}} style={{borderWidth:'0px',backgroundColor:'white'}}><i className="fa-regular fa-square"></i></button>
                                {item.title}</p>
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