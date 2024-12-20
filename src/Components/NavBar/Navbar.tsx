import React from "react";
import { NavbarType } from "./NavbarType";
import { Link } from "react-router-dom";
import "./Navbar.css";
import NavButton from "../../atoms/NavButton/NavButton";

const Navbar: React.FC<NavbarType> = () => {
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      <nav className="navbar">
        <Link className="link" to="/">
          <NavButton title="Home"></NavButton>
        </Link>

        <Link className="link" to="/about">
          <NavButton title="Mx Player"></NavButton>
        </Link>

        <Link className="link" to="/about">
          <NavButton title="Sell"></NavButton>
        </Link>

        <Link className="link" to="/about">
          <NavButton title="Amazon Pay"></NavButton>
        </Link>

        <Link className="link" to="/about">
          <NavButton title="Gift Cards"></NavButton>
        </Link>

        <Link className="link" to="/about">
          <NavButton title="Buy Again"></NavButton>
        </Link>

        <Link className="link" to="/about">
          <NavButton title="Amazon Basics"></NavButton>
        </Link>

        <Link className="link" to="/about">
          <NavButton title="Gift Ideas"></NavButton>
        </Link>

        <Link className="link" to="/about">
          <NavButton title="Todays Deal"></NavButton>
        </Link>

        <Link className="link" to="/about">
          <NavButton title="Browsing History"></NavButton>
        </Link>
        <Link className="link" to="/about">
          <NavButton title="Customer Service"></NavButton>
        </Link>

        <Link className="link" to="/about">
          <NavButton title="Rashmis Amazon.in"></NavButton>
        </Link>
        <Link className="link" to="/about">
          <NavButton title="Mobile"></NavButton>
        </Link>
      </nav>
    </div>
  );
};
export default Navbar;
