/** @format */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Config from "../../Config";
import { fetchArticles } from "../../modules/news/NewsService";
import LatestNews from "../latestNews/latestNews";
import Newslist from "../newslist/Newslist";

import commonStyles from "../Common.module.css";
import styles from "./Home.module.css";

export default () => {
  return (
    <div className={commonStyles.content}>
      <LatestNews articles={articles} latestArticle={latestArticle} />
      <Newslist />
    </div>
  );
};
