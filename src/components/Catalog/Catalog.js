import React from "react";
import Quiz from "../quiz/Quiz";
import PopularCatalog from "./PopularCatalog";
const Catalog = () => {
	return (
		<div className="container">
			<Quiz />
			<PopularCatalog />
		</div>
	);
};

export default Catalog;
