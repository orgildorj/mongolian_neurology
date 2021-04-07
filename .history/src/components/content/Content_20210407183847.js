/** @format */

import React, { useState } from "react";
import { fetchMemInfo } from "../../modules/membership_info/MembershipService";

import commonStyles from "../Common.module.css";

function Content({ type }) {
  const [contentData, setContentData] = useState([]);

  if (type === "membership_info") {
    if (contentData.length === 0) {
      fetchMemInfo().then((data) => setContentData(data));
    }
  }

  return (
    <div className={commonStyles.content}>
      {contentData.length
        ? contentData.map(({ Title }) => <div>{Title}</div>)
        : ""}
    </div>
  );
}

export default Content;
