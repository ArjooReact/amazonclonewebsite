import React from "react";
import { StarGroupViewType } from "./StarGroupViewType";
import './StarGroupView.css'
import fillStarImage from '../../assets/startfill.png'
import blankStarImage from '../../assets/starblank.png'
import downArrow from '../../assets/downarrowoutline.png'

const StarGroupView:React.FC<StarGroupViewType>=({title})=>{

    return(<div className="star-main-container">
    <img
    style={{width:'2vh',height:'2vh'}} 
    src={fillStarImage}>
    </img>
    <img
    style={{width:'2vh',height:'2vh'}} 
    src={fillStarImage}>
    </img>
    <img
    style={{width:'2vh',height:'2vh'}} 
    src={fillStarImage}>
    </img>
    <img
    style={{width:'2vh',height:'2vh'}} 
    src={fillStarImage}>
    </img>
    <img
    style={{width:'1.8vh',height:'1.8vh'}} 
    src={blankStarImage}>
    </img>
    <img
    style={{width:'20px',height:'20px',marginLeft:'0px'}} 
    src={downArrow}>
    </img>
    <p style={{fontSize:'12px',color:'blue',fontWeight:'500'}}>(95.1 K)</p>
    </div>)
}

export default StarGroupView