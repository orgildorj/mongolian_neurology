/** @format */

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import "./Dropdown.scss";

const Dropdown = (props) => {
  const { type, items, open } = props;

  useEffect(() => {
    var component = ".dropdown." + type;
    if (open) {
      $(component).show();
    } else {
      $(component).hide();
    }
  }, [open]);

  return (
    <ul className={"dropdown " + type}>
      {items.map(({ title, path }) => (
        <li className={"dropdown-item " + type}>
          <button>
            <Link to={path}>{title}</Link>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
