/** @format */
import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import NewsArticle from "./components/pages/newsArticle/NewsArticle";
import Home from "./components/home/Home";
import News from "./components/pages/news/News";

// NormalContent
// Content With SideMenu
import Membership from "./components/pages/Membership";
import EnglishPage from "./components/pages/EnglishPage";
import About from "./components/pages/About";

function App() {
  return (
    <div className='app-container'>
      <Header className='header' />
      <div class='body-container'>
        <Switch>
          {/* Article */}
          <Route exact path='/' component={Home} />
          <Route exact path='/article/:id' component={NewsArticle} />

          {/* About */}
          <Route exact path='/about' component={About} />
          <Route exact path='/membership' component={Membership} />

          {/* News */}
          <Route exact path='/news' component={News} />
          <Route exact path='/news/page/:id' component={News} />

          {/* English Page */}
          <Route exact path='/en' component={EnglishPage} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
