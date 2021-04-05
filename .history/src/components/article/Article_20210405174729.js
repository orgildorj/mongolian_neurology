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
    Date: null,
    Text: "",
    published_at: "",
    created_at: "",
    updated_at: "",
    Images: [],
  });

  if (article["id"] === "") {
    fetchArticle(id).then((data) => {
      setArticle(data["id"]);
      console.log(data);
    });
  }
  console.log(article);

  return <div>{article}</div>;
  // <div className={commonStyles.content}>
  //   <h1 className={styles.title}>{article.Title}</h1>

  //   {/* <img src={`${Config.contentUrl}${image.url}`} /> */}

  //   <p>{article.text}</p>
  // </div>
};

export default Article;