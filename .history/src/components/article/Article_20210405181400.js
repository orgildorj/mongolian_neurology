/** @format */

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticle } from "../../modules/article/ArticleService";
import Config from "../../Config";

import commonStyles from "../Common.module.css";
import styles from "./Article.module.css";

import data from "../../data/demo_news.json";

const Article = () => {
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
  console.log(article["Images"]);

  return (
    <div className={commonStyles.content}>
      <div>
        <h1 className={styles.title}>{article["Title"]}</h1>
      </div>
      <div className={styles.imageContainer}>
        <img src={`${Config.contentUrl}${article["Images"][0].url}`} />
      </div>
      <div className={styles.textContainer}>
        <p>{article["Text"]}</p>
      </div>
    </div>
  );
  // <div className={commonStyles.content}>
  //   <h1 className={styles.title}>{article.Title}</h1>

  //   {/* <img src={`${Config.contentUrl}${image.url}`} /> */}

  //   <p>{article.text}</p>
  // </div>
};

export default Article;
