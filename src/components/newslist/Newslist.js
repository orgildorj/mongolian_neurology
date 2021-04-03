/** @format */

import React from "react";
import { Link } from "react-router-dom";

import commonStyles from "../Common.module.css";
import styles from "./Newslist.module.css";

import data from "../../data/demo_news.json";

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
