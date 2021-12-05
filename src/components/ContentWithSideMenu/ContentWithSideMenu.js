/** @format */

import React from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import $ from "jquery";
import "./ContentWithSideMenu.scss";

const ContentWithSideMenu = ({ siteData }) => {
  const clickHandler = (id) => {
    var position = $(`#${id}`).offset();
    window.scrollTo(0, position.top - 109.42623901367188);
  };

  return (
    <div className='content-with-side-menu-container'>
      <SideMenu siteData={siteData} clickHandler={clickHandler} />
      <div class='articles-container'>
        {siteData.length
          ? siteData.map(({ id, Title, Text }) => (
              <div className='sub-section' id={`${id}`}>
                <h1>{Title}</h1>
                <hr />
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {Text}
                </ReactMarkdown>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};

const SideMenu = ({ siteData, clickHandler }) => {
  return (
    <div class='side-menu'>
      <ul>
        {siteData.length
          ? siteData.map(({ id, Title }) => (
              <li>
                <Link to='#' onClick={() => clickHandler(id)}>
                  {Title}
                  {/* <button className='btn'></button> */}
                </Link>
              </li>
            ))
          : ""}
      </ul>
    </div>
  );
};

const NewsArticles = () => {
  return <div></div>;
};

export default ContentWithSideMenu;
