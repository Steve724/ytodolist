import React,{useState,useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {addP5,selectPriority5,deleteP5,initP5} from "../../../features/priority/priority5Slice";
import AddTask from "../AddTask";
import {useNavigate} from "react-router-dom";


export default function Priority5({children,username}){
    const priority5 = useSelector(selectPriority5);
    const dispatch =useDispatch();
    const navigate = useNavigate();

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
    },[priority5]);

    // function handleDeleteTask(e){
    //     e.preventDefault();
    //     let submitDeleteTask = "username="+username+"&title="+title+"&priority="+priority+"&time="+time;
    //     fetch("/api/deletetask",{
    //         method:"POST",
    //         headers:{"Content-Type":"application/x-www-form-urlencoded"},
    //         body: submitDeleteTask
    //     }).then((res)=>{
    //         console.log(res);
    //         // navigate('/app/inbox',{replace:false});
    //         navigate(2);
    //     })
    //
    // }

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
                priority5.map((item)=>{

                    return (
                        <div>
                            <p><button type="button" onClick={()=>{handleDelete(item._id.toString())}} style={{borderWidth:'0px',backgroundColor:'white'}}><i className="fa-regular fa-square"></i></button>
                                {item.title}</p>
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