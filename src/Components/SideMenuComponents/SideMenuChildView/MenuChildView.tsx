import React from "react";
import { MenuChildViewType } from "./MenuChildViewType";
import "./MenuChildView.css";
import MenuCard from "../../../molecule/SideMenuCard/MenuCard";

let mockListData = [
  {
    title: "Trending",
    data: [
      {
        id: 1,
        content: "Best Sellers",
      },
      {
        id: 2,
        content: "New Release",
      },
      {
        id: 3,
        content: "Movers and Shakers",
      },
    ],
  },
  {
    title: "Digital Content and Devices",
    data: [
      {
        id: 1,
        content: "Echo & Alexa",
      },
      {
        id: 2,
        content: "Fire TV",
      },
      {
        id: 3,
        content: "Kindles E-Readers and e-books",
      },
      {
        id: 4,
        content: "Audible audio books",
      },
    ],
  },
  {
    title: "Shop by Category",
    data: [
      {
        id: 1,
        content: "Mobiles, Computers",
      },
      {
        id: 2,
        content: "TV,Appliances,Electronics",
      },
      {
        id: 3,
        content: "Mens Fashion",
      },
      {
        id: 4,
        content: "Womens Fashion",
      },
    ],
  },
  {
    title: "Programms & Features",
    data: [
      {
        id: 1,
        content: "Amazon Pay",
      },
      {
        id: 2,
        content: "Gift Cards & Mobile Recharge",
      },
      {
        id: 3,
        content: "Amazon LaunchPad",
      },
      {
        id: 4,
        content: "Amazon Business",
      },
    ],
  },
  {
    title: "Help & Settings",
    data: [
      {
        id: 1,
        content: "Your Account",
      },
      {
        id: 2,
        content: "Customer Service",
      },
      {
        id: 3,
        content: "Sign Out",
      },
    ],
  },
];
const MenuChildView: React.FC<MenuChildViewType> = ({ title, data }) => {
  return (
    <div className="menuMainContainer">
      <ul className="listContainer">
        {mockListData.map((item, index) => {
          return (
            <div>
              <ul className="listContainerNested">
                <div>
                  <p className="headerTitle">{item.title}</p>
                </div>

                {item.data.map((item, index) => {
                  return (
                    <li>
                      <MenuCard title={item.content}></MenuCard>
                    </li>
                  );
                })}
                <div className="divider" ></div>
              </ul>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default MenuChildView;
