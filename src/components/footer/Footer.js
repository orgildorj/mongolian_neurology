/** @format */

import React from "react";

import styles from "./Footer.module.css";
import commonStyles from "../Common.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={commonStyles.content}>
        <span className={styles.copyright}>
          © 2014 Монголын неврологийн нийгэмлэг
        </span>
      </div>
    </div>
  );
}

export default Footer;
