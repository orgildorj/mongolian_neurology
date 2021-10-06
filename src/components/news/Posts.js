/** @format */

import React from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import Config from "../../Config";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className='posts-container'>
      {posts.map(({ id, Title, Text, Images, published_at, Author }) => (
        <li key={id}>
          <div class='image-container'>
            <img
              src={Config.contentUrl + Images[0]["formats"]["small"]["url"]}
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
      ))}
    </ul>
  );
};

export default Posts;
