/** @format */

import React from "react";
import Menu from "../menu/Menu";

import styles from "./Header.module.css";
import commonStyles from "../Common.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <div className={commonStyles.content}>
        <div className={styles.logoContainer}>
          <img src='assets/logo.png' />
        </div>
        <Menu />
      </div>
    </div>
  );
}

export default Header;
