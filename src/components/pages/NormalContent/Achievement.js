/** @format */

import React, { useState, useEffect } from "react";
import { fetchAchievement } from "../../../modules/achievement/AchievementService";
import NormalContent from "./NormalContent";

function Achievement() {
  const [article, setArticle] = useState({
    id: 0,
    Title: "",
    Text: "",
  });

  useEffect(() => {
    fetchAchievement().then((data) => {
      setArticle(data);
    });
  }, []);

  return <NormalContent title={article["Title"]} text={article["Text"]} />;
}

export default Achievement;
