import Config from "../../Config";

export const fetchAbout = async () => {
  const response = await fetch(`${Config.contentUrl}/abouts`);
  return response.json();
};
