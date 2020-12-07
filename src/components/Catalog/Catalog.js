import React from "react";
import Quiz from "../quiz/Quiz";
import PopularCatalog from "./PopularCatalog";
import NewsNoteWorth from "./newsNoteWorthy/NewsNoteWorth";
const Catalog = () => {
	return (
		<div className="container">
			<Quiz />
			<PopularCatalog />
			<NewsNoteWorth />
		</div>
	);
};

export default Catalog;
