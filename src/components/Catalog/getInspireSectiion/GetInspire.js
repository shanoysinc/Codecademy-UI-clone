import React from "react";
import GetInspireLink from "./GetInspireLink";

const GetInspire = () => {
	return (
		<div className="getInspire">
			<h2>Get Inspired</h2>
			<GetInspireLink
				contentType={"Video"}
				title={"What is a Programming Language?"}
			/>
			<GetInspireLink
				contentType={"BLOG"}
				title={"Our First Mobile Development Path Has Arrived"}
			/>
			<GetInspireLink
				contentType={"video"}
				title={"How to Think Like a Programmer"}
			/>
			<GetInspireLink
				contentType={"video"}
				title={"How Long Does it Take to Learn to Code?"}
			/>
		</div>
	);
};

export default GetInspire;
