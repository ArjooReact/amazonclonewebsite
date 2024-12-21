import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./screens/Home/Home";
import About from "./screens/About/About";
import Navbar from "./Components/NavBar/Navbar";
import Header from "./Components/HeaderComponent/Header/Header";
import HeaderAddressView from "./Components/HeaderComponent/HeaderAddressComponent/HeaderAddressView";
import { useState } from "react";
import MenuHeader from "./atoms/CustomMenuHeader/MenuHeader";
import MenuChildView from "./Components/SideMenuComponents/SideMenuChildView/MenuChildView";
import hamburgerIcon from "./assets/hamburger.png";
import Footer from "./Components/FooterComponent/Footer";
function App(): React.JSX.Element {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (

    <div className="App">
      <div style={{height:'auto'}}>
      <Header></Header>
      <div className="hamBurgerContainer2">
        <div className="hamBurgerButton" onClick={toggleSidebar}>
          <img
            src={hamburgerIcon}
            alt="" 
            style={{ width: '3vh', height: '3vh', paddingLeft: "2px" }}
          ></img>
          <p className="allFontStyle">All</p>
        </div>
        <Navbar></Navbar>
      </div>
      </div>
      {isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}

      {/* Sidebar */}
      <div className="content">
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <MenuHeader></MenuHeader>
        <div className="sidebarNested">
          <MenuChildView></MenuChildView>
        </div>
      </div>

      {/* Main content */}
      <div className="content">
        <Routes>
        <Route path="/" element={<Home />} /> {/* Home route */}
        <Route path="/about" element={<About />} /> {/* About route */}
        {/* <Route path="*" element={<NotFound />} />  Catch-all route for 404 */}
      </Routes>
      </div>
      {/* Define the routes */}
     </div>
      <Footer></Footer>
    </div>
 
  );
}

export default App;
