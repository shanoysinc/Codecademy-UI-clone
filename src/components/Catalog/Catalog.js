import React from "react";
import Quiz from "../quiz/Quiz";
import PopularCatalog from "./PopularCatalog";
import NewsNoteWorth from "./newsNoteWorthy/NewsNoteWorth";
import GetInpsire from "./getInspireSectiion/GetInspire";
import Footer from "../footer/Footer";
const Catalog = () => {
	return (
		<div className="catalogContainer__outer">
			<div className="catalogContainer__inner">
				<Quiz />
				<PopularCatalog />
				<NewsNoteWorth />
				<GetInpsire />
			</div>
			<Footer />
		</div>
	);
};

export default Catalog;
