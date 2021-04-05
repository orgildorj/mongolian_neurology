import Config from "../../Config";

export const fetchArticle = async (id) => {
  const response = await fetch(`${Config.contentUrl}/articles/${id}`);
  return response.json();
};