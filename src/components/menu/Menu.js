/** @format */

import React, { useState } from "react";
import styles from "./Menu.module.css";
import { Link } from "react-router-dom";
import Home from "../home/Home";

const Menu = ({ showMenu, setShowMenu }) => {
  const clickHandler = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={styles.menuContainer}>
      <nav>
        <div>
          <Link to='/administration'>Удирдлага, бүтэц</Link>
        </div>
        <p>/</p>
        <div>
          <Link to='/membership'> Гишүүнээр элсэх</Link>
        </div>
        <p>/</p>
        <div>
          <Link to='/subgroups'>Дэд бүлгүүд</Link>
        </div>
        <p>/</p>
        <div>
          <Link to='/contact'>Холбоо барих</Link>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
