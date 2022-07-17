import React, {useEffect, useState} from "react";
import Calendar from "react-calendar";
import {getYearWithMonth} from "../../../utils/getDate";
import ModalDate from "../ModalDate";
import {getWholeWeekDay,getDateOnlyDay} from "../../../utils/getDate";
import DateWithWeekDay from "../DateWithWeekDay";
import EachDayAddTask from "../EachDayAddTask";
import AddTask from "../AddTask";
export default function UpcomingRightBar(){
    const [value,onChange] = useState(new Date());
    const [isOpen,setIsOpen] = useState(false);
    const [count,setCount] = useState(1);
    const [arr,setArr] = useState([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]);

    return (
        <div style={{marginTop:'60px'}}>
            <div style={{position:"fixed",zIndex:"1",backgroundColor:"white",paddingTop:'20px',width:'100%'}}>
                <a id="date" type="button" onClick={()=>{
                    isOpen?setIsOpen(false):setIsOpen(true)
                }}>{getYearWithMonth(count*7)}<i className="fa-solid fa-angle-down"></i></a>
                <a id="decreaseDate" type="button" style={{marginLeft:"500px"}} onClick={()=>{
                    if(count!==0){
                        setCount(count-1);
                    }
                }}><i className="fa-solid fa-angle-left"></i></a>
                <a id="increaseDate" type="button" style={{marginLeft:"20px"}} onClick={()=>{
                    setCount(count+1);
                }}><i className="fa-solid fa-angle-right"></i></a>
                <button onClick={()=>{
                    setCount(0);
                }} style={{marginLeft:"15px"}}>today</button>
                <ModalDate open={isOpen} onClose={()=>{
                    setIsOpen(false)
                }}>
                </ModalDate>

                <table className="date-table">
                    <tr>
                        <td><DateWithWeekDay count={count} num={0}/></td>
                        <td><DateWithWeekDay count={count} num={1}/></td>
                        <td><DateWithWeekDay count={count} num={2}/></td>
                        <td><DateWithWeekDay count={count} num={3}/></td>
                        <td><DateWithWeekDay count={count} num={4}/></td>
                        <td><DateWithWeekDay count={count} num={5}/></td>
                        <td><DateWithWeekDay count={count} num={6}/></td>
                    </tr>
                </table>
            </div>
            {/*<a id="date" type="button" onClick={()=>{*/}
            {/*    isOpen?setIsOpen(false):setIsOpen(true)*/}
            {/*}}>{getYearWithMonth(count*7)}<i className="fa-solid fa-angle-down"></i></a>*/}
            {/*<a id="decreaseDate" type="button" style={{marginLeft:"500px"}} onClick={()=>{*/}
            {/*    if(count!==0){*/}
            {/*        setCount(count-1);*/}
            {/*    }*/}
            {/*}}><i className="fa-solid fa-angle-left"></i></a>*/}
            {/*<a id="increaseDate" type="button" style={{marginLeft:"20px"}} onClick={()=>{*/}
            {/*    setCount(count+1);*/}
            {/*}}><i className="fa-solid fa-angle-right"></i></a>*/}
            {/*<button onClick={()=>{*/}
            {/*    setCount(0);*/}
            {/*}} style={{marginLeft:"15px"}}>today</button>*/}
            {/*<ModalDate open={isOpen} onClose={()=>{*/}
            {/*    setIsOpen(false)*/}
            {/*}}>*/}
            {/*</ModalDate>*/}

            {/*<table className="date-table">*/}
            {/*    <tr>*/}
            {/*        <td><DateWithWeekDay count={count} num={0}/></td>*/}
            {/*        <td><DateWithWeekDay count={count} num={1}/></td>*/}
            {/*        <td><DateWithWeekDay count={count} num={2}/></td>*/}
            {/*        <td><DateWithWeekDay count={count} num={3}/></td>*/}
            {/*        <td><DateWithWeekDay count={count} num={4}/></td>*/}
            {/*        <td><DateWithWeekDay count={count} num={5}/></td>*/}
            {/*        <td><DateWithWeekDay count={count} num={6}/></td>*/}
            {/*    </tr>*/}
            {/*</table>*/}
            <div style={{paddingTop:"130px"}}>
                {
                    arr.map((item)=>{
                        return <EachDayAddTask num={item}/>
                    })
                }
            </div>

            {/*<EachDayAddTask num={0}/>*/}

        </div>
    )
}