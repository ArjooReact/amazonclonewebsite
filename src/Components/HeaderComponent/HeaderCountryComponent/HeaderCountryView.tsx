import React from "react";
import { HeaderCountryViewType } from "./HeaderCountryViewType";
import './HeaderCountryView.css'
import flagIcon from '../../../assets/flag.png'
import grayarrowIcon from '../../../assets/grayarraw.png'

const HeaderCountryView=()=>{
    return(<div className="countryMainContainer">
    <img 
    style={{width:'24px', height:'22px'}}
    src={flagIcon}></img>
    <p className="flagText">EN</p>
    <img
    src={grayarrowIcon}
    style={{width:'10px', height:'10px'}}
    ></img>
    </div>)
}
export default HeaderCountryView