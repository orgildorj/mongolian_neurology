/** @format */
import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Article from "./components/article/Article";
import Home from "./components/home/Home";
import News from "./components/news/News";

// NormalContent
// Content With SideMenu
import Membership from "./components/pages/ContentWithSideMenu/Membership";
import EnglishPage from "./components/pages/ContentWithSideMenu/EnglishPage";
import About from "./components/pages/ContentWithSideMenu/About";

function App() {
  return (
    <div className='app-container'>
      <Header className='header' />
      <div class='body-container'>
        <Switch>
          {/* Article */}
          <Route exact path='/' component={Home} />
          <Route exact path='/article/:id' component={Article} />

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
