/** @format */

import Config from "../../Config";

export const fetchPartners = async () => {
  const response = await fetch(`${Config.contentUrl}/partners`);
  return response.json();
};
