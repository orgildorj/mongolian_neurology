/** @format */

import React, { useState, useEffect } from "react";
import { fetchContact } from "../../../modules/contact/ContactService";
import NormalContent from "./NormalContent";

function Contact() {
  const [article, setArticle] = useState({
    id: 0,
    Title: "",
    Text: "",
  });

  useEffect(() => {
    fetchContact().then((data) => {
      setArticle(data);
    });
  }, []);

  return (
    <NormalContent
      title={article["Title"]}
      text={article["Text"]}
      style={{ padding: 0 }}
    />
  );
}

export default Contact;
