import React from "react";
import {skills} from "../portfolio";
import './Skill.css'
export default function Skill(){
    return (
        <div>
            <ul className="skills__list">
                {
                    skills.map((item,index)=>{
                        return <li key={index} className="skills__list-item btn btn--plain item">{item}</li>
                    })
                }
            </ul>
        </div>
    )
}