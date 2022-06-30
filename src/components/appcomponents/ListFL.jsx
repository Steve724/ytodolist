import React, {useState,useEffect} from "react";
import ModalFilter from "./ModalFilter";
import {useSelector,useDispatch} from "react-redux";
import {add,selectFavorite} from '../../features/favorite/favoriteSlice';
import FavoriteItem from "./FavoriteItem";
import {addP1, initP1} from "../../features/priority/priority1Slice";
export default function ListFL({username}){
    const favorite = useSelector(selectFavorite);
    const dispatch = useDispatch();
    const [isExpand,setIsExpand] = useState(true);
    const [isOpen,setIsOpen] = useState(false);
    const [filters,setFilters] = useState([]);

    useEffect(()=>{
        fetch("/api/userinfo")
            .then(response=>response.json())
            .then(data=> {
                data.map(user=>{
                    if (user.username===username){
                        setFilters(user.filters);
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
    function addFilters(filter){
        setFilters(prevState => {
            return [
                ...prevState,
                filter
            ]
        })
        setIsExpand(true);
        setIsOpen(false);

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
                filters.map((item)=>{
                    return (
                        <div>
                            <FavoriteItem item={item}/>
                            <form style={{display:"inline-block"}} action="/api/deletefilter" method="post">
                                <button type="submit" style={{borderWidth:'0px',backgroundColor:'white',display:"inline-block"}}><i className="fa-regular fa-square"></i></button>
                                <input name="name" value={item.name} type="hidden"/>
                                <input name="username" value={username} type="hidden"/>
                            </form>
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