import React from "react";

const ExploreCard = ({ title }) => {
	return (
		<div className="catalogCard exploreCard">
			<p>Course</p>
			<h3>{title}</h3>

			<div className="exploreCard--progress">
				<p className="exploreCard--motivate-1">In Progress. . .</p>
				<p className="exploreCard--motivate-2">Keep going</p>
			</div>
		</div>
	);
};

export default ExploreCard;
