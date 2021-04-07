/** @format */

import React from "react";
import { fetchMemInfo } from "../../modules/membership_info/MembershipService";

import commonStyles from "../Common.module.css";

function Content({ type }) {
  const [contentData, setContentData] = useState([]);

  if (type === "membership_info") {
    if (contentData.length === 0)
      fetchMemInfo().then((data) => setContentData(data));
  }
  return <div className={commonStyles.content}>Content</div>;
}

export default Content;
