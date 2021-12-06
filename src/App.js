/** @format */
import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import Routes from "./Routes";
// import NewsArticle from "./components/pages/newsArticle/NewsArticle";
// import Home from "./components/home/Home";
// import News from "./components/pages/news/News";

// // NormalContent
// // Content With SideMenu
// import Membership from "./components/pages/Membership";
// import EnglishPage from "./components/pages/EnglishPage";
// import About from "./components/pages/About";

function App() {
  return (
    <div className='app-container'>
      <Header className='header' />
      <div class='body-container'>
        <RenderRoutes routes={Routes} />
      </div>
      <Footer />
    </div>
  );
}

export default App;

const RenderRoutes = ({ routes }) => {
  return (
    <Switch>
      {routes.map((route, i) => {
        return <RouteWithSubRoutes key={route.key} {...route} />;
      })}
    </Switch>
  );
};

const RouteWithSubRoutes = (route) => {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
};
