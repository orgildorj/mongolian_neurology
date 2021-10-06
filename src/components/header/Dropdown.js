/** @format */

import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import $ from "jquery";
import "./Dropdown.scss";

const Dropdown = (props) => {
  const { type, items, open } = props;
  const location = useLocation();

  useEffect(() => {
    var component = ".dropdown." + type;
    if (open) {
      $(component).show();
    } else {
      $(component).hide();
    }
  }, [open]);

  useEffect(() => {
    for (let i = 0; i < items.length; i++) {
      let component = ".dropdown-item." + type + ".index" + i;

      if (items[i].path === location.pathname) {
        if (window.innerWidth <= 960) {
          $(component + " > button ").css("background", "#3a3a82");
        } else {
          $(component + " > button ").css("border-bottom", "solid 3px red");
        }
      } else {
        if (window.innerWidth <= 960) {
          $(component + " > button ").css("background", "#004f9a");
        } else {
          $(component + " > button ").css("border-bottom", "none");
        }
      }
    }
  }, [location]);

  return (
    <ul className={"dropdown " + type}>
      {items.map(({ title, path }, index) => (
        <li className={"dropdown-item " + type + " index" + index}>
          <button>
            <Link to={path}>{title}</Link>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
