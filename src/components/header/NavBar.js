/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../../assests/svg/codecademy-logo.com.svg";
import notification from "../../assests/svg/notification.svg";
import menu from "../../assests/svg/menu.svg";

const NavBar = () => {
	const toggleHandler = () => {
		const toggle = document.getElementById("navbar__toggle");
		if (toggle.style.display === "block") {
			toggle.style.display = "none";
		} else {
			toggle.style.display = "block";
		}
	};
	return (
		<div className="navbar">
			<img src={logo} alt="logo" className="navbar__logo" />
			<div className="navbar__icons">
				<img
					src={notification}
					alt="notification"
					className=" navbar__icon--sml"
				/>
				<button onClick={toggleHandler} className="navbar__toggle-btn">
					<img src={menu} alt="menu" className="navbar__icon--sml" />
				</button>
			</div>
			<div id="navbar__toggle">
				<div className="navbar__list">
					<a href="#">My Home</a>

					<a href="#"> Course Catalog</a>

					<a href="#">Resources</a>

					<a href="#">Community</a>

					<a href="#">Plans + Pricing</a>

					<a href="#">Shanoy Sinclair</a>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
