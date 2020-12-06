import React from "react";
import python from "../../assests/svg/catalog/python.svg";
const CatalogCard = () => {
	return (
		<div className="cardContainer">
			<div className="catalogCard">
				<img src={python} alt="" />
				<h3>Explore all python</h3>
			</div>
		</div>
	);
};

export default CatalogCard;
