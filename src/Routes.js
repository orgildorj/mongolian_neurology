import { Redirect } from "react-router";
import Home from "./components/home/Home";
import About from "./components/pages/About";
import EnglishPage from "./components/pages/EnglishPage";
import Membership from "./components/pages/Membership";
import News from "./components/pages/news/News";
import NewsArticle from "./components/pages/newsArticle/NewsArticle";

// { path: "", exact: true, component:  },
const Routes = [
  { path: "/", key: "home", exact: true, component: Home },
  { path: "/article/:id", exact: true, component: NewsArticle },
  { path: "/about", component: () => <About /> },
  { path: "/membership", component: () => <Membership /> },
  { path: "/news", exact: true, component: News },
  { path: "/en", component: () => <EnglishPage /> },
];

export default Routes;
