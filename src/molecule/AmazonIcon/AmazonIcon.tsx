import React from "react";
import { AmazonIconType } from "./AmazonIconType";
import './AmazonIcon.css'
import anazonIcon from '../../assets/amazon.png'
const AmazonIcon:React.FC<AmazonIconType>=({title})=>{

    return(<div className="mainContainer1">
      <img
      src={anazonIcon}
      style={{width:'100px',height:'40px',marginTop:'16px'}}
      ></img>
      <p className="amazonTextStyle">.in</p>
    </div>)
}
export default AmazonIcon