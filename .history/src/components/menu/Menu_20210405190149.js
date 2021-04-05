/** @format */

import React from "react";
import styles from "./Menu.module.css";
import { Link } from "react-router-dom";

const Menu = () => (
  <div className={styles.menuContainer}>
    <div className={styles.menuList}>
      <ul>
        <li>
          <Link to='/'>Мэдээ</Link>
        </li>
        <li>
          <Link to='/about'>Нийгэмлэгийн тухай</Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Menu;
