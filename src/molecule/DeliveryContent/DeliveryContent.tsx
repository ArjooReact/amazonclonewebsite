import React from "react";
import { DeliveryContentType } from "./DeliveryContentType";
import './DeliveryContent.css'

const DeliveryContent:React.FC<DeliveryContentType>=({title})=>{

    return(<div style={{display:'flex',flexDirection:'column',width:'100%'}}>
        <div className="delivery-content-main-container">
     <p className="font-free-delivery-text">FREE Delivery</p>
     <p className="font-product-delivery-date">Fri,Dec</p>
     <p className="font-product-on-text">on</p>
     <span className="font-product-price">&#8377;499</span>
     <p className="item-fullfilled-text">of items fullfilled</p>
     </div>
     <p className="font-amazon-text">by Amazon</p>
     <div className="delivery-content-main-container">
     <p className="font-fastest-delivery">Or fastest delivery</p>
     <p className="font-timing-style">Today 2 pm - 7 pm </p>
     </div>
    </div>)
}
export default DeliveryContent