/** @format */

import React from "react";
import styles from "./Menu.module.css";
import { Link } from "react-router-dom";

const Menu = () => {
  const subMenu = (
    <div>
      <ul>
        <li>Удирдлага, бүтэц</li>
        <li>
          <Link to='/about/membership'> Гишүүнээр элсэх</Link>
        </li>
      </ul>
    </div>
  );

  return (
    <div className={styles.menuContainer}>
      <div className={styles.menuList}>
        <ul>
          <li>
            <Link to='/'>Мэдээ</Link>
          </li>
          <li>
            <Link to='/about'>Нийгэмлэгийн тухай</Link>
            {subMenu}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
