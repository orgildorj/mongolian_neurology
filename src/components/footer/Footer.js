/** @format */

import React, { useState, useEffect } from "react";
import { fetchContact } from "../../modules/contact/ContactService";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import NormalContent from "../pages/NormalContent/NormalContent";

import "./Footer.scss";

function Footer() {
  const [contact, setContact] = useState({
    id: 0,
    Title: "",
    Text: "",
  });

  useEffect(() => {
    fetchContact().then((data) => {
      setContact(data);
    });
  }, []);

  return (
    <div className='footer-container'>
      <div className='content-container'>
        <h4>{contact.Title}</h4>

        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {contact.Text}
        </ReactMarkdown>
      </div>
      <hr />
      <div className='copyright-container'>
        <span>© 2014 Монголын неврологийн нийгэмлэг</span>
      </div>
    </div>
  );
}

export default Footer;

// const [article, setArticle] = useState({
//   id: 0,
//   Title: "",
//   Text: "",
// });

// useEffect(() => {
//   fetchContact().then((data) => {
//     setArticle(data);
//   });
// }, []);

// return (
//   <NormalContent
//     title={article["Title"]}
//     text={article["Text"]}
//     style={{ padding: 0 }}
//   />
// );
