import React from "react";
import CompanyInfo from "./CompanyInfo/CompanyInfo";
import CourseCatalog from "./CourseCatalog/CourseCatalog";

const Footer = () => {
	return (
		<div className="footerContainer__outer">
			<div className="footerContainer__inner">
				<CompanyInfo />
				<CourseCatalog />
			</div>
		</div>
	);
};

export default Footer;
