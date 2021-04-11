import Config from "../../Config";

export const fetchForeignAss = async () => {
  const response = await fetch(`${Config.contentUrl}/foreign-assemblies`);
  return response.json();
};
