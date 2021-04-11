/** @format */

import React, { useState } from "react";
import styles from "./Menu.module.css";
import { Link } from "react-router-dom";

export default ({ showMenu1, setShowMenu1, showMenu2, setShowMenu2 }) => {
  const clickFirstMenu = () => {
    setShowMenu1(!showMenu1);
  };

  const clickSecondMenu = () => {
    setShowMenu2(!showMenu2);
  };

  return (
    <>
      <div className={styles.menuContainer}>
        <ul className={styles.mainMenu}>
          <li>
            <Link to='/' onMouseEnter={clickFirstMenu}>
              Мэдээ
            </Link>
            <div
              className={styles.secondMenu}
              style={showMenu1 ? {} : { display: "none" }}>
              <ul>
                <li>
                  <Link to='/news'>Шинэ мэдээ</Link>
                </li>
                <li>
                  <Link>Үйл явдал</Link>
                </li>
                <li>
                  <Link to='/gallery'>Зургийн Сан</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className={styles.hasSubMenu}>
            <Link to='/about' onMouseEnter={clickSecondMenu}>
              Нийгэмлэгийн тухай
            </Link>

            <div
              className={styles.secondMenu}
              style={showMenu2 ? {} : { display: "none" }}>
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
                <li>
                  <Link to='/contact'>Холбоо барих</Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
