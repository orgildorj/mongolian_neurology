/** @format */

import "./App.css";
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";
import { Switch, Route } from "react-router-dom";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <>
      <Header></Header>
      <Switch>
        <Route exact path='/' component={Content} />
        <Route exact path='/about' component={Content} />
        <Route exact path='/news' component={Content} />
        <Route exact path='/contact' component={Contact} />
      </Switch>
      <Footer></Footer>
    </>
  );
}

export default App;
