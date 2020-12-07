import React from "react";

const ExploreCard = ({ title, svg }) => {
	return (
		<div className="catalogCard exploreCard">
			<img src={svg} alt="" />
			<h3>{title}</h3>
		</div>
	);
};

export default ExploreCard;
