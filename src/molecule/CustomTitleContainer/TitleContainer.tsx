import React from "react";
import { TitleContainerType } from "./TitleContainerType";
import './TitleContainer.css'

export const TitleContainer:React.FC<TitleContainerType>=({title})=>{
    return(<div className="title-mainContainer">
        <p className="title-first-text-size">1-12 of Over 1,000 results for</p>
        <p className="title-second-text-size">Departments</p>
    </div>)
}
export default TitleContainer