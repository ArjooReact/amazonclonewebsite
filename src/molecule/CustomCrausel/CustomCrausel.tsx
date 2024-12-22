import React,{useRef} from "react";
import { CustomCrauselType } from "./CustomCrauselType";
import './CustomCrausel.css'
import crauselImage1 from '../../assets/crausel1.png'
import crauselImage2 from '../../assets/crausel2.png'
import crauselImage3 from '../../assets/crausel3.png'
import crauselImage4 from '../../assets/crausel4.png'
import crauselImage5 from '../../assets/crausel5.png'

import crauselImage6 from '../../assets/crausel6.png'
import crauselImage7 from '../../assets/crausel7.png'
import crauselImage8 from '../../assets/crausel8.png'
import crauselImage9 from '../../assets/crausel9.png'
import crauselImage10 from '../../assets/crausel10.png'

import crauselImage11 from '../../assets/crausel11.png'
import crauselImage12 from '../../assets/crausel12.png'
import crauselImage13 from '../../assets/crausel13.png'



const images = [
    crauselImage1,crauselImage2,crauselImage3,crauselImage4,crauselImage5,
    crauselImage6,crauselImage7,crauselImage8,crauselImage9,crauselImage10,
    crauselImage11,crauselImage12,crauselImage13
  
  ];


const CustomCrausel:React.FC<CustomCrauselType>=({})=>{
    const listRef = useRef<HTMLUListElement | null>(null);

     // Function to scroll the list to the left
   // Scroll left by 200px with smooth scrolling
   const scrollLeft = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        left: -800,
        behavior: 'smooth', // Smooth scrolling effect
      });
    }
  };
    // Function to scroll the list to the right
    const scrollRight = () => {
        if (listRef.current) {
          listRef.current.scrollBy({
            left: 800,
            behavior: 'smooth', // Smooth scrolling effect
          });
        }
    
      };
    return <div className="mainCustomContainer">
   <div className="innerMainContainer">
   <div className="leftArrowContainer">
    <div className="leftButtonDiv">
    <button className="carousel-button-new" onClick={scrollLeft}>
        &#10094;
      </button>
    </div>
   
   </div>
   <div className="middleContainer">
    <div className="middleAboveContainer">
        <p className="fontHeader">Shop By Category</p>
    </div>
    <div className="middleBottomContainer">

      <ul className="ul-list-container" ref={listRef}>
        {images.map((item,index)=>{
            return(<li key={index}>
                  <div className="imageContainer">
         <img
         src={item}
         className="image-dimension"
         >
         </img>
        </div>
            </li>)
        })}
      </ul>



      

      
    </div>
   </div>
   <div className="leftArrowContainer">
   <div className="leftButtonDiv">
    <button className="carousel-button-new" onClick={scrollRight}>
        &#10094;
      </button>
    </div>
   </div>
   </div>
    </div>
}
export default CustomCrausel