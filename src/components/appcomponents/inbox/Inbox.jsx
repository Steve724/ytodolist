import React, {useEffect, useState} from "react";
import AppNavigation from "../AppNavigation";
import LeftBar from "../LeftBar";
import InboxRightBar from "./InboxRightBar";
import {} from "../upcoming/upcoming.css"
export default function Inbox(){
    const [isShowLeftBar,setIsShowLeftBar] = useState(true);
    function isShowLeft(isShow){
        setIsShowLeftBar(isShow);
    }
    // useEffect(()=>{
    //     fetch('/api/userinfo')
    //         .then(response => response.json())
    //         .then(data => console.log(data));
    // },[]);
    return(
        <div>
            <div className="appNavigation">
                <AppNavigation isShowLeft={isShowLeft}/>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 left-bar">
                        {
                            isShowLeftBar && <LeftBar/>
                        }
                        {/*<LeftBar/>*/}
                    </div>

                    <div className="col-lg-8" style={{marginTop:"24px"}}>
                        <h5>Inbox</h5>
                        <hr/>
                        <InboxRightBar/>
                    </div>
                </div>
            </div>
        </div>
    )
}