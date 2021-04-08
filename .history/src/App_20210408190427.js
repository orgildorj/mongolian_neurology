/** @format */
import { Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/header/Header";
import MultiContent from "./components/multiContent/MultiContent";
import SingleContent from "./components/singleContent/SingleContent";
import Footer from "./components/footer/Footer";
import Newslist from "./components/newslist/Newslist";
import Article from "./components/article/Article";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Newslist />
        </Route>
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
          component={() => <SingleContent type='administrations' />}
        />
      </Switch>
      <Footer></Footer>
    </>
  );
}

export default App;
