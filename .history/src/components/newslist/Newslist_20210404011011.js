/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Config from "../../Config";
import { fetchArticles } from "../../modules/news/NewsService";

import commonStyles from "../Common.module.css";
import styles from "./Newslist.module.css";

export default () => {
  const [articles, setArticles] = useState([]);

  if (articles.length === 0) {
    fetchArticles().then((data) => setArticles(data));
  }

  return (
    
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
                          {Text.substr(0, 20)}
                        </span>
                      </Link>
                    </h3>
                    </div>
                  
                </li>
              ))
            : ""}
        </ul>
      </div>
    
  );
};
