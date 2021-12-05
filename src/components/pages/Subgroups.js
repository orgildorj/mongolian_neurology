/** @format */

import React, { useState, useEffect } from "react";
import { fetchGroups } from "../../modules/subgroups/SubgroupService";
import ContentWithSideMenu from "../ContentWithSideMenu/ContentWithSideMenu";

function Subgroups() {
  const [subgroups, setSubgroups] = useState([]);

  useEffect(() => {
    fetchGroups().then((data) => setSubgroups(data));
  }, []);

  return <ContentWithSideMenu siteData={subgroups} />;
}

export default Subgroups;
