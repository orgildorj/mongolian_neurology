import React, { useEffect, useState } from "react";
import { fetchAbout } from "../../modules/about/AboutService";
import ContentWithSideMenu from "../ContentWithSideMenu/ContentWithSideMenu";

function About() {
  const [pages, setPages] = useState({
    id: 0,
    Title: "",
    Text: "",
    Images: {},
  });

  useEffect(() => {
    fetchAbout().then((data) => {
      setPages(data);
    });
  }, []);

  return <ContentWithSideMenu dataList={pages} />;
}

export default About;
