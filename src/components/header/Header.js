/** @format */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import Navbar from "./Navbar";
import { gsap } from "gsap";
import FacebookIcon from "@material-ui/icons/Facebook";
import "./Header.scss";

function Header() {
  const [sidebar, setSidebar] = useState(false);

  const clickHandler = () => {
    setSidebar(!sidebar);
  };

  useEffect(() => {
    manageSideBar(sidebar);
  }, [sidebar]);

  return (
    <div className='header'>
      <div className='logo-container'>
        <Link to='/'>
          <img src='http://localhost:3000/assets/logo.png' alt='logo' />
        </Link>
      </div>
      <div class='navigation'>
        <Link className='menu-btn' id='menu-btn' to='#' onClick={clickHandler}>
          <MenuIcon style={{ color: "white", fontSize: 45 }} />
        </Link>
        <Navbar closeSidebar={clickHandler} />
      </div>
      <div className='top-right'>
        <Link
          to={{ pathname: "https://www.facebook.com/mongolianneurology/" }}
          target='_blank'>
          <FacebookIcon style={{ color: "white" }} className='fb-icon' />
        </Link>
        <Link to='/en'>EN</Link>
      </div>
    </div>
  );
}

function manageSideBar(sidebar) {
  if (sidebar) {
    gsap.to(".navbar", {
      duration: 0.35,
      right: "0%",
      ease: "power1.inOut",
    });
  } else {
    gsap.to(".navbar", {
      duration: 0.35,
      right: "-100%",
      ease: "power1.inOut",
    });
  }
}

export default Header;
