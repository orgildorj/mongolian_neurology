/** @format */

import React, { useState } from "react";
import styles from "./Menu.module.css";
import { Link } from "react-router-dom";

export default ({ clicked, setClicked }) => {
  const clickHandler = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <div className={styles.menuContainer}>
        <div className={styles.menuList}>
          <ul>
            <li onMouseEnter={clickHandler}>
              <Link to='/'>Мэдээ</Link>
            </li>
            <li onMouseEnter={clickHandler}>
              <Link to='/about'>Нийгэмлэгийн тухай</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
