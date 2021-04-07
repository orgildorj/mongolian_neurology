/** @format */

import React from "react";
import Menu from "../menu/Menu";
import Menu_Layer_2 from "../menu_Layer_2/Menu_Layer_2";

import styles from "./Header.module.css";
import commonStyles from "../Common.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <div className={commonStyles.content}>
        <div className={styles.headerContainer}>
          <div className={styles.logoContainer}>
            <img src='http://localhost:3000/assets/logo.png' />
          </div>
          <Menu />
          <Menu_Layer_2 />
        </div>
      </div>
    </div>
  );
}

export default Header;
