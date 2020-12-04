/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
const Quiz = () => {
	return (
		<div className="quiz">
			<button className="quiz__catalog-btn">Catalog Menu →</button>

			<div className="quiz__box">
				<div className="quiz__box-items">
					<p>Not sure where to begin?</p>
					<p>
						<a href="#" className="quiz__box-items-link">
							Take our quiz →
						</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Quiz;
