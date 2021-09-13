/** @format */

import React, { useState, useEffect } from "react";
import styles from "./latestNews.module.css";
import Config from "../../Config";
import { Link } from "react-router-dom";
import "@brainhubeu/react-carousel/lib/style.css";

export default ({ latestArticle }) => {
  return (
    <div className={styles.latestNews}>
      <div>
        <img src='https://via.placeholder.com/100' />
      </div>
      <div>
        <div className={styles.latestNewsTitle}>
          <span>{}</span>
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
