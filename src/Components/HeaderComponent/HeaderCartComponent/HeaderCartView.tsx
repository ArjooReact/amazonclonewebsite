import React from "react";
import { HeaderCartViewType } from "./HeaderCartViewType";
import "./HeaderCartView.css";
import cartImage from "../../../assets/cartimage.png"

const HeaderCartView: React.FC<HeaderCartViewType> = ({ title }) => {
  return (
    <div className="cartMainContainer">
      <div className="cartfirstSection">
        <img
        alt=""  
        style={{ width: "50px", height: "50px",marginLeft:'20px'}} src={cartImage}></img>
      </div>
      <div className="cartSecondSection">
        <p className="cartFontStyle">Cart</p>
      </div>
    </div>
  );
};

export default HeaderCartView;
