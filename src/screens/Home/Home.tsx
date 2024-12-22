import React,{useState, useEffect} from "react";
import { HomeType } from "./HomeType";
import "./Home.css";
import Carousel from "../../molecule/CrauselBanner/Crausel";
import CarouselSmall from "../../molecule/CrauselSmall/CrauselSmall";
import CustomCrausel from "../../molecule/CustomCrausel/CustomCrausel";
import FilterComponent from "../../Components/FilterComponent/FilterComponent";
import SquareCrausel from "../../molecule/SquareCrausel/SquareCrausel";
//import SquareCrausel from '../../molecule/SquareCrausel/SquareCrausel'
import TitleText from "../../atoms/TitleText/TitleText";
import TitleContainer from "../../molecule/CustomTitleContainer/TitleContainer";
import AmazonProductCard from "../../molecule/AmazonProductCard/AmazonProductCard";
import { productData } from "../../data/ProductCardData";
const Home: React.FC<HomeType> = ({}) => {
  const [isMobile, setIsMobile] = useState(false);
    useEffect(()=>{
      checkDeviceType(); // Check on initial load

    // Set up resize event listener to update on window resize
    window.addEventListener('resize', checkDeviceType);

    return () => {
      window.removeEventListener('resize', checkDeviceType);
    };
    },[])
    const checkDeviceType = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
  const handleClick = () => {
    console.log("clicked..");
  };
  return (
    <div style={{ backgroundColor: "white" }}>
      <Carousel></Carousel>

      {/* <CustomCrausel></CustomCrausel> */}
      <div style={{ width: "100%", backgroundColor: "white" }}>
        <p className="best-sellers-text ">Amazon Bestsellers</p>
        <p className="popular-products-text">
          Our most popular products based on sales.Updated frequently
        </p>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          backgroundColor: "yellow",
          flex: 1,
          flexDirection: "row",
        }}
      >
         {isMobile?(null):(   <div
          style={{
            flex: 0.18,
            backgroundColor: "white",
            padding: "0px",
            margin: "0px",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <FilterComponent></FilterComponent>
          <span
            style={{ width: "2px", height: "auto", backgroundColor: "#F5F5F5" }}
          ></span>
        </div>)}
      
        <div
          style={{
            flex: isMobile? '1':'0.85',
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            overflowX: "hidden",
            alignContent: "flex-end",
            alignItems: "flex-end",
            maxWidth: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignContent: "flex-end",
              alignSelf: "flex-end",
              maxWidth: "100%",
              marginRight: "20px",
            }}
          >
            <CustomCrausel></CustomCrausel>
            {/* <SquareCrausel></SquareCrausel> */}
            <TitleText></TitleText>
            <SquareCrausel></SquareCrausel>
            <TitleContainer></TitleContainer>

            <div className="grid-container">
              {productData.map((item, index) => (
                <div className="grid-item">
                  <AmazonProductCard
                    image={item.productImage}
                  ></AmazonProductCard>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
