import React, {useEffect, useState} from "react";
import {useSelector,useDispatch} from "react-redux";
import {addP1,selectPriority1,deleteP1,initP1} from "../../../features/priority/priority1Slice";
import AddTask from "../AddTask";
import {useNavigate} from "react-router-dom";

export default function Priority1({children,username}){
    const priority1 = useSelector(selectPriority1);
    const dispatch =useDispatch();
    // const [title,setTitle] = useState("");
    // const [time,setTime] = useState("");
    // const [priority,setPriority] = useState("");
    const navigate = useNavigate();

    function addPriority1Task(task){
        dispatch(addP1(task));
    }
    const [count,setCount] = useState();
    useEffect(()=>{
        fetch("/api/userinfo")
            .then(response=>response.json())
            .then(data=> {
                dispatch(initP1());
                data.map(user=>{
                    if (user.username===username){
                        user.tasks.forEach(task=>{
                            if(task.priority==="1"){
                                dispatch(addP1(task));
                            }
                        });
                        return user.tasks;
                    }
                })
            })
    },[priority1]);

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
                priority1.map((item)=>{
                    // setTime(item.time);
                    // setTitle(item.title);
                    // setPriority(item.priority);

                    return (
                        <div>
                            {/*<input type='checkbox' onClick={()=>{*/}
                            {/*    dispatch(deleteP1(item));*/}
                            {/*}}/>*/}
                            <p><button type="button" onClick={()=>{handleDelete(item._id.toString())}} style={{borderWidth:'0px',backgroundColor:'white'}}><i className="fa-regular fa-square"></i></button>
                                 {item.title}</p>
                            <p style={{marginLeft:"15px"}}>{item.time}</p>

                        </div>
                    )
                })
            }
            <AddTask onAdd={addPriority1Task} inbox="inbox" num={0}/>
            <hr/>
        </div>


    )
}