import React, {useState,useEffect} from "react";
import ModalLabel from "./ModalLabel";
import {add} from "../../features/favorite/favoriteSlice";
import {useSelector,useDispatch} from "react-redux";
// import {addLabel,selectLabel} from "../../features/label/labelSlice";
import {addLabelForAddTask,selectLabelForAddTask} from "../../features/label/labelForAddTaskSlice";
import FavoriteItem from "./FavoriteItem";
import {useNavigate} from "react-router-dom";

export default function ListLabels({username}){
    const labelForAddTask = useSelector(selectLabelForAddTask);
    const dispatch = useDispatch();
    const [isExpand,setIsExpand] = useState(true);
    const [isOpen,setIsOpen] = useState(false);
    const [labels,setLabels] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        fetch("/api/userinfo")
            .then(response=>response.json())
            .then(data=> {
                data.map(user=>{
                    if (user.username===username){
                        setLabels(user.labels);
                        return user.tasks;
                    }
                })
            })
    },[username]);

    function expandOrNot(){
        if(isExpand===false){
            setIsExpand(true);
        }else{
            setIsExpand(false);
        }
    }
    function addFilters(label){
        setLabels(prevState => {
            return [
                ...prevState,
                label
            ]
        })
        setIsExpand(true);
        setIsOpen(false);
        dispatch(addLabelForAddTask(label));
    }

    function handleDelete(id){
        console.log(1);
        console.log(id);
        fetch('/api/deleteLabel',{
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
            <span><a type="button" onClick={expandOrNot}>{isExpand?
                <i className="fa-solid fa-angle-down"></i>:<i className="fa-solid fa-angle-right"></i>
            }</a>   Labels<a type="button" style={{marginLeft:"700px"}} onClick={()=>{
                setIsOpen(true);
            }}><i
                className="fa-solid fa-plus"></i></a>
            </span>
            <hr/>
            {   isExpand &&
                labels.map((item)=>{
                    return (<div>
                        <FavoriteItem item={item}/>
                        <p><button type="button" onClick={()=>{handleDelete(item._id.toString())}} style={{borderWidth:'0px',backgroundColor:'white'}}><i className="fa-regular fa-square"></i></button>
                        </p>
                        <hr/></div>)
                })
            }
            <ModalLabel open={isOpen} onClose={()=>{
                setIsOpen(false);
            }} onAdd={addFilters}>
                Add label
            </ModalLabel>
        </div>
    )
}
//<p>{item.name}<span style={{marginRight:"10px"}}><button style={{borderWidth:0,backgroundColor:'white'}} type='button' onClick={()=>{
//                         dispatch(add(item.name))
//                     }
//                     }><i className="fa-regular fa-heart"></i></button></span></p>