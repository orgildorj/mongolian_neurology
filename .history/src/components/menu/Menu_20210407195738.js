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
            <li>
              <Link to='/'>Мэдээ</Link>
            </li>
            <li>
              <button onClick={clickHandler}>Нийгэмлэгийн тухай</button>
              {clicked ? <SecondMenu /> : ""}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
