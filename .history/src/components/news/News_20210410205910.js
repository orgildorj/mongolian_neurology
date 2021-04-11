import React from "react";
import NewsList from "../newsList/NewsList";

export default () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    if (articles.length === 0) {
      fetchArticles().then((data) => setArticles(data));
    }
  });

  return (
    <div>
      <NewsList />
    </div>
  );
};
