/** @format */
import React, { useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import $ from "jquery";

import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Article from "./components/article/Article";
import Home from "./components/home/Home";

// NormalContent
import Achievement from "./components/pages/NormalContent/Achievement";
import Administration from "./components/pages/NormalContent/Administration";
import Contact from "./components/pages/NormalContent/Contact";
import ForeignAssemblies from "./components/pages/NormalContent/ForeignAssemblies";
// Content With SideMenu
import MedicalOrganizations from "./components/pages/ContentWithSideMenu/MedicalOrganizations";
import Membership from "./components/pages/ContentWithSideMenu/Membership";
import Subgroups from "./components/pages/ContentWithSideMenu/Subgroups";
import EnglishPage from "./components/pages/ContentWithSideMenu/EnglishPage";

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.startsWith("/about")) {
      $(".normalContent-container").css("padding-top", "1.5rem");
      $(".content-container").css("padding-top", "1.5rem");
    }
  }, [location]);

  return (
    <div className='app-container'>
      <Header className='header' />
      <div class='body-container'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/article/:id' component={Article} />

          {/* About */}
          <Route
            exact
            path='/about/administration'
            component={Administration}
          />
          <Route exact path='/about/membership' component={Membership} />
          <Route exact path='/about/subgroups' component={Subgroups} />
          <Route exact path='/about/achievement' component={Achievement} />

          {/* Info */}
          <Route
            exact
            path='/info/medical-organizations'
            component={MedicalOrganizations}
          />
          <Route
            exact
            path='/info/foreign-assemblies'
            component={ForeignAssemblies}
          />

          {/* Contact */}
          <Route exact path='/contact' component={Contact} />

          {/* English Page */}
          <Route exact path='/en' component={EnglishPage} />
          {/* <Route exact path='/partners' component={Partners} /> */}
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
