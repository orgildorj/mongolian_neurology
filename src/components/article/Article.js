import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import ImageSlider from "./ImageSlider";

const Article = ({ articleData }) => {
  if (articleData === undefined) return <div></div>;
  const { Title, Text, Images } = articleData;

  return (
    <div className='article-container'>
      <ImageSlider images={Images} />
      <h1>{Title}</h1>
      <hr />
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{Text}</ReactMarkdown>
    </div>
  );
};

export default Article;
