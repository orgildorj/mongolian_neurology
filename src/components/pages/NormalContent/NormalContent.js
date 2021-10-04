/** @format */

import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "./NormalContent.scss";

const NormalContent = ({ title, text }) => {
  return (
    <div className='normalContent-container'>
      <h1>{title}</h1>
      <hr />
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{text}</ReactMarkdown>
    </div>
  );
};

export default NormalContent;
