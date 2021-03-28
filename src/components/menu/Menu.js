/** @format */

import React from "react";
import styles from "./Menu.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Menu() {
  return (
    <Router>
      <div className={styles.menuContainer}>
        <div className={styles.menuList}>
          <ul>
            <li>
              <Link to='/'>Нүүр</Link>
            </li>
            <li>
              <Link to='/about'>Бидний тухай</Link>
            </li>
            <li>
              <Link to='/news'>Мэдээ</Link>
            </li>
            <li>
              <Link to='/contact'>Холбоо барих</Link>
            </li>
          </ul>
        </div>
        <div className={styles.enMenu}>
          <Link>English</Link>
        </div>
        <Switch>
          <Route path='/about'></Route>
          <Route path='/users'></Route>
          <Route path='/'></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Menu;
