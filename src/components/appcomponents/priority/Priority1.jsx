import React, {useEffect, useState} from "react";
import {useSelector,useDispatch} from "react-redux";
import {addP1,selectPriority1,deleteP1,initP1} from "../../../features/priority/priority1Slice";
import AddTask from "../AddTask";
export default function Priority1({children,username}){
    const priority1 = useSelector(selectPriority1);
    const dispatch =useDispatch();

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
    },[username]);

    return (
        <div>
            <h5>{children}</h5>
            {
                priority1.map((item)=>{
                    return (
                        <div>
                            {/*<input type='checkbox' onClick={()=>{*/}
                            {/*    dispatch(deleteP1(item));*/}
                            {/*}}/>*/}
                            <p><form style={{display:"inline-block"}} action="/api/deletetask" method="post">
                                <button type="submit" style={{borderWidth:'0px',backgroundColor:'white'}}><i className="fa-regular fa-square"></i></button>
                                <input type="hidden" name="username" value={username}/>
                                <input type="hidden" name="title" value={item.title}/>
                                <input type="hidden" name="time" value={item.time}/>
                                <input type="hidden" name="priority" value={item.priority}/>
                            </form> {item.title}</p>
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