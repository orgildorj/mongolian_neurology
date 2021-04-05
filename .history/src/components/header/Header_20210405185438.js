/** @format */

import React from "react";
import Menu from "../menu/Menu";

import styles from "./Header.module.css";
import commonStyles from "../Common.module.css";

function Header() {
  return (
    
      <div className={commonStyles.content}>
        <div className={styles.}>
          <div className={styles.logoContainer}>
            <img src='http://localhost:3000/assets/logo.png' />
          </div>
          <Menu />
        </div>
      </div>
    
  );
}

export default Header;
