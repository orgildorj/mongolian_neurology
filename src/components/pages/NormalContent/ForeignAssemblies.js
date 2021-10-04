/** @format */

import React, { useEffect, useState } from "react";
import { fetchForeignAss } from "../../../modules/foreign_assemblies/ForeignAssService";
import NormalContent from "./NormalContent";

function ForeignAssemblies() {
  const [article, setArticle] = useState({
    id: 0,
    Title: "",
    Text: "",
  });

  useEffect(() => {
    fetchForeignAss().then((data) => {
      setArticle(data);
    });
  }, []);

  return <NormalContent title={article["Title"]} text={article["Text"]} />;
}

export default ForeignAssemblies;
