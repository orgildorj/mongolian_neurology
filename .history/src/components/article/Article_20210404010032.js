/** @format */

import React, {useState} from "react";
import { useParams } from "react-router-dom";
import { fetchArticles } from "../../modules/news/NewsService";
import Config from "../../Config";

import commonStyles from "../Common.module.css";
import styles from "./Article.module.css";

import data from "../../data/demo_news.json";

const Article = () => {
  const { id } = useParams();
  const [articles, setArticles] = useState([]);

  if (articles.length === 0) {
    fetchArticles().then((data) => setArticles(data));
  }

  const article = getArticle(articles, id)
  

  return (
    <div className={commonStyles.content}>
      <h1 className={styles.title}>{article.Title}</h1>

        
      {/* <img src={`${Config.contentUrl}${image.url}`} /> */}

      <p>{article.text}</p>
    </div>
  );
};

export default Article;

const getArticle = (articles, id) => {
  for(var i = 0; i<articles.length; i++) {
    if(articles[i].id === id)
      return articles[i];
  }

  return null;
}