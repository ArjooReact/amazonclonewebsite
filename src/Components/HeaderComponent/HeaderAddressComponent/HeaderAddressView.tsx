import React from 'react'
import { HeaderAddressViewType } from './HeaderAddressViewType'
import './HeaderAddressView.css'
import locationImage from '../../../assets/locationmarker.png'
const HeaderAddressView:React.FC<HeaderAddressViewType>=({title})=>{
    return(<div className='addressMainContainer'>
     <div className='leftContainer'>
        <img
        style={{width:'20px',height:'20px'}}
        src={locationImage}
        ></img>
     </div>
     <div className='rightContainer'>
        <div className='addressUpperSection'>
        <p className='userNameContent'>Deliver to Rashmi</p>
        </div>
        <div className='addressLowerSection'>
            <p className='addressContent'>Pimpri Chi...</p>
            <p className='pinCodeContent'>411033</p>
        </div>
     </div>
    
    </div>)
}

export default HeaderAddressView

