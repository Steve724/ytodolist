import React, {useState,useEffect} from "react";
import ModalFilter from "./ModalFilter";
import {useSelector,useDispatch} from "react-redux";
import {add,selectFavorite} from '../../features/favorite/favoriteSlice';
import FavoriteItem from "./FavoriteItem";
import {addP1, initP1} from "../../features/priority/priority1Slice";
import {useNavigate} from "react-router-dom";
import {selectFilter,addFilter,initFilter} from "../../features/filter/filterSlice";

export default function ListFL({username}){
    const favorite = useSelector(selectFavorite);
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);
    const [isExpand,setIsExpand] = useState(true);
    const [isOpen,setIsOpen] = useState(false);
    // const [filters,setFilters] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        fetch("/api/userinfo")
            .then(response=>response.json())
            .then(data=> {
                dispatch(initFilter());
                data.map(user=>{
                    if (user.username===username){
                        user.filters.map((item)=>dispatch(addFilter(item)));
                        // setFilters(user.filters);
                        return user.tasks;
                    }
                })
            })
    },[filter]);

    function expandOrNot(){
        if(isExpand===false){
            setIsExpand(true);
        }else{
            setIsExpand(false);
        }
    }
    function addFilters(){
        setIsExpand(true);
        setIsOpen(false);

    }

    function handleDelete(id){
        console.log(1);
        console.log(id);
        fetch('/api/deleteFilter',{
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
            }</a>   Filters<a type="button" style={{marginLeft:"700px"}} onClick={()=>{
                setIsOpen(true);
            }}><i
                className="fa-solid fa-plus"></i></a>
            </span>
            <hr/>
            {   isExpand &&
                filter.map((item)=>{
                    return (
                        <div>
                            <FavoriteItem item={item}/>
                            <p><button type="button" onClick={()=>{handleDelete(item._id.toString())}} style={{borderWidth:'0px',backgroundColor:'white'}}><i className="fa-regular fa-square"></i></button>
                                </p>
                            <hr/>
                        </div>)
                })
            }
            <ModalFilter open={isOpen} onClose={()=>{
                setIsOpen(false);
            }} onAdd={addFilters}>
                Add filter
            </ModalFilter>
        </div>
    )
}