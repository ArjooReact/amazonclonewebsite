import React from 'react'
import { MenuCardType } from './MenuCardType'
import './MenuCard.css'
import arrowIcon from '../../assets/rightarrow.png'
const MenuCard:React.FC<MenuCardType>=({title})=>{

    return(<div className='menuCardMainContainer'>
    <p className='cardFontStyle'>{title}</p>
    <img
    style={{width:'24px',height:'24px', paddingRight:'12px'}}
    src={arrowIcon}
    alt="" 
    ></img>
    </div>)
}

export default MenuCard