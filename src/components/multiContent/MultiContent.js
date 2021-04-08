/** @format */

import React, { useState } from "react";
import { fetchMemInfo } from "../../modules/membership_info/MembershipService";
import { fetchGroups } from "../../modules/subgroups/SubgroupService";

import commonStyles from "../Common.module.css";
import styles from "./MultiContent.module.css";

export default ({ type }) => {
  const [contentData, setContentData] = useState([]);

  fetchData(contentData, setContentData, type);

  return (
    <div className={commonStyles.content}>
      <div className={styles.contentContainer}>
        <div className={styles.subMenu}>
          <ul>
            {contentData.length
              ? contentData.map(({ id, Title }) => (
                  <li onClick={() => window.location.replace(`#${id}`)}>
                    {Title}
                  </li>
                ))
              : ""}
          </ul>
        </div>
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
  if (type === "membership_info") {
    if (contentData.length === 0) {
      fetchMemInfo().then((data) => setContentData(data));
    }
  } else if (type === "subgroups") {
    if (contentData.length === 0) {
      fetchGroups().then((data) => setContentData(data));
    }
  }
};
