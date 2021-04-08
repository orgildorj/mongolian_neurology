import React, { useState } from "react";
import { fetchAdm } from "../../modules/administration/AdministrService";

export default ({ type }) => {
  const [contentData, setContentData] = useState({});
  fetchData(contentData, setContentData, type);

  return <div></div>;
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
