/** @format */
import { Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/header/Header";
import ContentWithSideMenu from "./components/contentWithSideMenu/ContentWithSideMenu";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";
import Article from "./components/article/Article";
import Home from "./components/home/Home";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />

        <Route exact path='/article/:id' component={Article} />
        <Route exact path='/about' component={ContentWithSideMenu} />
        <Route
          exact
          path='/foreign-assemblies'
          component={() => <Content type='foreign-assemblies' />}
        />
        <Route
          exact
          path='/administration'
          component={() => <Content type='administration' />}
        />
        <Route
          exact
          path='/contact'
          component={() => <Content type='contact' />}
        />

        <Route
          exact
          path='/membership'
          component={() => <ContentWithSideMenu type='membership_info' />}
        />
        <Route
          exact
          path='/subgroups'
          component={() => <ContentWithSideMenu type='subgroups' />}
        />
      </Switch>
      <Footer></Footer>
    </>
  );
}

export default App;
