/** @format */

import React, { useState } from "react";
import styles from "./Menu.module.css";
import { Link } from "react-router-dom";

import commonStyles from "../Common.module.css";

export default ({ show, setShow }) => {
  const clickHandler = () => {
    setShow(!show);
  };

  return (
    <>
      <div className={styles.menuContainer}>
        <ul className={styles.mainMenu}>
          <li>
            <Link to='/'>Мэдээ</Link>
          </li>
          <li className={styles.hasSubMenu}>
            <Link to='/about' onMouseEnter={clickHandler}>
              Нийгэмлэгийн тухай
            </Link>
            <div className={show ? "" : styles.notShow}>
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
                  <li>
                    <Link to='/contact'>Холбоо барих</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
