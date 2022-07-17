import React, {useState,useEffect} from "react";
import getDate, {getWholeDate} from "../../utils/getDate";
import Navbar from "./navbar/Navbar";
import NavItem from "./navbar/NavItem";
import DropdownMenuForPriority from "./dropDownMenu/DropdownMenuForPriority";
import DropdownMenuForLabel from "./dropDownMenu/DropdownMenuForLabel";
import {useSelector,useDispatch} from "react-redux";
import {selectPriorityForAddTask,setPriority} from "../../features/priority/setPriorityForAddTaskSlice";
import {addP1} from "../../features/priority/priority1Slice";
import {addP2} from "../../features/priority/priority2Slice";
import {addP3} from "../../features/priority/priority3Slice";
import {addP4} from "../../features/priority/priority4Slice";
import {addP5} from "../../features/priority/priority5Slice";
import {useNavigate} from "react-router-dom";

function AddTask(props){
    const [isExpanded,setExpanded] = useState(false);
    const dispatch = useDispatch();
    const priority = useSelector(selectPriorityForAddTask);
    const inbox = props.inbox;
    const navigate = useNavigate();

    const [task,setTask] = useState({
        title:"",
        content:"",
        time:""
    })
    function handleChange(event){
        const {name,value} = event.target;
        setTask(prevState => {
            return {
                ...prevState,
                [name]:value
            }
        })
    }
    function expand(){
        if (isExpanded===false){
            setExpanded(true);
        }else{
            setExpanded(false);
        }
    }
    function submitTask(event){
        const timeDate = getDate();
        task.time = timeDate;
        props.onAdd(task);
        if(inbox!=="inbox"){
            if(priority===1){
                dispatch(addP1(task));
            }else if(priority===2){
                dispatch(addP2(task));
            }else if(priority===3){
                dispatch(addP3(task));
            }else if(priority===4){
                dispatch(addP4(task));
            }else if(priority===5){
                dispatch(addP5(task));
            }
        }
        setTask({
            title: "",
            content: "",
            time:""
        })
        setExpanded(false);
        dispatch(setPriority(5));
        event.preventDefault();
    }

    // function changePriorityHandler(num){
    //
    // }
    const priorityFlagColor = {
        color:"gray"
    }

    if(priority===1){
        priorityFlagColor.color="red";
    }else if(priority===2){
        priorityFlagColor.color="orange";
    }else if(priority===3){
        priorityFlagColor.color="blue";
    }else if(priority===4){
        priorityFlagColor.color="green";
    }else if(priority===5){
        priorityFlagColor.color="gray";
    }

    const [items, setItems] = useState([]);
    const [username,setUsername] = useState("");
    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('items'));
        // if (items) {
        //     setItems(items);
        // }
        setUsername(items.username);

    }, []);
    const url = "/api/addTask/"+username;
    const priorityValue = priority+"";
    const timeValue = getWholeDate(props.num)+"";

    function handleSubmit(e){
        e.preventDefault();
        let submitTask = "username="+username+"&title="+task.title+"&content="+task.content+"&priority="+priorityValue+"&time="+timeValue+"&page="+props.page;
        setTask({
            title:"",
            content:"",
            time:""
        });
        fetch(url,{
            method:"POST",
            headers:{"Content-Type":"application/x-www-form-urlencoded"},
            body: submitTask
        }).then((res)=>{
            console.log(res);
            setExpanded(false);
            // navigate('/app/inbox',{replace:false});
            if(props.page==="eachDay"){
                navigate(0);
            }else{
                navigate(2);
            }

        })

    }


    return(
        <div>
            <form onSubmit={handleSubmit}>
                {
                    isExpanded ? (
                        <div style={{borderWidth:'2px',borderColor:'#839AA8',borderStyle:'solid',borderRadius:'5px'}}>
                            <input
                                name="title"
                                onChange={handleChange}
                                value={task.title}
                                placeholder="Title"
                                style={{borderWidth:'0px'}}
                            /><br/>
                            <textarea
                                name="content"
                                onChange={handleChange}
                                value={task.content}
                                placeholder="Take a note..."
                                style={{borderWidth:'0px'}}
                            /><br/>
                            <a type="button" className="btn btn-light" onClick={expand} style={{display:"inline-block"}}>Cancel</a>
                            {/*onClick={submitTask}*/}
                            <button type="submit" className="btn btn-danger" style={{display:"inline-block"}}>Add task</button>
                            <input type="hidden" name="priority" value={priorityValue}/>
                            <input type="hidden" name="time" value={timeValue}/>
                            <Navbar>
                                <NavItem icon={<i className="fa-solid fa-flag" style={priorityFlagColor}></i>}>
                                    <DropdownMenuForPriority/>
                                </NavItem>
                                <NavItem icon={<i className="fa-solid fa-tag" style={{color:'gray'}}></i>}>
                                    <DropdownMenuForLabel/>
                                </NavItem>
                                <NavItem icon={<i className="fa-solid fa-bell" style={{color:'gray'}}></i>}/>
                            </Navbar>
                        </div>

                    ) : <a type="button" onClick={expand}><span><i className="fa-solid fa-plus"></i></span>  Add task</a>
                }

            </form>
        </div>
    )
}

export default AddTask;
