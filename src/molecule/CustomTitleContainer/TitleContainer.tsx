import React from "react";
import { TitleContainerType } from "./TitleContainerType";
import './TitleContainer.css'

export const TitleContainer:React.FC<TitleContainerType>=({title})=>{
    return(<div className="title-mainContainer">
        <p style={{fontSize:'16px',fontWeight:'400',textAlign:'center'}}>1-12 of Over 1,000 results for</p>
        <p style={{fontSize:'16px',marginLeft:'8px',fontWeight:'bolder',color:'orange'}}>Departments</p>
    </div>)
}
export default TitleContainer