import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import ImageSlider from "./ImageSlider";

export const Article = ({ siteData }) => {
  const { Title, Text, Images } = siteData;

  return (
    <div className='article-container'>
      <ImageSlider images={Images} />
      <h1>{Title}</h1>
      <hr />
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{Text}</ReactMarkdown>
    </div>
  );
};

// import { useParams } from "react-router-dom";
// import { fetchArticle } from "../../../modules/article/ArticleService";

// import ImageSlider from "./ImageSlider";

// const NewsArticle = () => {
//   const { id } = useParams();
//   const [article, setArticle] = useState({
//     id: 0,
//     Title: "",
//     Date: "",
//     Text: "",
//     Images: [],
//   });

//   useEffect(() => {
//     if (article["id"] === 0) {
//       fetchArticle(id).then((data) => {
//         setArticle(data);
//       });
//     }
//   }, []);

//   const images = article["Images"];

//   return (
//     <div className='article-container'>
//       <ImageSlider images={images} />

//       <h1>{article["Title"]}</h1>
//       <hr />
//       <ReactMarkdown remarkPlugins={[remarkGfm]}>
//         {article["Text"]}
//       </ReactMarkdown>
//     </div>
//   );
// };

// export default NewsArticle;
