import React,{useState} from "react";
import AppNavigation from "../AppNavigation";
import LeftBar from "../LeftBar";
import FiltersLabelsRightBar from "./FiltersLabelsRightBar";

export default function FiltersLabels(){
    const [isShowLeftBar,setIsShowLeftBar] = useState(true);
    function isShowLeft(isShow){
        setIsShowLeftBar(isShow);
    }
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
                        <FiltersLabelsRightBar/>

                    </div>
                </div>
            </div>
        </div>
    )
}