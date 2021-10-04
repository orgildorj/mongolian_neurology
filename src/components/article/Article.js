/** @format */

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchArticle } from "../../modules/article/ArticleService";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import ImageSlider from "./ImageSlider";

import "./Article.scss";

const Article = () => {
  const { id } = useParams();
  const [article, setArticle] = useState({
    id: 0,
    Title: "",
    Date: "",
    Text: "",
    Images: [],
  });

  useEffect(() => {
    if (article["id"] === 0) {
      fetchArticle(id).then((data) => {
        setArticle(data);
      });
    }
  }, []);

  const images = article["Images"];

  return (
    <div className='article-container'>
      <ImageSlider images={images} />

      <h1>{article["Title"]}</h1>
      <hr />
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {article["Text"]}
      </ReactMarkdown>
    </div>
  );
};

export default Article;
