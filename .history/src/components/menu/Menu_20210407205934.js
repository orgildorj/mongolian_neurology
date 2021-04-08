/** @format */

import React, { useState } from "react";
import styles from "./Menu.module.css";
import { Link } from "react-router-dom";

export default ({ show, setShow }) => {
  const clickHandler = () => {
    setShow(!show);
  };

  return (
    <>
      <div className={styles.menuContainer}>
        <div className={styles.menuList}>
          <ul>
            <li>
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
