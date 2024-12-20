import React from "react";
import { AmazonProductCardType } from "./AmazonProductCardType";
import './AmazonProductCard.css'
import cardimage from '../../assets/cardimage1.png'
import StarGroupView from "../../Components/StarComponent/StarGroupView";
import PriceContent from "../PriceContent/PriceContent";
import DeliveryContent from "../DeliveryContent/DeliveryContent";
import LimitedButton from "../../atoms/LimitedButton/LimitedButton";
const AmazonProductCard:React.FC<AmazonProductCardType>=({title,image})=>{

    return(<div className="amazon-card-main-container">
        <div className="amazon-card-image-section">
        <img
     src={image}
     style={{width:'30vh',height:'36vh',backgroundColor:'#eef2fa'}}
     >
     </img>
        </div>
        <div className="amazon-card-text-section">
            <p className="amazon-card-product-description">Amazon Basics Portable Digital Weighing Scale for Kitchen | Electronic Weighing Scale With Back light LCD Display and high precision sensors |...</p>
            <StarGroupView></StarGroupView>
            <p className="amazon-card-product-count">8K+ bought in past month</p>
            <LimitedButton></LimitedButton>
            <PriceContent></PriceContent>
            <DeliveryContent></DeliveryContent>
        </div>
     
    </div>)
}

export default AmazonProductCard