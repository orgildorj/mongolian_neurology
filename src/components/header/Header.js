/** @format */

import React, { useState } from "react";
import Menu from "../menu/Menu";
import { Link } from "react-router-dom";

import styles from "./Header.module.css";
import commonStyles from "../Common.module.css";

function Header() {
  return (
    <div className={styles.background}>
      <div className={commonStyles.content}>
        <div className={styles.headerContainer}>
          <div className={styles.logoContainer}>
            <Link to='/'>
              <img src='http://localhost:3000/assets/logo.png' />
            </Link>
          </div>
          <div className={styles.menu}>
            <Menu />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
