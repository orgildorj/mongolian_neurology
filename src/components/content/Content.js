/** @format */

import React from "react";

import styles from "./Content.module.css";
import commonStyles from "../Common.module.css";

function Content() {
  return (
    <div className={styles.content}>
      <div className={commonStyles.content}>Content</div>
    </div>
  );
}

export default Content;
