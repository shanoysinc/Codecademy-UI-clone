import React from "react";
import python from "../../assests/svg/catalog/python.svg";
import curriculum from "../../assests/svg/catalog/curriculum-card.svg";
import webDevelopment from "../../assests/svg/catalog/web-development.svg";
import dataScience from "../../assests/svg/catalog/data-science.svg";
import dataScientist from "../../assests/svg/catalog/dataScientist.svg";
import fullstack from "../../assests/svg/catalog/fullstack.svg";
import javascript from "../../assests/svg/catalog/javascript.svg";

import ProgrammingLangCard from "./catalogCard/ProgrammingLangCard";
import CareerPathCard from "./catalogCard/CareerPathCard";
import CourseCard from "./catalogCard/CourseCard";

const CatalogCard = () => {
	return (
		<div className="cardContainer">
			<CourseCard title={"Explore all python"} svg={python} />

			<CareerPathCard title={"Front-End engineer"} svg={curriculum} />

			<ProgrammingLangCard title={"Learn Javascript"} />
			<CourseCard
				title={"Explore all web development"}
				svg={webDevelopment}
			/>
			<CourseCard title={"learn python 3"} svg={python} />
			<CourseCard title={"Explore all Data science"} svg={dataScience} />
			<CareerPathCard title={"Data Scientist"} svg={dataScientist} />

			<CourseCard title={"Explore all Javascript"} svg={javascript} />
			<CareerPathCard title={"Full-Stack engineer"} svg={fullstack} />

			<ProgrammingLangCard title={"Welcome to Codecademy"} />
		</div>
	);
};

export default CatalogCard;
