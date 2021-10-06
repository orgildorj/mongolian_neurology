/** @format */

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import { colors } from "@material-ui/core";

const Pagination = ({ currentPage, postsPerPage, totalPosts }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const calculateLink = (number) => {
    if (number === 1) {
      return "/news";
    } else {
      return "/news/page/" + number;
    }
  };

  useEffect(() => {
    $(".pagination-item." + currentPage).addClass("active");
  }, [currentPage]);

  return (
    <ul className='pagination'>
      {pageNumbers.map((number) => (
        <li key={number}>
          <Link
            to={() => calculateLink(number)}
            className={currentPage === number ? "active" : ""}>
            {number}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
