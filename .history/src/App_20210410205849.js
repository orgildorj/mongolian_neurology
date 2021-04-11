/** @format */
import { Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/header/Header";
import MultiContent from "./components/multiContent/MultiContent";
import SingleContent from "./components/singleContent/SingleContent";
import Footer from "./components/footer/Footer";
import News from "./components/news/News";
import Article from "./components/article/Article";
import Home from "./components/home/Home";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/news' component={News} />

        <Route exact path='/article/:id' component={Article} />
        <Route exact path='/about' component={MultiContent} />

        <Route
          exact
          path='/membership'
          component={() => <MultiContent type='membership_info' />}
        />
        <Route
          exact
          path='/subgroups'
          component={() => <MultiContent type='subgroups' />}
        />
        <Route
          exact
          path='/administration'
          component={() => <SingleContent type='administration' />}
        />
      </Switch>
      <Footer></Footer>
    </>
  );
}

export default App;
