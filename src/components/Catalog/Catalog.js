import React from "react";
import Quiz from "../quiz/Quiz";
import PopularCatalog from "./PopularCatalog";
import NewsNoteWorth from "./newsNoteWorthy/NewsNoteWorth";
import GetInpsire from "./getInspireSectiion/GetInspire";
const Catalog = () => {
	return (
		<div className="container">
			<Quiz />
			<PopularCatalog />
			<NewsNoteWorth />
			<GetInpsire />
		</div>
	);
};

export default Catalog;
