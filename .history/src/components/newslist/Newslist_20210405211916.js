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

  const latestArticle = articles.length
    ? articles[articles.length - 1]
    : { Title: "", Images: [{ url: "" }] };

  return (
    <div className={commonStyles.content}>
      <div className={styles.latestNews}>
        <div>
          <img src={`${Config.contentUrl}${latestArticle["Images"][0].url}`} />
        </div>
        <div>
          <div className={styles.latestNewsTitle}>
            <span>{latestArticle["Title"]}</span>
            <div>
              <Link
                key={latestArticle["id"]}
                to={`article/${latestArticle["id"]}`}>
                <p>Дэлгэрэнгүй</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
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

                    <div className={styles.intro}>
                      <div className={styles.introTitle}>
                        <Link key={id} to={`article/${id}`}>
                          <p className={styles.headline}>{Title}</p>
                        </Link>
                      </div>
                      <div className={styles.continue}>
                        <Link key={id} to={`article/${id}`}>
                          <p>Дэлгэрэнгүй</p>
                        </Link>
                      </div>
                    </div>
                  </li>
                )
              )
            : ""}
        </ul>
      </div>
    </div>
  );
};
