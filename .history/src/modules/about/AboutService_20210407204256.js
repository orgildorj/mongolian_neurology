import Config from "../../Config";

export const fetchAbout = async () => {
  const response = await fetch(`${Config.contentUrl}/about`);
  return response.json();
};
