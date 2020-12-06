import React from "react";

const CourseCard = ({ title, svg }) => {
	return (
		<div className="catalogCard course">
			<img src={svg} alt="" />
			<h3>{title}</h3>
		</div>
	);
};

export default CourseCard;
