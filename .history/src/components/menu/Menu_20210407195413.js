/** @format */

import React, { useState } from "react";
import styles from "./Menu.module.css";
import { Link } from "react-router-dom";

export default () => {
  const [clicked, setClicked] = useState(false);

  const clickHandler = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <div className={styles.menuContainer}>
        <div className={styles.menuList}>
          <ul>
            <li>
              <Link to='/'>Мэдээ</Link>
            </li>
            <li>
              <button onClick={clickHandler}>Нийгэмлэгийн тухай</button>
              {clicked ? <SecondMenu /> : ""}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

const SecondMenu = () => {
  return (
    <div className={styles.subMenuList}>
      <ul>
        <li>Удирдлага, бүтэц</li>
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
