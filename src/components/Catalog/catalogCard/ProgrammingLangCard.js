import React from "react";

const ProgrammingLangCard = ({ title }) => {
	return (
		<div className="catalogCard programmingLang">
			<p>Course</p>
			<h3>{title}</h3>

			<div className="programmingLang--progress">
				<p className="programmingLang--motivate-1">In Progress. . .</p>
				<p className="programmingLang--motivate-2">Keep going</p>
			</div>
		</div>
	);
};

export default ProgrammingLangCard;
