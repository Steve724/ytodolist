import React, {useEffect, useState} from "react";
import AppNavigation from "./AppNavigation";
import {useParams} from "react-router-dom";
import LeftBar from "./LeftBar";
import TodayRightBar from "./today/TodayRightBar";
import ProjectRightBar from "./ProjectRightBar";
function Project(props){
    const [isShowLeftBar,setIsShowLeftBar] = useState(true);
    const [projectTitle,setProjectTitle] = useState("");
    function isShowLeft(isShow){
        setIsShowLeftBar(isShow);
    }
    const {projectName} = useParams();

    useEffect(()=>{
        setProjectTitle(projectName);
    },[projectName])

    return(
        <div>
            <AppNavigation isShowLeft={isShowLeft}/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4" style={{marginTop:"24px"}}>
                        {
                            isShowLeftBar && <LeftBar/>
                        }
                        {/*<LeftBar/>*/}
                    </div>
                    <div className="col-lg-8" style={{marginTop:"24px"}}>
                        <ProjectRightBar projectTitle={projectTitle}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;