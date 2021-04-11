/** @format */

import React, { useState, useEffect } from "react";

import { fetchArticles } from "../../modules/news/NewsService";
import LatestNews from "../latestNews/latestNews";
import NewsList from "../newsList/NewsList";

import commonStyles from "../Common.module.css";
import styles from "./Home.module.css";

export default () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    if (articles.length === 0) {
      fetchArticles().then((data) => setArticles(data));
    }
  });

  return (
    <div className={commonStyles.content}>
      <LatestNews articles={articles} />
      <NewsList articles={articles} setArticles={setArticles} />
    </div>
  );
};
