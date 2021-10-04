/** @format */

import Config from "../../Config";

export const fetchAchievement = async () => {
  const response = await fetch(`${Config.contentUrl}/achievement`);
  return response.json();
};
