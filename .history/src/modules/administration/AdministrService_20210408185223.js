import Config from "../../Config";

export const fetchAdm = async (id) => {
  const response = await fetch(`${Config.contentUrl}/administration`);
  return response.json();
};
