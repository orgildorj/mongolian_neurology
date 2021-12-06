/** @format */

import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { Link } from "react-router-dom";
import Article from "../Article/Article";
import "./ContentWithSideMenu.scss";

const ContentWithSideMenu = ({ dataList }) => {
  console.log(dataList);
  let { path } = useRouteMatch();

  return (
    <div className='content-with-side-menu-container'>
      <SelectedContent dataList={dataList} path={path} />
      <SideMenu dataList={dataList} path={path} />
    </div>
  );
};

const SideMenu = ({ dataList, path }) => {
  return (
    <div class='side-menu'>
      <ul>
        {dataList.length
          ? dataList.map(({ id, Title }) => (
              <li>
                <Link to={`${path}/${id}`}>
                  {Title}
                  {/* <button className='btn'></button> */}
                </Link>
              </li>
            ))
          : ""}
      </ul>
    </div>
  );
};

const SelectedContent = ({ dataList, path }) => {
  return (
    <div className='selected-article'>
      <Switch>
        <Route exact path={`${path}`}>
          <Article articleData={dataList[0]} />
        </Route>
        {dataList.length
          ? dataList.map(({ id }) => (
              <Route exact path={`${path}/${id}`}>
                <Article articleData={dataList[id - 1]} />
              </Route>
            ))
          : ""}
      </Switch>
    </div>
  );
};

export default ContentWithSideMenu;
