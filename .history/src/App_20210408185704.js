/** @format */
import { Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/header/Header";
import Content from "./components/multContent/MultContent";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
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
        <Route exact path='/about' component={Content} />

        <Route
          exact
          path='/membership'
          component={() => <Content type='membership_info' hasSubMenu={true} />}
        />
        <Route
          exact
          path='/subgroups'
          component={() => <Content type='subgroups' hasSubMenu={true} />}
        />
        <Route
          exact
          path='/administration'
          component={() => (
            <Content type='administrations' hasSubMenu={false} />
          )}
        />
      </Switch>
      <Footer></Footer>
    </>
  );
}

export default App;