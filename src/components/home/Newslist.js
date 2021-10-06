/** @format */

import React from "react";
import { Link } from "react-router-dom";
import Config from "../../Config";
import ReactMarkdown from "react-markdown";

const Newslist = ({ articles }) => {
  return (
    <div className='newslist-container'>
      <ul>
        {articles.length
          ? articles
              .reverse()
              .map(({ id, Title, Text, Images, published_at, Author }) => (
                <li key={id}>
                  <div class='image-container'>
                    <img
                      src={
                        Config.contentUrl + Images[0]["formats"]["small"]["url"]
                      }
                      alt=''
                    />
                  </div>

                  <div className='intro-container'>
                    <h4>{Title}</h4>
                    <ReactMarkdown>{Text.substr(0, 150) + "..."}</ReactMarkdown>

                    <Link key={id} to={`article/${id}`}>
                      Дэлгэрэнгүй
                    </Link>
                  </div>
                </li>
              ))
          : ""}
        {/* <li className='continue'>
          <Link to='/news'>Үргэлжлэл</Link>
        </li> */}
      </ul>
    </div>
  );
};

export default Newslist;
