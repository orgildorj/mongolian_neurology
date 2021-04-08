import React, { useState } from "react";
import { fetchAdm } from "../../modules/administration/AdministrService";

import commonStyles from "../Common.module.css";
import styles from "./SingleContent.module.css";

export default ({ type }) => {
  const [contentData, setContentData] = useState({
    Title: "",
    Text: "",
  });
  fetchData(contentData, setContentData, type);

  return (
    <div className={commonStyles.content}>
      <div className={styles.contentContainer}>
        <div className={styles.titleContainer} id={`${id}`}>
          <h1>{contentData["Title"]}</h1>
        </div>
        <div className={styles.textContainer}>
          <p>{contentData["Text"]}</p>
        </div>
      </div>
    </div>
  );
};

const fetchData = (contentData, setContentData, type) => {
  if (type === "administration") {
    if (contentData.length === 0) {
      fetchAdm().then((data) => setContentData(data));
    }
  }
};
