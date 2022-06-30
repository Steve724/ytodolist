import React, {useState} from "react";
import AppNavigation from "../AppNavigation";
import LeftBar from "../LeftBar";
import TodayRightBar from "./TodayRightBar";
function Today(){
    const [isShowLeftBar,setIsShowLeftBar] = useState(true);
    function isShowLeft(isShow){
        setIsShowLeftBar(isShow);
    }
    return(
        <div>
            <AppNavigation isShowLeft={isShowLeft}/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4">
                        {
                            isShowLeftBar && <LeftBar/>
                        }
                        {/*<LeftBar/>*/}
                    </div>
                    <div className="col-lg-8" style={{marginTop:"24px"}}>
                        <TodayRightBar/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Today;