/** @format */

import Config from "../../Config";

export const fetchEnglishPage = async () => {
  const response = await fetch(`${Config.contentUrl}/english-pages`);
  return response.json();
};
