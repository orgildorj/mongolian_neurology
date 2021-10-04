/** @format */

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import CloseIcon from "@material-ui/icons/Close";
import { AboutData, InfoData, ContactData } from "./MenuData";
import $ from "jquery";
import Dropdown from "./Dropdown";
import "./Navbar.scss";

const Navbar = (props) => {
  const [openA, setOpenA] = useState(false);
  const [openB, setOpenB] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    if (pathname.startsWith("/about")) {
      setOpenA(true);
      setOpenB(false);
      $(".nav-item.about > button").css("border-bottom", "solid 3px red");
      $(".nav-item.info > button").css("border-bottom", "none");
    } else if (pathname.startsWith("/info")) {
      setOpenA(false);
      setOpenB(true);
      $(".nav-item.info > button").css("border-bottom", "solid 3px red");
      $(".nav-item.about > button").css("border-bottom", "none");
    } else {
      setOpenA(false);
      setOpenB(false);
      $(".nav-item.about > button").css("border-bottom", "none");
      $(".nav-item.info > button").css("border-bottom", "none");
    }
  }, [location]);

  return (
    <nav class='navbar' id='navbar'>
      <ul className='main-menu'>
        <li className='close-btn'>
          <Link to='#' onClick={props.closeSidebar}>
            <CloseIcon style={{ color: "white", fontSize: 45 }} />
          </Link>
        </li>

        <NavItem data={AboutData} open={openA} />
        <NavItem data={InfoData} open={openB} />
        <NavItem data={ContactData} />
      </ul>
    </nav>
  );
};

const NavItem = (props) => {
  const { type, title, path, items } = props.data;

  return (
    <li className={"nav-item " + type}>
      <button>
        <Link to={path}>{title}</Link>
      </button>

      {items.length ? (
        <Dropdown type={type} items={items} open={props.open} />
      ) : (
        ""
      )}
    </li>
  );
};

export default Navbar;
