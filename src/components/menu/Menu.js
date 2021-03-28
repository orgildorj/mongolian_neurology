/** @format */

import React from "react";
import styles from "./Menu.module.css";
import { Switch, Route, Link } from "react-router-dom";
import Contact from "../contact/Contact";

function Menu() {
  return (
    <div className={styles.menuContainer}>
      <div className={styles.menuList}>
        <ul>
          <li>
            <Link to='/'>Нүүр</Link>
          </li>
          <li>
            <Link to='/about'>Бидний тухай</Link>
          </li>
          <li>
            <Link to='/news'>Мэдээ</Link>
          </li>
          <li>
            <Link to='/contact'>Холбоо барих</Link>
          </li>
        </ul>
      </div>
      <div className={styles.enMenu}></div>
    </div>
  );
}

export default Menu;
