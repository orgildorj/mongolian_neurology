/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Config from "../../Config";
import { fetchArticles } from "../../modules/news/NewsService";

import commonStyles from "../Common.module.css";
import styles from "./Newslist.module.css";

export default () => {
  const [articles, setArticles] = useState([]);

<<<<<<< HEAD
const Newslist = () => (
  <div className={commonStyles.content}>
    <div className={styles.newslistContainer}>
      {data.map(({ id, title, text, date, images }) =>
        NewsSection(id, title, text, date, images)
      )}
    </div>
  </div>
);

const NewsSection = (id, title, text, date, images) => (
  <div className={styles.newsSection}>
    <div className={styles.header}>
      <Link key={id} to={`article/${id}`}>
        <span className={styles.headline}>{title}</span>
      </Link>
    </div>
    <div className={styles.pic}>
      <figure>
        <img src={images[0].src} />
        <figcaption>
          <date>{date}</date>
        </figcaption>
      </figure>
    </div>
    <div className={styles.introduction}>
      <span className={styles.subtitle}>{text}</span>
    </div>
  </div>

  /* <div className={styles.newsSection}>
    <div className={styles.metadata}>
      <img src={images[0].src} />
    </div>

    <div className={styles.introduction}>
      <div>
        <Link key={id} to={`article/${id}`}>
          <p>
            <span className={styles.headline}>{title}</span>
            <span className={styles.subtitle}>{text}</span>
          </p>
        </Link>
      </div>
    </div>
  </div> */
);

export default Newslist;
=======
  if (articles.length === 0) {
    fetchArticles().then((data) => setArticles(data));
  }

  return (
    <div className={commonStyles.content}>
      <div className={styles.newslistContainer}>
        <ul>
          {articles.length
            ? articles.map(({ id, Title, Text, Date, Images }) => (
                <li key={id}>
                  <div className={styles.metadata}>
                    <img
                      src={`${Config.contentUrl}${Images[0].formats.thumbnail.url}`}
                    />
                  </div>

                  <div className={styles.introduction}>
                    <h3>
                      <Link key={id} to={`article/${id}`}>
                        <span className={styles.headline}>{Title}</span>
                        <span className={styles.subtitle}>
                          {Text.substr(20)}
                        </span>
                      </Link>
                    </h3>
                  </div>
                </li>
              ))
            : ""}
        </ul>
      </div>
    </div>
  );
};
>>>>>>> 3e50f5aeafed8f5947a76d183eac141a1b0efa28
