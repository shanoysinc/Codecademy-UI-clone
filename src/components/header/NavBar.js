/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../../assests/svg/codecademy-logo.com.svg";
import notification from "../../assests/svg/notification.svg";
import menu from "../../assests/svg/menu.svg";
import course from "../../assests/svg/agenda.svg";
import community from "../../assests/svg/chat-group.svg";
import price from "../../assests/svg/dollar.svg";
import home from "../../assests/svg/home.svg";
import book from "../../assests/svg/book.svg";
import userPhoto from "../../assests/img/images.jpg";

const NavBar = () => {
	const toggleHandler = () => {
		const toggle = document.getElementById("navbar__toggle");
		const navbar = document.querySelector(".navbar");
		if (toggle.style.display === "block") {
			toggle.style.display = "none";
			navbar.style.bottom = null;
		} else {
			toggle.style.display = "block";
			navbar.style.bottom = 0;
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
					<a href="#">
						<img
							src={home}
							alt="home icon"
							className="navbar__icon--md"
						/>
						My Home
					</a>

					<a href="#">
						<img
							src={course}
							alt="course icon"
							className="navbar__icon--md"
						/>
						Course Catalog
					</a>

					<a href="#">
						<img
							src={book}
							alt="book icon"
							className="navbar__icon--md"
						/>
						Resources
					</a>

					<a href="#">
						<img
							src={community}
							alt="community icon"
							className="navbar__icon--md"
						/>
						Community
					</a>

					<a href="#">
						<img
							src={price}
							alt="price icon"
							className="navbar__icon--md"
						/>
						Plans + Pricing
					</a>

					<a href="#">
						<img
							src={userPhoto}
							alt="User"
							className="navbar__icon--md user-photo"
						/>
						Shanoy Sinclair
					</a>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
