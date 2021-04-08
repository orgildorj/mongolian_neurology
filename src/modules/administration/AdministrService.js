import Config from "../../Config";

export const fetchAdm = async (id) => {
  const response = await fetch(`${Config.contentUrl}/contact`);
  const jsonFile = response.json();
  return jsonFile;
};
