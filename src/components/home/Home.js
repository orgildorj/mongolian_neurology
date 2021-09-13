/**
 * /* eslint-disable import/no-anonymous-default-export
 *
 * @format
 */

/** @format */

import React, { useState, useEffect } from "react";

import { fetchArticles } from "../../modules/news/NewsService";
import LatestNews from "../latestNews/latestNews";
import NewsList from "../newsList/NewsList";

import commonStyles from "../Common.module.css";
import styles from "./Home.module.css";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [latestArticle, setLatestArticle] = useState({
    id: 0,
    Title: "",
    Text: "",
  });

  useEffect(() => {
    if (articles.length === 0) {
      fetchArticles().then((data) => {
        setArticles(data);
        setLatestArticle(data[data.length - 1]);
      });
    }
  });

  return (
    <div className={commonStyles.content}>
      <LatestNews latestArticle={latestArticle} />
      <NewsList articles={articles} setArticles={setArticles} />
    </div>
  );
};

export default Home;
