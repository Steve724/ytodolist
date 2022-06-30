import React, {useState} from "react";
import {add,deleteFavorite} from "../../features/favorite/favoriteSlice";
import {useSelector,useDispatch} from "react-redux";
import {selectFavorite} from "../../features/favorite/favoriteSlice";
export default function FavoriteItem({item}){
    const favorite = useSelector(selectFavorite);
    const [isInclude,setIsInclude] = useState(true);
    const dispatch = useDispatch();
    return (
        <div style={{display:"inline-block"}}>
            {
                isInclude ? <p>{item.name}<span style={{marginRight:"10px"}}><button style={{borderWidth:0,backgroundColor:'white'}} type='button' onClick={()=>{
                    dispatch(add(item.name));
                    setIsInclude(false);
                }
                }><i className="fa-regular fa-heart"></i></button></span></p> : <p>{item.name}<span style={{marginRight:"10px"}}><button style={{borderWidth:0,backgroundColor:'white'}} type='button' onClick={()=>{
                    dispatch(deleteFavorite(item.name));
                    setIsInclude(true);
                }
                }><i className="fa-solid fa-heart-crack"></i></button></span></p>
            }
        </div>

    )
}