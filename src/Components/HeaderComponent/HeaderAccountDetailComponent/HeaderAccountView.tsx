import React from "react";
import { HeaderAccountViewType } from "./HeaderAccountViewType";
import './HeaderAccountView.css'
import whiteArraw from '../../../assets/whitearraow.png'

const HeaderAccountView:React.FC<HeaderAccountViewType>=({title})=>{

    return(<div className="accountMainContainer">
      <div style={{display:'flex',alignItems:'flex-end',justifyContent:'flex-start',width:'100%'}}>
      <p style={{color:'white',fontSize:'12px',textAlign:'left',fontWeight:'600'}}>Hello, Rashmi</p>
      </div>
    
      <div style={{display:'flex',flexDirection:'row',width:'100%'}}>
      <p style={{color:'white',fontWeight:'bolder',fontSize:'14px'}}>Accounts & Lists</p>
      <img
        style={{width:'12px',height:'12px',marginBottom:'8px',marginLeft:'4px',marginTop:'2px',alignSelf:'center'}}
        src={whiteArraw}
        alt="" 
        >
        </img>
      </div>
      {/* <p style={{color:'white'}}>Accounts & Lists</p> */}
     {/* <div className="accountUpperSection">
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
     </div> */}
    </div>)
}
export default HeaderAccountView