/** @format */

import React from "react";
import { fetchMemInfo } from "../../modules/membership_info/MembershipService"

import commonStyles from "../Common.module.css";

function Content({ type }) {
  const contentData;

  if (type === "membership_info")
    contentData = 

  return <div className={commonStyles.content}>Content</div>;
}

export default Content;
