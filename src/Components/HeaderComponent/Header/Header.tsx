import React from 'react'
import { HeaderType } from './HeaderType'
import CustomTextInput from '../../../atoms/CustomTextInput/CustomTextInput'
import AmazonIcon from '../../../molecule/AmazonIcon/AmazonIcon'
import HeaderAddressView from '../HeaderAddressComponent/HeaderAddressView'
import HeaderCountryView from '../HeaderCountryComponent/HeaderCountryView'
import HeaderAccountView from '../HeaderAccountDetailComponent/HeaderAccountView'
import HeaderOrderView from '../HeaderOrderComponent/HeaderOrderView'
import './Header.css'
import HeaderCartView from '../HeaderCartComponent/HeaderCartView'
const Header:React.FC<HeaderType>=({title})=>{

    return(<div className='mainContainer'>
     <div className='amazonIconContainer'>
        <AmazonIcon></AmazonIcon>
     </div>
     <div className='addressContainer'>
        <HeaderAddressView></HeaderAddressView>
     </div>
     <div className='searchContainer'>
        <CustomTextInput></CustomTextInput>
     </div>
     <div className='countryContainer'>
     <HeaderCountryView></HeaderCountryView>
     </div>
     <div className='accountContainer'>
      <HeaderAccountView></HeaderAccountView>
     </div>
     <div className='orderContainer'>
      <HeaderOrderView></HeaderOrderView>
     </div>
     <div className='cartContainer'>
      <HeaderCartView></HeaderCartView>
     </div>
    </div>)
}

export default Header