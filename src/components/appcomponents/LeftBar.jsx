import React,{useState} from "react";
import { Routes, Route, Link } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Modal from "./Modal";
import Favorites from "./Favorites";
function LeftBar(){
    const [isExpand,setIsExpand] = useState(true);
    const [projects,setProjects] = useState(["personal","123"]);
    const [project,setProject] = useState("");
    const [isOpen,setIsOpen] = useState(false);
    // setProject("Personal");
    // setProjects(prevState => {
    //     return [
    //         ...prevState,
    //         project
    //     ]
    // })




    function handleClick(){
        if (isExpand===false){
            setIsExpand(true);
        }else{
            setIsExpand(false);
        }
    }
    return(
        <div style={{position:"sticky",top:"80px",marginLeft:"30px"}}>
            <table>
                <tr>
                    <td><i className="fa-solid fa-inbox" style={{color:"blue"}}></i></td>
                    <td><Link to="/app/inbox" style={{color:"black"}}>Inbox</Link></td>
                </tr>
                <tr>
                    <td><i className="fa-solid fa-calendar-day" style={{color:"green"}}></i></td>
                    <td><Link to="/app/today" style={{color:"black"}}>Today</Link></td>
                </tr>
                <tr>
                    <td><i className="fa-solid fa-calendar" style={{color:"purple"}}></i></td>
                    <td><Link to="/app/upcoming" style={{color:"black"}}>Upcoming</Link></td>
                </tr>
                <tr>
                    <td><i className="fa-solid fa-filter" style={{color:"orange"}}></i></td>
                    <td><Link to="/app/filters-labels" style={{color:"black"}}>Filters & Labels</Link></td>
                </tr>
            </table>
            <Favorites/>
            <table>
                <tr>
                    <td><a type="button" onClick={handleClick}>{isExpand?
                        <i className="fa-solid fa-angle-down"></i>:
                        <i className="fa-solid fa-angle-right"></i>}</a></td>
                    <td><h5>Projects</h5></td>
                    <td><a typr="button" type="button" style={{marginLeft:"80px"}} id="put" onClick={()=>{
                        setIsOpen(true)
                    }}><i className="fa-solid fa-plus"></i></a></td>
                </tr>
                {
                    isExpand &&
                        projects.map(item=>{
                            const newTo = {
                                pathname:`/app/project/${item}`,
                                param1:`${item}`
                            }
                            return <tr>
                                <td><i className="fa-solid fa-circle"></i></td>
                                <td><Link to={newTo} style={{color:"black"}}>{item}</Link></td>
                            </tr>
                        })

                }

            </table>
            <Modal open={isOpen} onClose={(name)=>{
                setProjects(prevState => {
                    return [
                        ...prevState,
                        name
                    ]
                })
                setIsOpen(false)
            }} onCancel={()=>{setIsOpen(false)}}>
                New project name:
            </Modal>
        </div>

    )
}

export default LeftBar;