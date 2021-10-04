/** @format */

import React, { useState, useEffect } from "react";
import { fetchAdm } from "../../../modules/administration/AdministrService";
import NormalContent from "./NormalContent";

function Administration() {
  const [article, setArticle] = useState({
    id: 0,
    Title: "",
    Text: "",
  });

  useEffect(() => {
    fetchAdm().then((data) => {
      setArticle(data);
    });
  }, []);

  return <NormalContent title={article["Title"]} text={article["Text"]} />;
}

export default Administration;
