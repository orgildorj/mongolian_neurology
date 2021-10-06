/** @format */

import React, { useEffect, useState } from "react";

import { fetchArticles } from "../../modules/news/NewsService";
import ReactPaginate from "react-paginate";
import Pagination from "./Pagination";
import Posts from "./Posts";
import "./News.scss";
import { Route, useParams } from "react-router";
import Config from "../../Config";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";

const News = () => {
  const [posts, setPosts] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    fetchArticles().then((data) => {
      setPosts(data.reverse());
    });
  }, []);

  const postsPerPage = 5;
  const pagesVisited = pageNumber * postsPerPage;

  const pageCount = Math.ceil(posts.length / postsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
    window.scrollTo(0, 0);
  };

  const displayPosts = posts
    .slice(pagesVisited, pagesVisited + postsPerPage)
    .map((post) => {
      return (
        <li key={post.id}>
          <div class='image-container'>
            <img
              src={
                Config.contentUrl + post.Images[0]["formats"]["small"]["url"]
              }
              alt=''
            />
          </div>
          <div className='intro-container'>
            <h4>{post.Title}</h4>
            <ReactMarkdown>{post.Text.substr(0, 150) + "..."}</ReactMarkdown>
            <Link key={post.id} to={`article/${post.id}`}>
              Дэлгэрэнгүй
            </Link>
          </div>
        </li>
      );
    });

  return (
    <div className='news-container'>
      <ul className='posts-container'>{displayPosts}</ul>
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"pagination"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
};

export default News;
