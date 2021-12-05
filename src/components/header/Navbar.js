/** @format */

import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import CloseIcon from "@material-ui/icons/Close";
import FacebookIcon from "@material-ui/icons/Facebook";

import { AboutData, NewsData, MembershipData } from "./MenuData";

import "./Navbar.scss";

const Navbar = (props) => {
  return (
    <nav className='navbar'>
      <ul className='main-menu'>
        <CloseButton closeSidebar={props.closeSidebar} />
        <NavItem data={AboutData} closeSidebar={props.closeSidebar} />
        <NavItem data={NewsData} closeSidebar={props.closeSidebar} />
        <NavItem data={MembershipData} closeSidebar={props.closeSidebar} />
      </ul>
      <BottomSection />
    </nav>
  );
};

const NavItem = (props) => {
  const { title, path, items } = props.data;
  const location = useLocation();
  const item = useRef(null);

  useEffect(() => {
    if (window.innerWidth <= 960) {
      item.current.style.backgroundColor = "#204290";
      if (location.pathname !== path) return;
      item.current.style.backgroundColor = "#004f9a";
    }
  }, [location]);

  return (
    <li className='nav-item' ref={item} onClick={props.closeSidebar}>
      <button>
        <Link to={path}>{title}</Link>
      </button>
    </li>
  );
};

const CloseButton = (props) => {
  return (
    <li className='close-btn'>
      <Link to='#' onClick={props.closeSidebar}>
        <CloseIcon style={{ color: "white", fontSize: 45 }} />
      </Link>
    </li>
  );
};

const BottomSection = () => {
  return (
    <div className='fb-en'>
      <Link
        to={{ pathname: "https://www.facebook.com/mongolianneurology/" }}
        target='_blank'>
        <FacebookIcon style={{ color: "white" }} className='fb-icon' />
      </Link>
      <Link to='/en'>EN</Link>
    </div>
  );
};

export default Navbar;
