/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const InspireLinkWithImg = ({ contentType, title, img }) => {
	return (
		<div className="inspireLinkWithImg">
			<img src={img} alt="" />
			<p>{contentType}</p>
			<a href="#">{title}</a>
		</div>
	);
};

export default InspireLinkWithImg;
