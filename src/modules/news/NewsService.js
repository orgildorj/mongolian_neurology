import Config from "../../Config";

export const fetchArticles = async () => {
  const response = await fetch(`${Config.contentUrl}/articles`);
  return response.json();
};
