import React from "react";
import { HeaderAccountViewType } from "./HeaderAccountViewType";
import './HeaderAccountView.css'
import whiteArraw from '../../../assets/whitearraow.png'

const HeaderAccountView:React.FC<HeaderAccountViewType>=({title})=>{

    return(<div className="accountMainContainer">
     <div className="accountUpperSection">
        <div className="helloFontDiv">
        <p className="helloFont">Hello,</p>
        <p className="helloFont">Rashmi</p>
        </div>
     </div>
     <div className="accountLowerSection">
        <p className="accountsText">Accounts & Lists</p>
        <img
        style={{width:'12px',height:'12px',marginBottom:'8px',marginLeft:'4px'}}
        src={whiteArraw}
        alt="" 
        >
        </img>
     </div>
    </div>)
}
export default HeaderAccountView