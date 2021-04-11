import React, { useState, useEffect } from "react";
import NewsList from "../newsList/NewsList";
import { fetchArticles } from "../../modules/news/NewsService";

export default () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    if (articles.length === 0) {
      fetchArticles().then((data) => setArticles(data));
    }
  });

  return (
    <div>
      <NewsList articles={articles} setArticles={setArticles} />
    </div>
  );
};
