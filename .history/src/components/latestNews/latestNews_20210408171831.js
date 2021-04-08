import React from "react";
import styles from "./latestNews.module.css";
import Config from "../../Config";
import { Link } from "react-router-dom";
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

export default ({ articles, latestArticle }) => {
  return (
    <div className={styles.latestNews}>
      <Carousel
        infinite
        centered
        keepDirectionWhenDragging
        autoPlay={4000}
        animationSpeed={500}>
        {articles.length
          ? articles.map(({ id, Title, Images }) => (
              <div>
                <div>
                  <img src={`${Config.contentUrl}${Images[0].url}`} />
                </div>
                <div>
                  <div className={styles.latestNewsTitle}>
                    <span>{Title}</span>
                    <div className={styles.continue}>
                      <Link key={id} to={`article/${id}`}>
                        <p style={{ paddingTop: "0.5rem" }}>Дэлгэрэнгүй</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          : ""}
      </Carousel>
    </div>
  );
};
