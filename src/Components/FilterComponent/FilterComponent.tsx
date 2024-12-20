import React from 'react'
import { FilterComponentType } from './FilterComponentType'
import './FilterComponent.css'
import FilterText from '../../atoms/FilterTextComponent/FilterText'
const FilterComponent:React.FC<FilterComponentType>=({title})=>{
     let testArray=[
        { "id": 1, "name": "Amazon Launchpad" },
        { "id": 2, "name": "Amazon Renewed" },
        { "id": 3, "name": "Apps for Android" },
        { "id": 4, "name": "Baby Products" },
        { "id": 5, "name": "Bags, Wallets and Luggage" },
        { "id": 6, "name": "Beauty" },
        { "id": 7, "name": "Books" },
        { "id": 8, "name": "Car & Motorbike" },
        { "id": 9, "name": "Clothing & Accessories" },
        { "id": 10, "name": "Computers & Accessories" },
        { "id": 11, "name": "Electronics" },
        { "id": 12, "name": "Garden & Outdoors" },
        { "id": 13, "name": "Gift Cards" },
        { "id": 14, "name": "Grocery & Gourmet Foods" },
        { "id": 15, "name": "Health & Personal Care" },
        { "id": 16, "name": "Home & Kitchen" },
        { "id": 17, "name": "Home Improvement" },
        { "id": 18, "name": "Industrial & Scientific" },
        { "id": 19, "name": "Jewellery" },
        { "id": 20, "name": "Kindle Store" },
        { "id": 21, "name": "Movies & TV Shows" },
        { "id": 22, "name": "Music" },
        { "id": 23, "name": "Musical Instruments" },
        { "id": 24, "name": "Office Products" },
        { "id": 25, "name": "Pet Supplies" },
        { "id": 26, "name": "Shoes & Handbags" },
        { "id": 27, "name": "Software" },
        { "id": 28, "name": "Sports, Fitness & Outdoors" },
        { "id": 29, "name": "Toys & Games" },
        { "id": 30, "name": "Video Games" },
        { "id": 31, "name": "Watches" }
      ]
    return(<div className='filterComponentContainer'>
        <p style={{fontWeight:'bolder',color:'#000000',textAlign:'left',paddingLeft:'3vh'}}>Any Department</p>
        <ul className='list-container'>
        {testArray.map((item,index)=>{
            return(
                <li  key= {item.id} className='li-test'>
              
                    <FilterText title={item.name}></FilterText>
                   
             
                </li>
            )
        })}
        </ul>
        {/* <ul className='list-container'>
        {testArray.map((item,index)=>{
            return(
                <li className='li-test'>
              
                  <p>{item.title}</p>
                   
                
                </li>
            )
        })}
        </ul> */}
    </div>)
}

export default FilterComponent