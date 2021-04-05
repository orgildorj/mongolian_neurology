/** @format */

import React from "react";
import { useParams } from "react-router-dom";
import { fetchArticle } from "../../modules/article/ArticleService";

import commonStyles from "../Common.module.css";
import styles from "./Article.module.css";

import data from "../../data/demo_news.json";

const Article = () => {
  const { id } = useParams();
  const [article, setArticle] = useState({});

  if (article === {}) {
    fetchArticles().then((data) => setArticle(data));
  }

  return (
    <div className={commonStyles.content}>
      <h1 className={styles.title}>{articleData.title}</h1>

      <img src={articleData.images[0].src} />

      <p>{articleData.text}</p>
    </div>
  );
};

export default Article;
