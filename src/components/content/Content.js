/** @format */

import React from "react";

import styles from "./Content.module.css";
import commonStyles from "../Common.module.css";
import Article from "../article/Article";

function Content(props) {
  var data = JSON.parse(props.source);

  return (
    <div className={styles.content}>
      <div className={commonStyles.content}>
        <Article data={data} />
      </div>
    </div>
  );
}

export default Content;
