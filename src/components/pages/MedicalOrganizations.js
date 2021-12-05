/** @format */

import React, { useEffect, useState } from "react";
import { fetchMedOrganizations } from "../../modules/medical_organizations/MedicalOrganizationsService";
import ContentWithSideMenu from "../ContentWithSideMenu/ContentWithSideMenu";

function MedicalOrganizations() {
  const [organizations, setOrganizations] = useState({
    id: 0,
    Title: "",
    Text: "",
  });

  useEffect(() => {
    fetchMedOrganizations().then((data) => {
      setOrganizations(data);
    });
  }, []);

  return <ContentWithSideMenu siteData={organizations} />;
}

export default MedicalOrganizations;
