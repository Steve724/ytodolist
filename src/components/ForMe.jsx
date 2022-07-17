import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Pdf from "../documents/resume_Gehao.pdf"
import {projects,skills} from "./forMeComponents/portfolio";
import Project from "./forMeComponents/project/Project";
import Skill from "./forMeComponents/skill/Skill";
import './ForMe.css'
export default function ForMe(){
    function onResumeClick() {
        window.open(Pdf);
    }
    return (
        <div>
            <Navigation/>
            <section id="self-info" className="section" style={{textAlign:'center'}}>
                <h1>Hi, I am Chris Yan.</h1>
                <h3>A Full Stack Engineer.</h3>
                <p className="selfInfo" style={{padding:'2em'}}>I am a student in Ohio state university. Currently I am looking forward to find a job this year. Here is my resume. If your company has some opportunities for software engineer. Please contact me. Thank you so much!</p>
                <span>
                    <button onClick={()=>onResumeClick()} style={{marginRight:"10px"}}>resume</button>
                    <a href="https://github.com/Steve724"><i className="fa-brands fa-github" style={{marginRight:"10px"}}></i></a>
                    <a href="https://www.linkedin.com/in/gehaoyan--1a4329222/"><i className="fa-brands fa-linkedin"></i></a>
            </span>
            </section>
            <section id="projects" className="section projects">
                <h3 className="section__title">PROJECTS</h3>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <Project project={projects[0]}/>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <Project project={projects[1]}/>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <Project project={projects[2]}/>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section skills" id="skills">
                <h3 style={{textAlign:"center",marginBottom:"1em",textTransform:"uppercase"}}>SKILLS</h3>
                <Skill/>
            </section>
            <section className="section contact center" id="contact">
                <h2 className="section__title">Contact</h2>
                <a href="mailto:gehao.yan.career@gmail.com">
                    <button type="button" className="btn btn--outline">"Email me"</button>
                </a>
            </section>
            <footer className="footer">
                <a href="https://github.com/Steve724/ytodolist" className="link footer__link">Created By Chris Yan</a>
            </footer>
        </div>
    )
}