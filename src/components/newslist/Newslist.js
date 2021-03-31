/** @format */

import React from "react";
import { Link } from "react-router-dom";

import data from "../../data/demo_news.json";

const Newslist = () => (
	<ul>
		{data.map(({ id, title }) => (
			<li>
				<Link key={id} to={`article/${id}`}>
					{title}
				</Link>
			</li>
		))}
	</ul>
);

export default Newslist;
