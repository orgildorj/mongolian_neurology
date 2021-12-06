/** @format */

import React, { useEffect, useState } from "react";
import { fetchMemInfo } from "../../modules/membership_info/MembershipService";
import ContentWithSideMenu from "../ContentWithSideMenu/ContentWithSideMenu";

function Membership() {
  const [membershipInfos, setMembershipInfos] = useState([]);

  useEffect(() => {
    fetchMemInfo().then((data) => setMembershipInfos(data));
  }, []);

  return <ContentWithSideMenu dataList={membershipInfos} />;
}

export default Membership;
