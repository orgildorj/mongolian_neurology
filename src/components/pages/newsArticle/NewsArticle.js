/** @format */

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticle } from "../../../modules/article/ArticleService";
import Article from "../../Article/Article";
import "./NewsArticle.scss";

const NewsArticle = () => {
  const { id } = useParams();
  const [article, setArticle] = useState({
    id: 0,
    Title: "",
    Date: "",
    Text: "",
    Images: [],
  });

  if (article["id"] === 0) {
    fetchArticle(id).then((data) => {
      setArticle(data);
    });
  }

  console.log(article);

  return (
    <div className='news-article'>
      <Article articleData={article} />
    </div>
  );
};

export default NewsArticle;
