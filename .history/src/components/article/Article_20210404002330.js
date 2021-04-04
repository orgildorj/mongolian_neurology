/** @format */

import React, {useState} from "react";
import { useParams } from "react-router-dom";
import { fetchArticle } from "../../modules/article/ArticleService";
import Config from "../../Config";

import commonStyles from "../Common.module.css";
import styles from "./Article.module.css";

import data from "../../data/demo_news.json";

const Article = () => {
  const { id } = useParams();
  const [article, setArticle] = useState({});

  if (article === null) {
    fetchArticle(id).then((data) => setArticle(data));
  }

  return (
    <div className={commonStyles.content}>
      <h1 className={styles.title}>{article.title}</h1>

      <img src={`${Config.contentUrl}${article.Images[0].formats.medium.url}`} />

      <p>{article.text}</p>
    </div>
  );
};

export default Article;
