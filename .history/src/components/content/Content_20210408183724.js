/** @format */

import React, { useState } from "react";
import { fetchMemInfo } from "../../modules/membership_info/MembershipService";
import { fetchGroups } from "../../modules/subgroups/SubgroupService";

import commonStyles from "../Common.module.css";
import styles from "./Content.module.css";

function Content({ type, hasSubMenu }) {
  const [contentData, setContentData] = useState([]);

  if (type === "membership_info") {
    if (contentData.length === 0) {
      fetchMemInfo().then((data) => setContentData(data));
    }
  } else if (type === "subgroups") {
    if (contentData.length === 0) {
      fetchGroups().then((data) => setContentData(data));
    }
  }

  var subMenu;

  if (hasSubMenu) {
    subMenu = (
      <div className={styles.subMenu}>
        <ul style={{ padding: "none" }}>
          {contentData.length
            ? contentData.map(({ id, Title }) => (
                <li onClick={() => window.location.replace(`#${id}`)}>
                  {Title}
                </li>
              ))
            : ""}
        </ul>
      </div>
    );
  }

  return (
    <div className={commonStyles.content}>
      <div className={styles.contentContainer}>
        {hasSubMenu ? subMenu : ""}
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
}

export default Content;
