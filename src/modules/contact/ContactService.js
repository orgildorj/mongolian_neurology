/** @format */

import Config from "../../Config";

export const fetchContact = async () => {
  const response = await fetch(`${Config.contentUrl}/contact`);
  return response.json();
};
