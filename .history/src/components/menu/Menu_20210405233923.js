/** @format */

import React from "react";
import styles from "./Menu.module.css";
import { Link } from "react-router-dom";
import Menu_Layer_2 from "../menu_Layer_2/Menu_Layer_2";

const Menu = () => (
  <div className={styles.menuContainer}>
    <div className={styles.menuList}>
      <ul>
        <li>
          <Link to='/'>Мэдээ</Link>
        </li>
        <li>
          <Link to='/about'>Нийгэмлэгийн тухай</Link>
          <Menu_Layer_2 />
        </li>
      </ul>
    </div>
  </div>
);

export default Menu;
