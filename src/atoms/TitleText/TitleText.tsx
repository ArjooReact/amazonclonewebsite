import React from "react";
import { TitleTextType } from "./TitleTextType";
import './TitleText.css'

const TitleText:React.FC<TitleTextType>=({title})=>{
    return(<div>
     <p style={{fontWeight:'bolder',color:'black',alignSelf:'left',textAlign:'left',marginTop:'4vh',marginBottom:'6vh',marginLeft:'6vh',fontSize:'20px'}}>Expert reviews,featured videos & more</p>
    </div>)
}
export default TitleText