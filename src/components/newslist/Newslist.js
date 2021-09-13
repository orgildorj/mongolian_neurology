/**
 * /* eslint-disable import/no-anonymous-default-export
 *
 * @format
 */

/** @format */

import React from "react";
import { Link } from "react-router-dom";
import Config from "../../Config";

import styles from "./NewsList.module.css";

export default ({ articles }) => {
  return (
    <div className={styles.newslistContainer}>
      <ul>
        {articles.length
          ? articles
              .reverse()
              .map(({ id, Title, Images, published_at, Author }) => (
                <li key={id}>
                  <div className={styles.metadata}>
                    <div className={styles.details}>
                      <span>{Author}</span>
                      <span>{published_at.substring(0, 10)}</span>
                    </div>
                    <div className={styles.imageContainer}>
                      <img src='https://via.placeholder.com/150' />
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
              ))
          : ""}
      </ul>
    </div>
  );
};
