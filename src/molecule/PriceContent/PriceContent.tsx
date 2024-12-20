import React from 'react'
import { PriceContentType } from './PriceContentType'
import './PriceContent.css'

export const PriceContent:React.FC<PriceContentType>=({})=>{

    return(<div className='price-content-main-container'>
    <span className='rupee-icon-style'>&#8377;</span>
    <p className='rupee-price-style'>300</p>
    <p className='ont-mrp-style'>M.R.P:</p>
    <span className='font-product-price-style'>&#8377;118.75</span>
    <p className='font-product-price-discount-percentage'>(67% off)</p>
    </div>)
}
export default PriceContent