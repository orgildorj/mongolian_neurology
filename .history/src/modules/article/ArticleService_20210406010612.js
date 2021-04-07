import Config from "../../Config";

export const fetchArticle = async (id) => {
  const response = await fetch(`${Config.contentUrl}/articles/${id}`);
  const jsonFile = response.json();
  return jsonFile;
};
