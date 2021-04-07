/** @format */

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticle } from "../../modules/article/ArticleService";
import Config from "../../Config";
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import commonStyles from "../Common.module.css";
import styles from "./Article.module.css";

import data from "../../data/demo_news.json";

const Article = () => {
  const { id } = useParams();
  const [article, setArticle] = useState({
    id: 0,
    Title: "",
    Date: "",
    Text: "",
    Images: [],
  });

  if (article["id"] === 0) {
    fetchArticle(id).then((data) => {
      setArticle(data);
    });
  }

  const images = article["Images"];

  return (
    <div>
      <div className={commonStyles.content}>
        <h1 className={styles.title}>{article["Title"]}</h1>
      </div>
      <div className={styles.imageContainer} className={commonStyles.content}>
        <Carousel
          plugins={[
            "arrows",
            { resolve: slidesToShowPlugin, options: { numberOfSlides: 2 } },
          ]}>
          {images.length > 1
            ? images.map(({ url }) => (
                <img src={`${Config.contentUrl}${url}`} />
              ))
            : ""}
        </Carousel>
        {/* <img
          src={`${Config.contentUrl}${images.length ? images[0].url : ""}`}
          alt='image'
        />
         */}
      </div>
      <div className={styles.textContainer} className={commonStyles.content}>
        <p>{article["Text"]}</p>
      </div>
    </div>
  );
  // <div className={commonStyles.content}>
  //   <h1 className={styles.title}>{article.Title}</h1>

  //   {/* <img src={`${Config.contentUrl}${image.url}`} /> */}

  //   <p>{article.text}</p>
  // </div>
};

export default Article;
