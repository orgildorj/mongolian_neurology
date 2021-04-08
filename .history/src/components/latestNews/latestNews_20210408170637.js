import React from "react";
import styles from "./latestNews.module.css";

export default ({ articles }) => {
  return (
    <div className={styles.latestNews}>
      <div>
        <img src={`${Config.contentUrl}${latestArticle["Images"][0].url}`} />
      </div>
      <div>
        <div className={styles.latestNewsTitle}>
          <span>{latestArticle["Title"]}</span>
          <div className={styles.continue}>
            <Link
              key={latestArticle["id"]}
              to={`article/${latestArticle["id"]}`}>
              <p style={{ paddingTop: "0.5rem" }}>Дэлгэрэнгүй</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
