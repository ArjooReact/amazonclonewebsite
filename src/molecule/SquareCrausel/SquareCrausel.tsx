import React,{useRef} from 'react'
import { SquareCrauselType } from './SquareCrauselType'
import './SquareCrausel.css'
import CrauselSquareCard from '../CrauselSquareCard/CrauselSquareCard'

import image1 from '../../assets/squreimg1.png'
import image2 from '../../assets/squareimage2.png'
import image3 from '../../assets/squareimage3.png'
import image4 from '../../assets/squareimage4.png'
import image5 from '../../assets/squareimage5.png'
import image6 from '../../assets/squareimage6.png'
import image7 from '../../assets/squareimage7.png'
import image8 from '../../assets/squareimage8.png'
import image9 from '../../assets/squareimage9.png'
import image10 from '../../assets/squareimage10.png'

const crauselData=[
  {
      id:1,
      title:'Earbuds',
      image:image1
  },
  {
      id:2,
      title:'Cookware set',
      image:image2
  },
  {
      id:3,
      title:'Mobile charger',
      image:image3
  },
  {
      id:4,
      title:'Camping',
      image:image4
  },
  {
      id:5,
      title:'Safe tool',
      image:image5
  },
  {
      id:6,
      title:'Comforter',
      image:image6
  },
  {
      id:7,
      title:'Gaming mouse',
      image:image7
  },
  {
      id:8,
      title:'Pressure washer',
      image:image8
  },
  {
      id:9,
      title:'Storage bag',
      image:image9
  },
  {
      id:10,
      title:'Hair dryer',
      image:image10
  },

]

const SquareCrausel:React.FC<SquareCrauselType>=()=>{
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

    return(<div className='square-crausel-mainContainer'>
   <div className="innerMainContainer1">
   <div className="leftArrowContainer">
    <div className="leftButtonDiv">
    <button className="carousel-button-new" onClick={scrollLeft}>
        &#10094;
      </button>
    </div>
   
   </div>
   <div className="middleContainer">
   <ul className='ul-list-container1' ref={listRef}>
    {crauselData.map((item,index)=>{
      return(
        <li>
          <CrauselSquareCard imagePath={item.image} title={item.title} ></CrauselSquareCard>
        </li>
      )
    })}
   </ul>
   
   </div>
   <div className="leftArrowContainer">
   <div className="leftButtonDiv">
    <button className="carousel-button-new" onClick={scrollRight}>
        &#10094;
      </button>
    </div>
   </div>
   </div>
    </div>)
}

export default SquareCrausel