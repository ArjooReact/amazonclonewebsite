import React,{useState} from "react";
import { CustomTextInputType } from "./CustomTextInputType";
import './CustomTextInput.css'
import myImage from '../../assets/downarrow.png';
import search from '../../assets/magnifyinglense.png'
const CustomTextInput:React.FC<CustomTextInputType>=()=>{
 const[clicked,setClicked]=useState(false)

 // Dynamically generate className
 const divStyle = {
   // width: '480px',
    height: '40px',
    display:'flex',
    flexDirection:'row',
    flex:1,
    borderRadius:'10px',
    outline: clicked?('2px solid orange'):(null)
  } as React.CSSProperties;;

 const clickingButton=()=>{
    console.log('clicked')
     setClicked(!clicked)
 }


    return(
    <div style={divStyle}>
     <div
     onClick={clickingButton}
      className="leftView">
        <div style={{display:'flex',flexDirection:'row',flex:1}}>
        <div style={{flex:.7,display:'flex',alignSelf:'center',justifyContent:'flex-end'}}>
        <p style={{color:'#000000', fontSize:'12px'}}>Gift Cards</p>
        </div>
        <div style={{flex:.3,display:'flex',justifyContent:'flex-start',alignItems:'flex-start',alignSelf:'center'}}>
        <img 
       style={{ width: '20px', height: '20px' ,}}
       src={myImage}/>
      </div>
        </div>
      
      </div>
     <div className="centerView">
        <form>
            <input
            className="text-input"
            type='text'
            onClick={clickingButton}
            placeholder="Search Amazon.in"
            ></input>
        </form>
     </div>
     <div 
       onClick={clickingButton}
     className="rightView">
          <img 
       style={{ width: '20px', height: 'auto' ,}}
       src={search}/>
     </div>
    </div>)
}

export default CustomTextInput