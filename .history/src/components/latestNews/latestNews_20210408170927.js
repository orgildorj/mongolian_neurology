import React from "react";
import styles from "./latestNews.module.css";
import Config from "../../Config";
import { Link } from "react-router-dom";
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

export default ({ articles, latestArticle }) => {
  return (
    <div className={styles.latestNews}>
      <Carousel>
        {articles.length ? articles.map(() => <div></div>) : ""}
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
      </Carousel>
    </div>
  );
};
