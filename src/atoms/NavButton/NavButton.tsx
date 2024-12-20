import React from 'react'
import { NavButtonType } from './NavButtonType'
import './NavButton.css'
const NavButton:React.FC<NavButtonType>=({title})=>{

    return(<div className='navButtonMainContainer'>
      <p className='navFontStyle'>{title}</p>
    </div>)
}
export default NavButton