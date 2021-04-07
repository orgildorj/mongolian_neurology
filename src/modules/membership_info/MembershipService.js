import Config from "../../Config";

export const fetchMemInfo = async () => {
  const response = await fetch(`${Config.contentUrl}/membership-infos`);
  return response.json();
};
