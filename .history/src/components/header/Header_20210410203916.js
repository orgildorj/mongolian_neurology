/** @format */

import React, { useState } from "react";
import Menu from "../menu/Menu";
import { Link } from "react-router-dom";

import styles from "./Header.module.css";
import commonStyles from "../Common.module.css";

function Header() {
  const [showMenu1, setShowMenu1] = useState(false);
  const [showMenu2, setShowMenu2] = useState(false);

  return (
    <>
      <div className={styles.header}>
        <div className={commonStyles.content}>
          <div className={styles.headerContainer}>
            <div className={styles.logoContainer}>
              <Link to='/'>
                <img src='http://localhost:3000/assets/logo.png' />
              </Link>
            </div>
            <Menu showMenu2={showMenu2} setShowMenu2={setShowMenu2} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
