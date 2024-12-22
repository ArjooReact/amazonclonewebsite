import React from "react";
import { TitleTextType } from "./TitleTextType";
import './TitleText.css'

const TitleText:React.FC<TitleTextType>=({title})=>{
    return(<div>
     <p className="title-font-size">Expert reviews,featured videos & more</p>
    </div>)
}
export default TitleText