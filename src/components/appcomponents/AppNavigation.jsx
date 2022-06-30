import React, {useState} from "react";
import {Link} from "react-router-dom";

function AppNavigation(props){
    const [isOpen,setIsOpen] = useState(true);
    function handleClick(){
        if(isOpen===true){
            setIsOpen(false);
            props.isShowLeft(isOpen);
        }else{
            setIsOpen(true);
            props.isShowLeft(isOpen);
        }
    }
    return(
        <nav className="navbar navbar-expand-lg bg-light app-nav-head" >
            <div className="container-fluid" >
                <a type="button" onClick={handleClick}><i className="fa-solid fa-bars menu-home" style={{marginLeft:"20px",color:"red"}}></i></a>
                <a><Link to="/app/today"><i className="fa-solid fa-house menu-home" style={{marginLeft:"20px",color:"red"}}></i></Link></a>
                <div className="collapse navbar-collapse">
                    <form className="d-flex app-search" role="search" style={{marginLeft:"20px"}}>
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    </form>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 " style={{marginLeft:"800px"}}>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i className="fa-solid fa-plus" style={{color:"red"}}></i></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i class="fa-solid fa-circle-question" style={{color:"red"}}></i></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i className="fa-solid fa-bell" style={{color:"red"}}></i></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i className="fa-solid fa-user" style={{color:"red"}}></i></a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default AppNavigation;