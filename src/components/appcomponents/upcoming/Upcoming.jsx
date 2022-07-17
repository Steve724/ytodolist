import React,{useState} from "react";
import AppNavigation from "../AppNavigation";
import LeftBar from "../LeftBar";
import UpcomingRightBar from "./UpcomingRightBar";
import 'react-calendar/dist/Calendar.css';
import {} from "./upcoming.css"
export default function Upcoming(){
    const [isShowLeftBar,setIsShowLeftBar] = useState(true);
    function isShowLeft(isShow){
        setIsShowLeftBar(isShow);
    }
    return(
        <div>
            <div className="appNavigation" >
                <AppNavigation isShowLeft={isShowLeft}/>
            </div>
            {/*<AppNavigation isShowLeft={isShowLeft}/>*/}
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 left-bar">
                        {
                            isShowLeftBar && <LeftBar/>
                        }
                        {/*<LeftBar/>*/}
                    </div>
                    <div className="col-lg-8" >
                        <UpcomingRightBar/>
                    </div>
                </div>
            </div>
        </div>
    )
}