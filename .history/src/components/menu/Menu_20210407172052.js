/** @format */

import React from "react";
import styles from "./Menu.module.css";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
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
      <div className={styles.subMenuList}>
        <ul>
          <li>Удирдлага, бүтэц</li>
          <li>
            <Link to='/about/membership'> Гишүүнээр элсэх</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
