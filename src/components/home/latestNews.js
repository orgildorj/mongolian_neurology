/** @format */

import React, { useState, useEffect } from "react";
import Config from "../../Config";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const LatestNews = ({ latestArticle }) => {
  return (
    <div className='latestNews-container'>
      {latestArticle["Images"].length ? (
        <img
          src={
            Config.contentUrl +
            latestArticle["Images"][0]["formats"]["large"]["url"]
          }
          alt='Place holder'
        />
      ) : (
        ""
      )}
      <h1>Мэдрэлийн мэргэшлийн зэрэг горилогчдод - 2021</h1>
      <ReactMarkdown>
        {latestArticle["Text"].substr(0, 200) + "..."}
      </ReactMarkdown>
      <Link to={`article/${latestArticle["id"]}`}>
        <span>Дэлгэрэнгүй</span>
      </Link>
    </div>
  );
};

export default LatestNews;
