/** @format */

import React from "react";
import { Link } from "react-router-dom";

import commonStyles from "../Common.module.css";
import styles from "./Newslist.module.css";

import data from "../../data/demo_news.json";

const Newslist = () => (
  <div className={commonStyles.content}>
    <div className={styles.newslistContainer}>
      <ul>
        {data.map(({ id, title, text, date, images }) => (
          <li>
            <div className={styles.metadata}>
              <img src={images[0].src} />
            </div>

            <div className={styles.introduction}>
              <h3>
                <Link key={id} to={`article/${id}`}>
                  <span className={styles.headline}>{title}</span>
                  <span className={styles.subtitle}>{text.substr(20)}</span>
                </Link>
              </h3>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Newslist;
