/** @format */

import React, { useState, useEffect } from "react";

import { fetchArticles } from "../../modules/news/NewsService";
import LatestNews from "./latestNews";
import Newslist from "./Newslist";

import "./Home.scss";

function Home() {
  const [articles, setArticles] = useState([]);
  const [latestArticle, setLatestArticle] = useState({
    id: 0,
    Title: "",
    Text: "",
    Images: [],
  });

  useEffect(() => {
    if (articles.length === 0) {
      fetchArticles().then((data) => {
        setLatestArticle(data[data.length - 1]);
        setArticles(data.reverse().splice(1, 3));
        console.log(data.reverse().splice(1, 4));
      });
    }
  }, []);

  return (
    <div className='home-container'>
      <LatestNews latestArticle={latestArticle} />
      <Newslist articles={articles} setArticles={setArticles} />
    </div>
  );
}

export default Home;
