import React from "react";
import { CrauselSquareType } from "./CrauselSquareType";
import './CrauselSquareCard.css'
import headPhoneimg from '../../assets/headphone.png'

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
        image:image1
    },
    {
        id:2,
        image:image2
    },
    {
        id:3,
        image:image3
    },
    {
        id:4,
        image:image4
    },
    {
        id:5,
        image:image5
    },
    {
        id:6,
        image:image6
    },
    {
        id:7,
        image:image7
    },
    {
        id:8,
        image:image8
    },
    {
        id:9,
        image:image9
    },
    {
        id:10,
        image:image10
    },

]

const CrauselSquareCard:React.FC<CrauselSquareType>=({imagePath,title})=>{
    return(<div className="square-crausel-card">
     <img
     src={imagePath}
     style={{width:'100%', height:'20vh'}}
     >
     </img>
     <p style={{fontWeight:'bold',fontSize:'14px',marginBottom:'12px'}}>{title}</p>
    </div>)
}

export default CrauselSquareCard