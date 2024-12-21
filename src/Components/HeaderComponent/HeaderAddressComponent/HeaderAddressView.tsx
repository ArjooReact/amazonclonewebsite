import React from 'react'
import { HeaderAddressViewType } from './HeaderAddressViewType'
import './HeaderAddressView.css'
import locationImage from '../../../assets/locationmarker.png'
const HeaderAddressView:React.FC<HeaderAddressViewType>=({title})=>{
    return(<div className='addressMainContainer'>
     <div className='leftContainer'>
        <img
        style={{width:'2.5vh',height:'2vh'}}
        src={locationImage}
        ></img>
     </div>
     {/* <div className='rightContainer'> */}
     <div style={{display:'flex',width:'22vh',justifyContent:'center',alignItems:'flex-start',flexDirection:'column'}}>
     <p style={{ color: 'white',textAlign:'left',fontSize:'10px',fontWeight:'600'}}>Deliver to Rashmi</p>
     <div style={{display:'flex',textAlign:'left'}}>
     <p style={{color:'white',textAlign:'left',fontSize:'14px',fontWeight:'bolder'}}>Pimpri Chi...</p>
     <p style={{color:'white',fontSize:'14px',fontWeight:'bolder'}}>411033</p>
     </div>
   
        {/* <div className='addressUpperSection'>
        <p className='userNameContent'>Deliver to Rashmi</p>
        </div>
        <div className='addressLowerSection'>
            <p className='addressContent'>Pimpri Chi...</p>
            <p className='pinCodeContent'>411033</p>
        </div> */}
     </div>
    
    </div>)
}

export default HeaderAddressView

