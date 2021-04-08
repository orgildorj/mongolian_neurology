import React, { useState } from "react";
import { fetchAdm } from "../../modules/administration/AdministrService";

import commonStyles from "../Common.module.css";
import styles from "./SingleContent.module.css";

export default ({ type }) => {
  const [contentData, setContentData] = useState({
    id: 0,
    Title: "",
    Text: "",
  });
  fetchData(contentData, setContentData, type);

  return (
    <div className={commonStyles.content}>
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          {contentData.length
            ? contentData.map(({ id, Title, Text }) => (
                <div className={styles.subSection}>
                  <div className={styles.titleContainer} id={`${id}`}>
                    <h1>{Title}</h1>
                  </div>
                  <div className={styles.textContainer}>
                    <p>{Text}</p>
                  </div>
                </div>
              ))
            : ""}
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
