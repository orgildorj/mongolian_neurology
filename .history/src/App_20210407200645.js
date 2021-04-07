/** @format */
import { Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import Newslist from "./components/newslist/Newslist";
import Article from "./components/article/Article";

function App() {
  return (
    <>
      <Header></Header>
      <Switch>
        <Route exact path='/'>
          <Newslist />
        </Route>
        <Route exact path='/article/:id' component={Article} />
        <Route exact path='/about' component={Content} />
        <Route exact path='/about' component={Content} />

        <Route
          exact
          path='/membership'
          render={() => <Content type='membership_info' />}
        />
        <Route
          exact
          path='/subgroups'
          render={() => <Content type='subgroups' />}
        />
      </Switch>
      <Footer></Footer>
    </>
  );
}

export default App;
