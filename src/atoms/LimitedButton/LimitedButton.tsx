import React from "react";
import { LimitedButtonType } from "./LimitedButtonType";
import './LimitedButton.css'

export const LimitedButton:React.FC<LimitedButtonType>=({title})=>{

return(<div className="limited-button-main-container">
  <p className="limited-btn-title">Limited time deal</p>
</div>)
}

export default LimitedButton