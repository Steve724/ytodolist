import React, {useState} from "react";
import {getWholeWeekDay,getDateOnlyDay} from "../../utils/getDate";
import style from "../../utils/style"
export default function DateWithWeekDay({count,num}){
    const [hover, setHover] = useState(false);
    return (
        <div style={{...style.normal,
            ...(hover ? style.hover : null),marginLeft:'30px',marginRight:'30px'} }>
            <a type="button" onMouseEnter={()=>{
                setHover(true);
            }}
               onMouseLeave={()=>{
                   setHover(false);
               }}>
                <p style={{marginBottom:'0px'}}>{getWholeWeekDay(num+7*count)}</p>
                <p style={{marginTop:'3px',textAlign:'center'}}>{getDateOnlyDay(num+7*count)}</p>
            </a>
            {/*<p style={{marginBottom:'0px'}}>{getWholeWeekDay(num+7*count)}</p>*/}
            {/*<p style={{marginTop:'3px',textAlign:'center'}}>{getDateOnlyDay(num+7*count)}</p>*/}
        </div>
    )
}