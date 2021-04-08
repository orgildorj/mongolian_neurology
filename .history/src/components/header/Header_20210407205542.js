/** @format */

import React, { useState } from "react";
import Menu from "../menu/Menu";
import { Link } from "react-router-dom";

import styles from "./Header.module.css";
import commonStyles from "../Common.module.css";

function Header() {
  const [clicked, setClicked] = useState(false);

  return (
    <div className={styles.header}>
      <div className={commonStyles.content}>
        <div className={styles.headerContainer}>
          <div className={styles.logoContainer}>
            <Link to='/'>
              <img src='http://localhost:3000/assets/logo.png' />
            </Link>
          </div>
          <Menu clicked={clicked} setClicked={setClicked} />
        </div>
        {clicked ? <SecondMenu /> : ""}
      </div>
    </div>
  );
}

export default Header;

const SecondMenu = () => {
  return (
    <div className={styles.secondMenu}>
      <ul>
        <li>
          <Link to='/administration'>Удирдлага, бүтэц</Link>
        </li>
        <li>
          <Link to='/membership'> Гишүүнээр элсэх</Link>
        </li>
        <li>
          <Link to='/subgroups'>Дэд бүлгүүд</Link>
        </li>
      </ul>
    </div>
  );
};
