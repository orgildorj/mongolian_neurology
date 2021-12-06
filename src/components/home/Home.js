/** @format */

import React, { useState, useEffect } from "react";
import { fetchArticles } from "../../modules/news/NewsService";
import Slider from "../Slider/Slider";
import "./Home.scss";

function Home() {
  const [articles, setArticles] = useState([]);
  // const [latestArticle, setLatestArticle] = useState({
  //   id: 0,
  //   Title: "",
  //   Text: "",
  //   Images: [],
  // });

  if (articles.length === 0) {
    fetchArticles().then((data) => {
      setArticles(data);
    });
  }

  return (
    <div className='home-container'>
      <Slider slideData={[...articles].reverse().slice(0, 5)} />
    </div>
  );
}

export default Home;
