import React from "react";
import Quiz from "../quiz/Quiz";
import PopularCatalog from "./PopularCatalog";
import NewsNoteWorth from "./newsNoteWorthy/NewsNoteWorth";
import GetInpsire from "./getInspireSectiion/GetInspire";
import Footer from "../footer/Footer";
const Catalog = () => {
	return (
		<div className="container">
			<Quiz />
			<PopularCatalog />
			<NewsNoteWorth />
			<GetInpsire />
			<Footer />
		</div>
	);
};

export default Catalog;
