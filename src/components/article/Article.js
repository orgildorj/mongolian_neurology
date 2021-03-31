/** @format */

import React from "react";
import { useParams } from "react-router-dom";

import data from "../../data/demo_news.json";

const Article = () => {
	const { id } = useParams();
	const articleData = data.find((d) => d.id == id);

	return (
		<div>
			<img src={articleData.images[0].src} />
			<h1>{articleData.title}</h1>
			<p>{articleData.text}</p>
		</div>
	);
};

export default Article;
