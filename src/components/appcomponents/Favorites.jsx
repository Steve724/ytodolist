import React from "react";
import {useSelector,useDispatch} from "react-redux";
import {selectFavorite} from "../../features/favorite/favoriteSlice";

export default function Favorites(){
    const favorite = useSelector(selectFavorite);

    return (
        <div>
            <span><h5 style={{marginLeft:'20px'}}>Favorites</h5></span>
            {
                favorite.map(item=>{
                    return <p style={{marginLeft:'20px'}}>{item}</p>
                })
            }
        </div>
    )
}