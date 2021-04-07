import Config from "../../Config";

export const fetchGroups = async () => {
  const response = await fetch(`${Config.contentUrl}/subgroups`);
  return response.json();
};
