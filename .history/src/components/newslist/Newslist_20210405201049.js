/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Config from "../../Config";
import { fetchArticles } from "../../modules/news/NewsService";
import SlideShow from "../slideShow/SlideShow";

import commonStyles from "../Common.module.css";
import styles from "./Newslist.module.css";

export default () => {
  const [articles, setArticles] = useState([]);

  if (articles.length === 0) {
    fetchArticles().then((data) => setArticles(data));
  }

  return (
    <>
      <div className={styles.mainNews}>{articles[0]["Title"]}</div>
      <div className={styles.newslistContainer}>
        <ul>
          {articles.length
            ? articles.map(
                ({ id, Title, Text, Date, Images, published_at, Author }) => (
                  <li key={id}>
                    <div className={styles.metadata}>
                      <div className={styles.details}>
                        <span>{Author}</span>
                        <span>{published_at.substring(0, 10)}</span>
                      </div>
                      <div className={styles.imageContainer}>
                        <img
                          src={`${Config.contentUrl}${Images[0].formats.thumbnail.url}`}
                        />
                      </div>
                    </div>

                    <div className={styles.introduction}>
                      <div>
                        <Link key={id} to={`article/${id}`}>
                          <p className={styles.headline}>{Title}</p>
                        </Link>
                      </div>
                    </div>
                  </li>
                )
              )
            : ""}
        </ul>
      </div>
    </>
  );
};
