import React, { useState } from "react";
import { fetchAdm } from "../../modules/administration/AdministrService";

export default ({ type }) => {
  const [contentData, setContentData] = useState({});
  fetchData(contentData, setContentData, type);

  return <div className={commonStyles.contentData}></div>;
};

const fetchData = (contentData, setContentData, type) => {
  if (type === "administration") {
    if (contentData.length === 0) {
      fetchAdm().then((data) => setContentData(data));
    }
  }
};
