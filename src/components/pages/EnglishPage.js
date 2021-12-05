/** @format */

import React, { useEffect, useState } from "react";
import { fetchEnglishPage } from "../../modules/englishPages/EnglishPagesService";
import ContentWithSideMenu from "../ContentWithSideMenu/ContentWithSideMenu";

function EnglishPage() {
  const [pages, setPages] = useState({
    id: 0,
    Title: "",
    Text: "",
    Image: {},
  });

  useEffect(() => {
    fetchEnglishPage().then((data) => {
      setPages(data);
    });
  }, []);

  return <ContentWithSideMenu siteData={pages} />;
}

export default EnglishPage;
