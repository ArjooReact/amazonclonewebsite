import React from "react";
import { HeaderOrderViewType } from "./HeaderOrderViewType";
import './HeaderOrderView.css'

const HeaderOrderView:React.FC<HeaderOrderViewType>=({title})=>{

    return(<div className="accountMainContainer1">
        <div className="accountUpperSection1">
           <div className="upperDiv">
           <p className="fontReturn">Returns</p>
           </div>
        </div>
        <div className="lowerDiv">
           <p className="fontOrder">&Orders</p>
          
        </div>
       </div>)
}

export default HeaderOrderView