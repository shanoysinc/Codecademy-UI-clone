import React from "react";

const CourseCard = ({ title }) => {
	return (
		<div className="catalogCard courseCard">
			<p>Course</p>
			<h3>{title}</h3>

			<div className="courseCard--progress">
				<p className="courseCard--motivate-1">In Progress. . .</p>
				<p className="courseCard--motivate-2">Keep going</p>
			</div>
		</div>
	);
};

export default CourseCard;
