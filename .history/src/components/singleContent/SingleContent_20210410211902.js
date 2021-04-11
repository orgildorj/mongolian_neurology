import React, { useState, useEffect } from "react";
import { fetchAdm } from "../../modules/administration/AdministrService";
import { fetchForeignAss } from "../../modules/foreign_assemblies/ForeignAssService";

import commonStyles from "../Common.module.css";
import styles from "./SingleContent.module.css";

export default ({ type }) => {
  const [contentData, setContentData] = useState({
    id: 0,
    Title: "",
    Text: "",
  });

  useEffect(() => {
    fetchData(contentData, setContentData, type);
  }, []);

  return (
    <div className={commonStyles.content}>
      <div className={styles.contentContainer}>
        <div className={styles.titleContainer}>
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
  if (contentData["id"] === 0) {
    if (type === "administration") {
      fetchAdm().then((data) => {
        setContentData(data);
      });
    } else if (type === "foreign-assemblies") {
      fetchForeignAss().then((data) => {
        setContentData(data);
      });
    }
  }
};
