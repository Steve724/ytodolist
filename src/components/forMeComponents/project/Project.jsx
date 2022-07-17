import React from "react";
import './Projects.css'
export default function Project({project}){

    const styleLight = {
        padding:"2em",
        margin:"0px",
        textAlign:"center",
        boxShadow:"rgba(100,100,111,0.2) 0px 7px 29px 0px",
        borderRadius:"5px"
    }

    return (
        <div style={styleLight} className="project">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            {
                project.stack.map((item,index)=>{
                    return <p style={{display:"inline-block",padding:"10px"}} key={index}>
                        {item}
                    </p>
                })
            }
            <div>
                <span><i className="fa-brands fa-github" style={{paddingRight:"15px",paddingBottom:"25px"}}></i><i className="fa-solid fa-arrow-up-right-from-square"></i></span>
            </div>

        </div>
    )
}