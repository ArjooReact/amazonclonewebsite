import React from 'react'
import { FilterTextType } from './FilterTextType'
import './FilterText.css'
const FilterText:React.FC<FilterTextType>=({title})=>{

    return(
    // <div className='textMainContainer'>
      <p className='fontStyle'>{title}</p>
    // </div>)
    )
}

export default FilterText