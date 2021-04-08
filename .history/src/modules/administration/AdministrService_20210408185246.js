import Config from "../../Config";

export const fetchAdm = async () => {
  const response = await fetch(`${Config.contentUrl}/administration`);
  return response.json();
};
