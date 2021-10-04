/** @format */

import Config from "../../Config";

export const fetchMedOrganizations = async () => {
  const response = await fetch(`${Config.contentUrl}/medical-organizations`);
  return response.json();
};
