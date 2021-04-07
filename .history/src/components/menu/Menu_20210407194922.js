/** @format */

import React from "react";
import styles from "./Menu.module.css";
import { Link } from "react-router-dom";

export default () => {
  return (
    <>
      <div className={styles.menuContainer}>
        <div className={styles.menuList}>
          <ul>
            <li>
              <Link to='/'>Мэдээ</Link>
            </li>
            <li>
              <Link to='/about'>Нийгэмлэгийн тухай</Link>
              {SecondMenu}
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
