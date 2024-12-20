import React from "react";
import { MenuHeaderType } from "./MenuHeaderType";
import './MenuHeader.css'
import profileImageIcon from '../../assets/profile.png'
const MenuHeader:React.FC<MenuHeaderType>=()=>{

    return(<div className="menuHeaderContainer">
      <img 
      style={{width:'50px',height:'50px'}}
      alt="" 
      src={profileImageIcon}>
      </img>
      <p className="menuTitle">Hello, Rashmi</p>
    </div>)
}
export default MenuHeader